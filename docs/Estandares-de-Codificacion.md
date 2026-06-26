# Estándares y Convenciones de Codificación

Este documento describe las **normas y convenciones de codificación** aplicadas en el desarrollo de **ReWear**. Su objetivo es mantener un código **consistente, legible y mantenible** entre todos los componentes del proyecto (la aplicación, la API de servicios y el sitio web corporativo), que están desarrollados en **TypeScript** sobre los frameworks **Next.js / React** (frontend) y **NestJS** (backend).

---

## 1. Lenguaje y tipado estático

Todo el proyecto se desarrolla en **TypeScript**, aprovechando su **tipado estático** para detectar errores en tiempo de desarrollo. Se definen **interfaces** y **tipos** para las estructuras de datos en lugar de usar tipos genéricos como `any`.

```ts
interface Rating {
  id: string;
  score: number;
  comment: string | null;
}

interface Props {
  currentUserId: string;
}
```

---

## 2. Convenciones de nombrado

Se aplican convenciones de nombrado consistentes según el tipo de elemento:

| Elemento | Convención | Ejemplo |
|----------|------------|---------|
| Variables y funciones | `camelCase` | `handleConfirm`, `disputeReason` |
| Componentes de React y clases | `PascalCase` | `ChatWidget`, `TransactionsService` |
| Constantes globales | `UPPER_SNAKE_CASE` | `API_BASE`, `SYSTEM_PROMPT` |
| Archivos de componentes | `PascalCase.tsx` | `ConnectWallet.tsx` |
| Nombres descriptivos | en español o inglés, claros | `precioMax`, `escrowTradeId` |

```ts
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

function StarSelector({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  // ...
}
```

---

## 3. Manejo de errores con try / catch

Toda operación que pueda fallar (peticiones a la API, operaciones con la billetera, llamadas a servicios externos) se **envuelve en un bloque `try / catch`**, mostrando un mensaje claro al usuario y evitando que la aplicación se interrumpa.

```ts
const handleConfirm = async (txId: string) => {
  setActionLoading(txId);
  try {
    await api.patch(`/transactions/${txId}/confirm`, { txHash });
    reload();
  } catch (err) {
    alert(err instanceof Error ? err.message : 'Error al confirmar');
  } finally {
    setActionLoading(null);
  }
};
```

> Se utiliza el bloque **`finally`** para liberar estados (por ejemplo, indicadores de carga) tanto si la operación tuvo éxito como si falló.

---

## 4. Programación asíncrona (async / await)

Las operaciones asíncronas (peticiones HTTP, consultas a la base de datos, transacciones en la blockchain) se manejan con **`async / await`** en lugar de cadenas de `.then()`, por su mayor legibilidad.

```ts
async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, options);
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Error de red' }));
    throw new Error(error.message);
  }
  return res.json();
}
```

---

## 5. Validación de datos de entrada (DTOs)

En la API (NestJS), los datos que llegan en las peticiones se validan mediante **DTOs** (*Data Transfer Objects*) con decoradores de la librería `class-validator`. Esto asegura que la información sea correcta antes de procesarla.

```ts
export class CreateRatingDto {
  @IsString()
  @IsNotEmpty()
  transactionId: string;

  @IsInt()
  @Min(1)
  @Max(5)
  score: number; // 1–5

  @IsOptional()
  @IsString()
  comment?: string;
}
```

---

## 6. Manejo de errores y respuestas en el backend

En la API, los errores se comunican lanzando **excepciones tipadas** de NestJS, que devuelven el código HTTP correcto y un mensaje claro, en lugar de respuestas genéricas.

```ts
if (tx.buyerId !== userId) {
  throw new ForbiddenException('Solo el comprador puede confirmar');
}
if (tx.status !== 'CONFIRMED') {
  throw new BadRequestException(`Estado inválido: ${tx.status}`);
}
```

---

## 7. Componentes funcionales y hooks (React)

En el frontend, las interfaces se construyen con **componentes funcionales** y **hooks** (`useState`, `useEffect`), evitando los componentes de clase. El estado y los efectos se declaran al inicio del componente.

```ts
export function TransactionsList({ currentUserId }: Props) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<Transaction[]>('/transactions/mine')
      .then(setTransactions)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);
  // ...
}
```

---

## 8. Inyección de dependencias (NestJS)

En el backend se aplica el patrón de **inyección de dependencias**: los servicios se marcan como `@Injectable()` y se reciben por el constructor, favoreciendo el desacoplamiento y las pruebas.

```ts
@Injectable()
export class TransactionsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly blockchain: BlockchainService,
  ) {}
  // ...
}
```

---

## 9. Gestión segura de la configuración

Los datos sensibles (claves de API, credenciales de base de datos, direcciones de contratos, claves privadas) **nunca se escriben directamente en el código**. Se leen desde **variables de entorno** y se mantienen fuera del control de versiones (archivos `.env` ignorados por Git).

```ts
const apiKey = process.env.CLAUDE_API_KEY;
const NFT_CONTRACT = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS;
```

---

## 10. Comentarios y documentación del código

El código se acompaña de **comentarios breves y significativos** que explican el *porqué* de las decisiones, especialmente en la lógica más delicada (operaciones con la blockchain, consistencia de datos), evitando comentarios obvios.

```ts
// Reembolso on-chain PRIMERO. Si falla, no tocamos la DB para no dejar
// el sistema en un estado inconsistente.
const ok = await this.blockchain.resolveDispute(tx.escrowTradeId, true);
if (!ok) {
  throw new BadRequestException('No se pudo reembolsar on-chain.');
}
```

---

## 11. Formato y estilo de código

Para mantener un formato uniforme se aplican las siguientes convenciones:

- **Indentación** de 2 espacios.
- **Punto y coma** al final de cada sentencia.
- **Comillas simples** para cadenas de texto.
- Una **responsabilidad por archivo** (un componente o un servicio por archivo).
- Eliminación de código muerto y de variables no utilizadas.

```ts
const shortAddress = (addr: string) => `${addr.slice(0, 6)}...${addr.slice(-4)}`;
```

---

## 12. Resumen

| Estándar | Aplicación en ReWear |
|----------|----------------------|
| Tipado estático | TypeScript con interfaces y tipos |
| Nombrado | camelCase, PascalCase, UPPER_SNAKE_CASE |
| Manejo de errores | `try / catch / finally` + excepciones tipadas |
| Asincronía | `async / await` |
| Validación | DTOs con `class-validator` |
| Frontend | Componentes funcionales + hooks |
| Backend | Inyección de dependencias |
| Seguridad | Configuración por variables de entorno |
| Documentación | Comentarios significativos |
| Formato | 2 espacios, comillas simples, una responsabilidad por archivo |

La aplicación consistente de estos estándares garantiza un código **legible, mantenible y coherente** en todo el proyecto, facilitando su evolución y la incorporación de nuevos desarrolladores.
