import {
  Shirt, ShieldCheck, Bot, Fingerprint, Lock, Sparkles, ArrowRight, Wallet,
  Recycle, Search, MessageCircle, Heart, Layers, Image as ImageIcon,
} from 'lucide-react';
import { ScreenshotShowcase } from '@/components/ScreenshotShowcase';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://rewear-app-xi.vercel.app';

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center">
        <Shirt className="w-5 h-5 text-white" />
      </div>
      <span className="text-xl font-bold tracking-tight">ReWear</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#problema" className="hover:text-slate-900 transition-colors">El problema</a>
            <a href="#como-funciona" className="hover:text-slate-900 transition-colors">Cómo funciona</a>
            <a href="#features" className="hover:text-slate-900 transition-colors">Características</a>
            <a href="#capturas" className="hover:text-slate-900 transition-colors">Producto</a>
          </nav>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            Ir a la app <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
        <div className="relative max-w-6xl mx-auto px-5 pt-20 pb-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-xs font-medium text-indigo-700 shadow-sm mb-7">
            <Recycle className="w-3.5 h-3.5" /> Moda circular descentralizada
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08] max-w-3xl mx-auto">
            Compra y vende ropa de segunda mano <span className="text-indigo-600">con confianza real</span>
          </h1>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
            ReWear combina <strong className="text-slate-700">inteligencia artificial</strong>, <strong className="text-slate-700">NFTs</strong> y <strong className="text-slate-700">pago con custodia en blockchain</strong> para
            que cada prenda sea verificada, auténtica y libre de estafas. Sin intermediarios.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm">
              Entrar al marketplace <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#como-funciona"
              className="inline-flex items-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-xl transition-colors">
              Ver cómo funciona
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: <Bot className="w-5 h-5" />, label: 'Verificación con IA' },
              { icon: <Fingerprint className="w-5 h-5" />, label: 'Pasaporte NFT' },
              { icon: <Lock className="w-5 h-5" />, label: 'Pago en custodia' },
              { icon: <Recycle className="w-5 h-5" />, label: 'Economía circular' },
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-2 text-slate-500">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">{t.icon}</div>
                <span className="text-xs font-medium text-slate-600">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Problema ─── */}
      <section id="problema" className="max-w-6xl mx-auto px-5 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">El problema</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">El mercado de segunda mano sufre de falta de confianza</h2>
            <p className="mt-5 text-slate-500 leading-relaxed">
              ¿Cómo sé que la prenda es auténtica? ¿Cómo sé que su estado es el que dice el vendedor?
              ¿Cómo pago sin que me estafen? La compra-venta de ropa usada entre personas tiene
              <strong className="text-slate-700"> información asimétrica</strong>: el comprador no puede verificar lo que compra
              y no existe un registro confiable del historial de una prenda.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { q: '¿Es auténtica?', a: 'Sin forma de verificar la marca ni el estado real.' },
              { q: '¿Me van a estafar?', a: 'El dinero se entrega directo, sin garantías.' },
              { q: '¿Cuál es su historia?', a: 'No hay trazabilidad de dueños ni de origen.' },
            ].map((c) => (
              <div key={c.q} className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                <p className="font-semibold text-slate-900">{c.q}</p>
                <p className="text-sm text-slate-500 mt-1">{c.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Cómo funciona ─── */}
      <section id="como-funciona" className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">Cómo funciona</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Tres tecnologías, una sola promesa: confianza</h2>
            <p className="mt-4 text-slate-500">ReWear ataca el problema de raíz combinando IA, blockchain y custodia de fondos.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: '01', icon: <Bot className="w-6 h-6" />, title: 'Verificación con IA',
                desc: 'Al publicar una prenda, una IA de visión por computadora analiza las fotos: confirma que sea ropa, identifica la marca y evalúa su estado. Lo que no es una prenda, se rechaza automáticamente.',
              },
              {
                n: '02', icon: <Fingerprint className="w-6 h-6" />, title: 'Pasaporte digital NFT',
                desc: 'Cada prenda verificada recibe un NFT: un pasaporte inmutable en la blockchain con su dictamen de autenticidad e historial de dueños. Nadie —ni la plataforma— puede falsificarlo después.',
              },
              {
                n: '03', icon: <Lock className="w-6 h-6" />, title: 'Pago con custodia (escrow)',
                desc: 'El dinero del comprador queda retenido en un contrato inteligente, no en manos del vendedor, hasta que confirma la recepción. Si hay un problema, se abre una disputa y la plataforma resuelve.',
              },
            ].map((s) => (
              <div key={s.n} className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center">{s.icon}</div>
                  <span className="text-3xl font-bold text-slate-100">{s.n}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section id="features" className="max-w-6xl mx-auto px-5 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">Características</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Todo lo que necesitás para comprar y vender seguro</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: <Wallet className="w-5 h-5" />, title: 'Login con billetera', desc: 'Tu identidad es tu wallet Web3. Sin contraseñas que se filtren.' },
            { icon: <ImageIcon className="w-5 h-5" />, title: 'Verificador de autenticidad', desc: 'Subí una foto y comprobá si esa prenda ya está registrada con su NFT.' },
            { icon: <Search className="w-5 h-5" />, title: 'Catálogo verificado', desc: 'Solo prendas que pasaron la verificación de IA aparecen a la venta.' },
            { icon: <Heart className="w-5 h-5" />, title: 'Favoritos', desc: 'Guardá las prendas que te gustan para no perderlas de vista.' },
            { icon: <MessageCircle className="w-5 h-5" />, title: 'Chat entre partes', desc: 'Coordiná la entrega directamente con el comprador o vendedor.' },
            { icon: <Layers className="w-5 h-5" />, title: 'Historial on-chain', desc: 'Mirá todas las transacciones por las que pasó cada NFT.' },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 p-6 hover:border-indigo-300 hover:shadow-sm transition-all">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">{f.icon}</div>
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="text-sm text-slate-500 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Capturas / La app en acción ─── */}
      <section id="capturas" className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">La app en acción</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Así se ve ReWear por dentro</h2>
            <p className="mt-4 text-slate-500">Del catálogo a la verificación con IA y el pago con custodia en blockchain.</p>
          </div>
          <ScreenshotShowcase />
        </div>
      </section>

      {/* ─── CTA final ─── */}
      <section className="max-w-6xl mx-auto px-5 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-indigo-600 px-8 py-16 text-center">
          <Sparkles className="w-8 h-8 text-indigo-200 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight max-w-2xl mx-auto">
            Dale una segunda vida a la moda, con la confianza de la blockchain
          </h2>
          <p className="mt-4 text-indigo-100 max-w-xl mx-auto">Entrá al marketplace, conectá tu billetera y empezá a comprar o vender prendas verificadas.</p>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-7 py-3.5 rounded-xl transition-colors">
            Entrar a ReWear <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-5 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <Logo />
              <p className="text-sm text-slate-400">Plataforma descentralizada de moda circular.</p>
            </div>
            <div className="text-center md:text-right text-sm text-slate-500">
              <p className="font-medium text-slate-700">Proyecto de Taller de Grado</p>
              <p className="mt-1">Bulacia Paz Bruno Leandro · Vargas Osinaga Richard Junior</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <span>© {new Date().getFullYear()} ReWear. Todos los derechos reservados.</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> Autenticidad verificada en blockchain</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
