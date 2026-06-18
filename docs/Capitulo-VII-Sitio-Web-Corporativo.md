# Capítulo VII: Sitio Web Corporativo

## 7.1. Introducción

En este capítulo se describe el diseño y desarrollo del **sitio web corporativo de ReWear** (`rewear-web`), una pieza independiente del ecosistema cuyo propósito **no es operar el marketplace, sino presentarlo y describirlo** ante el público. De forma análoga a como `code.visualstudio.com` es a Visual Studio Code, este sitio constituye la **página institucional** que da a conocer la plataforma: explica qué es ReWear, qué problema resuelve y cómo funciona, sin contener la lógica de la aplicación en sí.

El sitio corporativo actúa como **primer punto de contacto y carta de presentación** del proyecto. A través de él, un visitante que nunca usó la plataforma comprende su propuesta de valor, recorre sus características y, finalmente, es derivado hacia la aplicación para empezar a usarla. Es, por tanto, una **capa de comunicación y confianza** previa al producto, separada técnicamente de la aplicación (`rewear-app`) y de la API (`rewear-api`).

Fue concebido como una interfaz moderna, responsiva y de carácter **informativo y estático**, optimizada para la lectura y la presentación del producto. Su estructura sigue el formato típico de una *landing page* corporativa: una sección principal de impacto, la descripción del problema, la explicación del funcionamiento, las características destacadas y una galería visual del producto, todo orientado a comunicar de manera clara qué ofrece ReWear.

## 7.2. Visión del proyecto

La visión del sitio web corporativo de ReWear es **comunicar de forma simple, clara y atractiva la propuesta de valor de la plataforma**, generando comprensión y confianza en el visitante antes de que ingrese a la aplicación. A diferencia del marketplace —que ejecuta las operaciones—, el sitio busca **explicar y convencer**. Para ello, la página web busca:

- **Presentar de forma clara el propósito de ReWear y el problema que resuelve**: la falta de confianza en la compra-venta de ropa de segunda mano.
- **Explicar el funcionamiento de la plataforma** a través de sus tres pilares (verificación con inteligencia artificial, pasaporte digital NFT y pago con custodia en blockchain), de manera comprensible para cualquier visitante, sin requerir conocimientos técnicos.
- **Mostrar las características de la aplicación** (catálogo verificado, autenticación Web3, verificador de autenticidad, favoritos, mensajería y trazabilidad on-chain) de forma descriptiva, sin que el usuario tenga que utilizarla.
- **Transmitir profesionalismo y credibilidad institucional**, reforzando la imagen del proyecto como una propuesta seria y bien fundamentada.
- **Servir como punto de entrada**, derivando al visitante hacia la aplicación mediante llamados a la acción claros ("Ir a la app").
- **Funcionar como pieza de presentación del proyecto** ante distintos públicos: usuarios potenciales, evaluadores académicos e interesados en general.

De esta manera, el sitio web no actúa como interfaz comercial ni operativa, sino como una **capa de presentación y difusión**: traduce la complejidad técnica de la plataforma (IA, NFTs, escrow) en un mensaje comprensible y atractivo, e invita al visitante a conocer ReWear en profundidad.

## 7.3. Tecnologías utilizadas

El sitio web corporativo se construyó con un stack moderno orientado al rendimiento, la optimización para buscadores (SEO) y la rapidez de carga, características deseables en un sitio institucional cuyo objetivo es la difusión.

| Capa | Tecnología | Justificación |
|------|-----------|---------------|
| Framework | **Next.js 16** (App Router) | Generación de páginas estáticas, SEO y despliegue inmediato. |
| Librería de interfaz | **React 19** | Construcción de componentes reutilizables e interactivos. |
| Estilos | **Tailwind CSS v4** | Diseño responsivo y consistente mediante utilidades. |
| Lenguaje | **TypeScript** | Tipado estático y mayor robustez del código. |
| Iconografía | **lucide-react** | Conjunto de íconos vectoriales livianos. |

A diferencia de la aplicación, el sitio corporativo **no requiere base de datos, backend ni autenticación**: es una página fundamentalmente estática. Esto reduce su complejidad, mejora su velocidad y simplifica su despliegue.

## 7.4. Arquitectura y separación del ecosistema

ReWear se compone de tres proyectos independientes, cada uno con su propia responsabilidad y su propio repositorio:

- **`rewear-web`** — el sitio web corporativo (este capítulo): presenta y describe el producto.
- **`rewear-app`** — la aplicación / marketplace: ejecuta las operaciones (catálogo, publicación, compra, etc.).
- **`rewear-api`** — la API y los servicios de backend (base de datos, IA, blockchain).

Esta separación responde al principio de **responsabilidad única**: el sitio corporativo es un producto de comunicación y no comparte código ni lógica con la aplicación. La única relación entre ambos es un **enlace de derivación**: los botones de llamado a la acción del sitio ("Ir a la app", "Entrar al marketplace") apuntan a la URL pública de la aplicación, configurable mediante la variable de entorno `NEXT_PUBLIC_APP_URL`.

El sitio se genera de forma **estática** (*Static Site Generation*): su contenido se compila una sola vez en el build y se sirve como HTML pre-renderizado, lo que garantiza tiempos de carga mínimos y un comportamiento predecible.

## 7.5. Estructura y secciones de la página

El sitio está organizado como una **página única** (*one-page*) dividida en secciones temáticas, navegables mediante un menú superior fijo con anclas. Cada sección cumple una función comunicativa específica:

1. **Encabezado (Header):** barra de navegación fija con el logotipo, los enlaces a las secciones (El problema · Cómo funciona · Características · Producto) y un botón de acción "Ir a la app".

2. **Sección principal (Hero):** mensaje de impacto que resume la propuesta de valor ("Compra y vende ropa de segunda mano con confianza real"), una breve descripción y los botones principales de llamado a la acción. Incluye una fila de íconos que anticipa los pilares de la plataforma.

3. **El problema:** explica la *información asimétrica* del mercado de segunda mano (¿es auténtica?, ¿me van a estafar?, ¿cuál es su historia?), contextualizando la necesidad que ReWear resuelve.

4. **Cómo funciona:** presenta los **tres pilares** de la plataforma en tarjetas numeradas:
   - *Verificación con IA* — análisis de imágenes para confirmar que la prenda es real.
   - *Pasaporte digital NFT* — certificado inmutable de autenticidad e historial.
   - *Pago con custodia (escrow)* — retención de fondos hasta la confirmación de la entrega.

5. **Características:** grilla de tarjetas que describe las funcionalidades de la aplicación (login con billetera, verificador de autenticidad, catálogo verificado, favoritos, chat entre partes e historial on-chain).

6. **Producto (galería interactiva):** muestra capturas reales de la aplicación dentro de un marco que simula un navegador. La galería rota automáticamente entre las pantallas, con pestañas y controles para navegar manualmente (ver sección 7.6).

7. **Llamado a la acción final (CTA):** invitación destacada a ingresar a la aplicación.

8. **Pie de página (Footer):** identidad del proyecto, datos del equipo y nota de derechos.

## 7.6. Diseño y experiencia de usuario

El diseño prioriza la **claridad, la jerarquía visual y la responsividad**. Se adoptó una estética sobria y profesional (paleta índigo sobre fondos claros, tipografía legible, espaciados amplios y tarjetas con bordes suaves), coherente con la imagen institucional buscada.

El elemento más destacado de la experiencia es la **galería interactiva de producto** ("La app en acción"), implementada como un componente cliente con las siguientes características:

- **Reproducción automática:** las capturas rotan solas cada pocos segundos, con una transición de desvanecimiento (*fade*) suave.
- **Marco de navegador:** cada captura se muestra dentro de una ventana simulada (con los puntos de control y una barra de dirección), lo que refuerza la idea de que se está viendo la aplicación real.
- **Navegación manual:** pestañas numeradas y puntos de control permiten saltar a cualquier captura; la pestaña activa muestra una barra de progreso.
- **Pausa al interactuar:** la rotación se detiene cuando el usuario posa el cursor sobre la galería, permitiéndole observar con detenimiento.

Todo el sitio es **completamente responsivo**: las grillas y la galería se reacomodan en pantallas pequeñas (las pestañas se reubican y los elementos se apilan), garantizando una buena experiencia tanto en escritorio como en dispositivos móviles.

## 7.7. Integración con el ecosistema

Aunque el sitio corporativo es independiente, está **integrado conceptualmente** con el resto del ecosistema ReWear:

- Los **llamados a la acción** ("Ir a la app", "Entrar al marketplace") derivan al visitante hacia la aplicación (`rewear-app`) mediante la variable `NEXT_PUBLIC_APP_URL`.
- Las **capturas de pantalla** mostradas en la galería corresponden a las pantallas reales de la aplicación, manteniendo la coherencia entre lo que el sitio describe y lo que el usuario encontrará.
- Los **textos y mensajes** reflejan fielmente las funcionalidades implementadas (verificación con IA, pasaporte NFT, escrow, favoritos, etc.), evitando prometer características inexistentes.

Esta integración asegura que el sitio cumpla su rol de **puente** entre el público y el producto, sin acoplar su código al de la aplicación.

## 7.8. Despliegue

Al tratarse de un sitio Next.js estático, su despliegue es directo y sin configuración adicional, tanto en **Vercel** como en **Railway**:

1. El proyecto se aloja en un repositorio de control de versiones (Git).
2. La plataforma de despliegue detecta automáticamente que es una aplicación Next.js y ejecuta el proceso estándar: instalación de dependencias (`npm install`), compilación (`npm run build`) y arranque (`npm run start`).
3. El servidor escucha en el puerto que la plataforma asigna automáticamente mediante la variable de entorno `PORT`, sin necesidad de configuración manual.
4. Opcionalmente se define la variable `NEXT_PUBLIC_APP_URL` con la dirección pública de la aplicación, para que los enlaces de derivación apunten al destino correcto.

La naturaleza estática del sitio garantiza un despliegue rápido, un consumo de recursos mínimo y una alta disponibilidad.

## 7.9. Conclusión

El sitio web corporativo de ReWear cumple un rol distinto pero complementario al de la aplicación: **no opera el marketplace, lo presenta**. Funciona como la cara pública del proyecto, traduciendo una propuesta técnicamente compleja —que combina inteligencia artificial, NFTs y pago con custodia en blockchain— en un mensaje claro, atractivo y comprensible para cualquier visitante.

Su desarrollo como un producto independiente, con un stack moderno y un despliegue sencillo, refuerza la organización del ecosistema ReWear bajo el principio de responsabilidad única, y provee al proyecto de una herramienta esencial de **comunicación, difusión y generación de confianza** previa al uso de la plataforma.
