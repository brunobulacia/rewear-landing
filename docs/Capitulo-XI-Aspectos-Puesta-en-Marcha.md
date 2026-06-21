# Capítulo XI: Aspectos para la Puesta en Marcha

## 11.1. Introducción

La **puesta en marcha** es la etapa en la que el software, una vez desarrollado y probado, deja de ser un proyecto en construcción y pasa a estar **operativo y disponible para los usuarios reales**. A diferencia de las fases anteriores —ejecutadas en entornos de prueba aislados—, aquí el producto enfrenta condiciones reales y debe estar disponible de forma continua, por lo que requiere una **preparación cuidadosa** de la infraestructura, la configuración y la seguridad.

En el caso de **ReWear**, esto implica llevar a producción un ecosistema que debe funcionar de manera coordinada: la **aplicación** (marketplace), la **API de servicios**, el **sitio web corporativo**, la **base de datos** y los **contratos inteligentes** desplegados en la red blockchain, que dan soporte al pasaporte digital NFT y al pago con custodia (escrow). A esto se suma una característica propia de la plataforma: el paso de una **red de pruebas**, sin valor económico real, a una **red principal**, que sí lo tiene.

Este capítulo describe los **aspectos necesarios para poner ReWear en funcionamiento**: los requisitos previos, la infraestructura de producción, el despliegue y la configuración de cada componente, la verificación previa al lanzamiento, la estrategia de lanzamiento por fases y el soporte posterior, con el objetivo de asegurar una transición **ordenada, segura y controlada** hacia la operación real.

## 11.2. Requisitos previos a la puesta en marcha

Antes de lanzar la plataforma, deben cumplirse una serie de condiciones que garantizan que el sistema está listo para operar.

### 11.2.1. Requisitos técnicos

- El **código fuente** de los tres componentes (aplicación, API y sitio corporativo) debe estar finalizado, probado y versionado en sus repositorios.
- Los **contratos inteligentes** (el pasaporte digital NFT y el contrato de custodia/escrow) deben estar desplegados y verificados en la red blockchain elegida.
- La **base de datos** de producción debe estar creada y con su estructura aplicada.
- Las **claves y credenciales** necesarias (claves de API, direcciones de contratos, billetera de la plataforma) deben estar disponibles y configuradas de forma segura.

### 11.2.2. Requisitos organizativos y legales

- Tener resueltos los **aspectos legales** para operar como empresa (ver Capítulo V): registro, propiedad intelectual y términos de uso.
- Definir los **canales de soporte** y de atención al usuario.
- Contar con el **equipo responsable** de la operación y el mantenimiento.

## 11.3. Infraestructura de producción

ReWear se apoya en servicios en la nube que permiten su funcionamiento permanente, sin necesidad de administrar servidores físicos propios. La infraestructura de producción se compone de:

| Componente | Función en producción |
|------------|------------------------|
| **Aplicación (marketplace)** | Alojada en una plataforma de despliegue web (Vercel), accesible desde cualquier navegador. Es donde los usuarios compran y venden prendas. |
| **Sitio web corporativo** | Alojado también en la nube; es la cara pública e institucional de la empresa. |
| **API de servicios** | Alojada en un servicio en la nube (Railway), atiende las peticiones de la aplicación: usuarios, prendas, transacciones, verificación con IA, etc. |
| **Base de datos** | Base de datos PostgreSQL en la nube, donde se almacena la información del sistema (usuarios, prendas, transacciones, calificaciones). |
| **Red blockchain** | Red de Ethereum donde viven los contratos inteligentes (pasaporte NFT y escrow) que dan soporte a la autenticidad y al pago protegido. |
| **Servicios externos** | Almacenamiento de imágenes en la nube y servicio de inteligencia artificial para la verificación de prendas y el asistente virtual. |

Esta arquitectura en la nube ofrece **alta disponibilidad, escalabilidad y bajo costo de mantenimiento**, adecuada para una startup en su etapa inicial.

## 11.4. Despliegue de los componentes

La puesta en producción se realiza desplegando cada componente en su servicio correspondiente:

1. **Aplicación y sitio corporativo:** se publican en la plataforma de despliegue web, que los hace accesibles mediante una dirección pública (URL). Cada actualización del código genera automáticamente una nueva versión publicada.
2. **API de servicios:** se despliega en su servicio en la nube, quedando disponible para que la aplicación se comunique con ella.
3. **Base de datos:** se aprovisiona en la nube y se conecta con la API.
4. **Contratos inteligentes:** se despliegan una sola vez en la red blockchain; sus **direcciones** se registran en la configuración de la aplicación y la API para que el sistema pueda interactuar con ellos.

## 11.5. Configuración del entorno de producción

Para que todos los componentes funcionen juntos en producción, se configuran una serie de **parámetros del entorno** (variables de configuración), que se mantienen de forma **segura y separada del código**:

- **Direcciones públicas** que conectan la aplicación con la API y con el sitio.
- **Direcciones de los contratos inteligentes** desplegados.
- **Claves de los servicios externos** (inteligencia artificial, almacenamiento de imágenes).
- **Credenciales de la base de datos.**
- **Datos de la billetera de la plataforma** (utilizada para las operaciones automáticas en la blockchain).

Estos datos sensibles **nunca se publican en el código fuente**: se cargan únicamente en los paneles de configuración de los servicios en la nube, garantizando la seguridad del sistema.

## 11.6. De la red de pruebas a la red real (consideración clave)

Un aspecto **central y propio de ReWear** por su naturaleza basada en blockchain es la diferencia entre operar sobre una **red de pruebas** y una **red real**:

- Durante el desarrollo, la plataforma opera sobre una **red de pruebas de Ethereum (testnet)**, donde las transacciones se realizan con criptomoneda **sin valor real** (de prueba). Esto permite validar todo el funcionamiento —verificación, emisión de pasaportes NFT, pagos en custodia y disputas— **sin riesgo económico**.
- Para una operación **comercial real**, sería necesario migrar los contratos inteligentes a una **red principal (mainnet)** o a una red de bajo costo, donde las transacciones se pagan con criptomoneda de **valor real**.

Esta migración debe planificarse cuidadosamente, ya que implica **costos de transacción reales (gas)** y requiere que tanto la plataforma como los usuarios cuenten con fondos. Por ello, en su etapa inicial, ReWear puede mantenerse en la red de pruebas para validación y demostración, y reservar el paso a la red real para una fase de operación comercial.

## 11.7. Billetera de la plataforma y costos de operación

ReWear utiliza una **billetera propia de la plataforma** para ejecutar las operaciones automáticas en la blockchain: emitir el pasaporte NFT de cada prenda, transferirlo al comprador y resolver disputas. Cada una de estas operaciones consume una pequeña comisión de red (**gas**).

Para la puesta en marcha es necesario:

- Mantener la **billetera de la plataforma con fondos suficientes** para cubrir esas operaciones.
- Considerar que, en una operación real, estos costos forman parte de los **gastos operativos** del negocio y deben contemplarse en el modelo económico.

## 11.8. Verificación previa al lanzamiento

Antes de habilitar la plataforma al público se realiza una **verificación integral** que confirma que todo funciona en el entorno real. Esta lista de control incluye:

- ✅ La aplicación y el sitio corporativo cargan correctamente desde su dirección pública.
- ✅ El registro e inicio de sesión con billetera funciona.
- ✅ Se puede **publicar una prenda** y la verificación con IA responde.
- ✅ Se **emite el pasaporte NFT** y se visualiza su información.
- ✅ Se puede **comprar con pago protegido (escrow)** y confirmar la entrega.
- ✅ El flujo de **disputa y reembolso** funciona correctamente.
- ✅ El **asistente virtual (chatbot)** responde las consultas.
- ✅ Las **variables de configuración** de producción están correctamente cargadas.

Solo cuando todos los puntos se cumplen, la plataforma se considera lista para el lanzamiento.

## 11.9. Estrategia de lanzamiento por fases

La puesta en marcha no se realiza de golpe, sino de manera **progresiva y controlada**, para reducir riesgos:

1. **Fase piloto (cerrada):** se habilita la plataforma a un grupo reducido de usuarios de confianza, que prueban el sistema en condiciones reales y reportan errores o mejoras.
2. **Lanzamiento (Santa Cruz de la Sierra):** se abre la plataforma al público objetivo local, acompañado de la estrategia de marketing y difusión (ver Capítulo X).
3. **Expansión:** una vez consolidada la operación y la confianza, se amplía el alcance a otras ciudades y se evalúa el paso a una operación comercial plena.

## 11.10. Capacitación y acompañamiento del usuario

Dado que ReWear introduce conceptos nuevos para el público general (billeteras digitales, pasaportes NFT, pago en custodia), la puesta en marcha contempla **acompañar al usuario**:

- El **sitio web corporativo** explica de forma simple qué es y cómo funciona la plataforma.
- El **asistente virtual (chatbot)** resuelve dudas en tiempo real.
- Se prepara **contenido educativo** (guías y videos) sobre cómo comprar, vender y conectar la billetera.

## 11.11. Soporte, monitoreo y mantenimiento

Una vez en operación, se mantienen actividades continuas para asegurar el buen funcionamiento:

- **Monitoreo** de la disponibilidad de la aplicación, la API y la base de datos.
- **Canales de soporte** (correo y redes sociales) para atender a los usuarios.
- **Mantenimiento correctivo** (corrección de errores que surjan en producción) y **evolutivo** (mejoras y nuevas funciones).
- **Respaldos (backups)** periódicos de la base de datos.

## 11.12. Plan de contingencia

Para reducir el impacto de cualquier inconveniente durante o después de la puesta en marcha, se prevén medidas básicas de contingencia:

- **Reversión de versiones:** si una nueva versión presenta fallas, se puede volver a la versión anterior estable de forma inmediata.
- **Respaldo de datos:** ante un problema en la base de datos, se restaura desde la copia de seguridad más reciente.
- **Consistencia de las operaciones:** el sistema está diseñado para que las operaciones críticas (pagos, disputas) se confirmen primero en la blockchain antes de registrarse, evitando estados inconsistentes.

## 11.13. Conclusión

La puesta en marcha de ReWear consiste en llevar la plataforma desde el entorno de desarrollo hasta un **entorno de producción real, accesible y operativo**. Esto requiere preparar la infraestructura en la nube, desplegar y configurar cada componente de forma segura, atender la particularidad del paso de una red de pruebas a una red real de blockchain, verificar integralmente el funcionamiento y planificar un **lanzamiento progresivo** acompañado de soporte y monitoreo.

Una puesta en marcha **ordenada y por fases** permite a ReWear iniciar su operación minimizando riesgos, generando confianza en los primeros usuarios y sentando las bases para su crecimiento y eventual operación comercial plena.
