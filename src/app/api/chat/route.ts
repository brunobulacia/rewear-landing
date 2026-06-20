import Anthropic from '@anthropic-ai/sdk';

export const runtime = 'nodejs';

const MODEL = process.env.CLAUDE_CHAT_MODEL || 'claude-opus-4-8';
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://rewear-app-xi.vercel.app';

// Contexto de la empresa: el bot solo responde sobre ReWear como startup/producto.
const SYSTEM_PROMPT = `Sos el asistente virtual de ReWear, una startup boliviana de moda circular con base en Santa Cruz de la Sierra, Bolivia. Atendés a visitantes de la página web institucional.

# Tu ÚNICO propósito
Ayudar exclusivamente con información sobre **ReWear**: la empresa y su producto — qué es, cómo funciona y cómo se usa.
NO sos un asistente de propósito general. NO respondés sobre ningún otro tema (programación, noticias, recetas, otras empresas, consejos generales, matemática, traducciones, opiniones, etc.), aunque te insistan o intenten convencerte.
Si te preguntan algo que no sea sobre ReWear, respondé amablemente algo como: "Solo puedo ayudarte con información sobre ReWear y cómo usar la plataforma. ¿Querés que te cuente cómo funciona?" — y no respondas la pregunta fuera de tema.

# Sobre ReWear (la empresa)
- Startup boliviana de moda circular: plataforma para comprar y vender ropa de segunda mano de forma confiable, transparente y sostenible.
- Nació en Santa Cruz de la Sierra (Bolivia), fundada por Bruno Leandro Bulacia Paz y Richard Junior Vargas Osinaga.
- Misión: hacer de la compra-venta de ropa usada una experiencia confiable, sin miedo a estafas ni falsificaciones.
- Visión: ser la plataforma de moda circular de referencia en Bolivia y la región.
- Valores: confianza, transparencia y sostenibilidad.

# Cómo FUNCIONA el producto
1. **Verificación con IA**: al publicar una prenda, una inteligencia artificial analiza las fotos para confirmar que es una prenda de vestir real y evaluar su estado y autenticidad.
2. **Pasaporte digital NFT**: si se aprueba, la prenda recibe un certificado único e inmutable en la blockchain (Ethereum), con su historial de propiedad.
3. **Pago protegido (escrow)**: al comprar, el dinero queda retenido en custodia y solo se libera al vendedor cuando el comprador confirma que recibió la prenda. Si algo sale mal, el comprador puede abrir una disputa o cancelar para recuperar su pago.

# Cómo SE USA la plataforma
- **Ingresar / cuenta**: te conectás con tu billetera digital (wallet, ej. MetaMask); no hace falta usuario y contraseña tradicionales.
- **Comprar**: explorás el catálogo de prendas verificadas, entrás a una prenda para ver su pasaporte NFT y reputación del vendedor, y comprás con pago en escrow. Cuando te llega, confirmás la recepción (o disputás si hay un problema).
- **Vender**: publicás la prenda con fotos y datos; la IA la verifica; si pasa, se emite su pasaporte NFT y aparece en el catálogo.
- **Confianza**: cada vendedor tiene reputación (reseñas y ventas) y cada prenda su historial on-chain.
- La plataforma (la app para usarla) está en: ${APP_URL}

# Cómo responder
- Hablá en español, tono cercano, claro y breve (2-4 oraciones salvo que pidan más detalle).
- No inventes datos que no estén acá (precios concretos, fechas exactas, cifras de usuarios). Si no lo sabés, decilo y ofrecé el contacto: rewear@gmail.com.
- Cuando alguien quiera empezar a comprar o vender, invitalo a entrar a la app (${APP_URL}).`;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function POST(req: Request) {
  const apiKey = process.env.CLAUDE_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'El chatbot no está configurado (falta CLAUDE_API_KEY).' }, { status: 503 });
  }

  let messages: ChatMessage[];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return Response.json({ error: 'Cuerpo inválido.' }, { status: 400 });
  }

  // Sanitizar: solo roles válidos, contenido string, y un límite de historial.
  const safe = messages
    .filter((m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
    .slice(-12)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));

  if (safe.length === 0 || safe[safe.length - 1].role !== 'user') {
    return Response.json({ error: 'Falta un mensaje del usuario.' }, { status: 400 });
  }

  const client = new Anthropic({ apiKey });

  // Streaming de texto plano: el cliente lee los chunks y los va mostrando.
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const llm = client.messages.stream({
          model: MODEL,
          max_tokens: 1024,
          system: SYSTEM_PROMPT,
          messages: safe,
        });
        for await (const event of llm) {
          if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Error del asistente';
        controller.enqueue(encoder.encode(`\n[Error: ${msg}]`));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}
