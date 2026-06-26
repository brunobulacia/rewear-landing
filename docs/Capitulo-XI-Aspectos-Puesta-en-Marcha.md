# Capítulo XI: Aspectos para la Puesta en Marcha

## 11.1. Introducción

La **puesta en marcha** es la etapa en la que el software, una vez desarrollado y probado, deja de ser un proyecto en construcción y pasa a estar **operativo y disponible para los usuarios reales**. Para que esta transición sea exitosa, no basta con que el sistema funcione: es necesario contemplar una serie de **aspectos de recursos, costos, legales y de infraestructura** que hacen posible su operación de forma sostenible y responsable.

En el caso de **ReWear**, la plataforma boliviana de moda circular, esto implica definir qué **recursos** se emplearán, proyectar los **costos de la infraestructura en la nube**, especificar los **tipos de licencia** del software, establecer los **términos y condiciones y las políticas de privacidad** para los usuarios, y determinar las **herramientas con las que se despliega** el sistema.

Este capítulo describe esos aspectos, con el objetivo de asegurar una puesta en marcha **ordenada, sostenible y legalmente respaldada**.

## 11.2. Recursos a utilizar

Para poner en marcha y operar ReWear se requieren tres tipos de recursos:

### 11.2.1. Recursos humanos

El equipo está conformado por los **cofundadores** del proyecto, que cubren los roles de **desarrollo** (construcción y mantenimiento del software) y de **producto** (definición de funcionalidades, marketing y atención al usuario). En su etapa inicial, una startup de este tamaño puede operar con este equipo reducido, incorporando nuevos roles a medida que crece.

### 11.2.2. Recursos de hardware y software

- **Equipos de desarrollo:** computadoras personales con capacidad suficiente para programar, probar y desplegar el sistema.
- **Herramientas de software:** editor de código, navegador, control de versiones (Git/GitHub) y las tecnologías propias del proyecto (entornos de ejecución de la aplicación, la API y los contratos inteligentes).

### 11.2.3. Recursos y servicios en la nube

Al ser un sistema web, ReWear no requiere servidores físicos propios, sino **servicios en la nube** que garantizan su disponibilidad:

- **Alojamiento** de la aplicación y del sitio corporativo.
- **Alojamiento** de la API de servicios.
- **Base de datos** administrada (PostgreSQL).
- **Acceso a la red blockchain** (proveedor de nodo / RPC).
- **Servicios externos:** almacenamiento de imágenes en la nube e inteligencia artificial (verificación de prendas y asistente virtual).

## 11.3. Herramientas para el despliegue del software

El despliegue de ReWear se apoya en herramientas que **automatizan la publicación** de cada componente:

| Componente | Herramienta de despliegue | Función |
|------------|---------------------------|---------|
| Aplicación (marketplace) y sitio corporativo | **Vercel** | Publica automáticamente cada nueva versión y la deja accesible mediante una URL pública. |
| API de servicios y base de datos | **Railway** | Aloja la API y la base de datos PostgreSQL en la nube. |
| Control de versiones e integración | **Git y GitHub** | Versiona el código y dispara el despliegue automático ante cada cambio. |
| Contratos inteligentes | **Hardhat** | Compila y despliega los contratos en la red blockchain. |
| Empaquetado / portabilidad | **Docker** | Permite empaquetar el sistema para ejecutarlo en distintos entornos con configuración mínima. |

Estas herramientas permiten un modelo de **despliegue continuo**: cada cambio aprobado en el repositorio se publica automáticamente, reduciendo el esfuerzo manual y los errores.

## 11.4. Proyección de costos de infraestructura en la nube

En su etapa inicial, ReWear opera sobre servicios con **planes gratuitos o de bajo costo** (Vercel y Railway), suficientes para un volumen de usuarios reducido. Sin embargo, para una operación a mayor escala, conviene **proyectar el costo** de migrar la infraestructura a un proveedor de nube de mayor capacidad. A continuación se presenta una estimación comparativa entre los tres principales: **Amazon Web Services (AWS)**, **Microsoft Azure** y **Google Cloud Platform (GCP)**.

| Recurso | AWS | Azure | Google Cloud |
|---------|-----|-------|--------------|
| Cómputo (aplicación + API) | EC2 t3.small (~$15) | App Service B1 (~$13) | Compute e2-small (~$13) |
| Base de datos PostgreSQL administrada | RDS db.t3.micro (~$15) | Azure DB for PostgreSQL (~$20) | Cloud SQL (~$15) |
| Almacenamiento + CDN + ancho de banda | S3 + CloudFront (~$8) | Blob + CDN (~$8) | Cloud Storage + CDN (~$8) |
| **Total mensual aproximado** | **~$38 USD** | **~$41 USD** | **~$36 USD** |
| **Total anual aproximado** | **~$456 USD** | **~$492 USD** | **~$432 USD** |

> *Los valores son estimaciones referenciales para una operación inicial de bajo tráfico. Los precios varían según la región, el nivel de uso, el tipo de plan y las promociones de cada proveedor.*

A estos costos se suman otros servicios complementarios:

- **Acceso a la red blockchain (RPC):** proveedores como Alchemy o Infura ofrecen un **plan gratuito** suficiente para la etapa inicial.
- **Servicio de inteligencia artificial:** se paga por uso (verificación de prendas y asistente virtual); su costo depende del volumen de operaciones.
- **Nombre de dominio:** aproximadamente **$12 USD al año**.
- **Comisiones de red (gas)** de la blockchain, en caso de operar sobre una red real (ver sección de billetera de la plataforma).

En conclusión, la infraestructura de ReWear tiene un **costo mensual estimado de entre 35 y 45 dólares** en cualquiera de los tres proveedores principales, manteniéndose accesible para una startup en crecimiento.

## 11.5. Tipos de licencia

ReWear combina **software de terceros** con **software propio**, por lo que conviene distinguir los tipos de licencia involucrados (ver también el Capítulo V: Aspectos Legales).

### 11.5.1. Licencias del software de terceros (libre / código abierto)

Las tecnologías sobre las que se construye ReWear son de **software libre** y se distribuyen bajo licencias permisivas, lo que permite usarlas sin costo y con libertad para construir un producto comercial:

| Tecnología | Tipo de licencia |
|-----------|------------------|
| Next.js, React, NestJS, Tailwind CSS, ethers.js, OpenZeppelin | **MIT** |
| Prisma | **Apache 2.0** |
| PostgreSQL | **Licencia PostgreSQL** (tipo permisiva) |

Estas licencias permisivas autorizan el uso, modificación y distribución del software, incluso dentro de productos comerciales, siempre que se respeten los avisos de copyright correspondientes.

### 11.5.2. Licencia del producto ReWear (privativo)

El **producto ReWear en sí** —el código propio y la marca— se concibe como **software privativo (propietario)**: la empresa conserva los derechos sobre su código fuente y no lo libera públicamente, ya que constituye el activo central del negocio. Los usuarios acceden al servicio a través de la plataforma, sin obtener derechos sobre su código.

## 11.6. Términos y condiciones y políticas de privacidad

Para operar de forma legal y transparente, ReWear debe contar con dos documentos que regulen la relación con sus usuarios:

### 11.6.1. Términos y condiciones

Establecen las **reglas de uso** de la plataforma. En el caso de ReWear, contemplan, entre otros:

- Las **condiciones para comprar y vender** prendas y las responsabilidades de cada parte.
- El funcionamiento del **pago con custodia (escrow)** y del **proceso de disputas**.
- La aclaración de que ReWear actúa como **intermediario de confianza** entre comprador y vendedor.
- Las **conductas prohibidas** (publicar prendas falsas, fraudes, etc.) y las consecuencias.
- La **limitación de responsabilidad** y las condiciones del servicio.

### 11.6.2. Políticas de privacidad

Describen **qué datos se recopilan y cómo se utilizan**, en línea con la protección de datos personales:

- **Datos recopilados:** dirección de la billetera digital, nombre, correo electrónico, prendas publicadas e historial de transacciones.
- **Uso de los datos:** operar la plataforma, verificar prendas, procesar pagos y mejorar el servicio.
- **Aclaración sobre la blockchain:** cierta información (como el pasaporte NFT y el historial de transacciones) queda registrada de forma **pública e inmutable** en la red, lo cual se informa explícitamente al usuario.
- **Derechos del usuario** sobre sus datos y los **canales de contacto** para ejercerlos.

Ambos documentos deben estar **accesibles desde la plataforma** y ser **aceptados por el usuario** al registrarse, garantizando transparencia y respaldo legal a la operación.

## 11.7. Incorporación del agente conversacional (chatbot)

Como parte de la puesta en marcha, ReWear incorpora un **agente conversacional (chatbot)** basado en **inteligencia artificial**, integrado en el sitio web corporativo. Su finalidad es **atender y orientar a los visitantes en tiempo real**, especialmente a quienes no conocen la plataforma.

### 11.7.1. Propósito

El agente responde de forma inmediata las consultas frecuentes sobre la empresa y el producto: **qué es ReWear, cómo funciona, cómo se usa y dónde está ubicada**. De esta manera, reduce la barrera de entrada de los usuarios nuevos, refuerza la confianza antes de ingresar a la aplicación y descongestiona la atención, sin necesidad de personal disponible de forma permanente.

### 11.7.2. Funcionamiento

El agente utiliza un **modelo de lenguaje de inteligencia artificial** (servicio de Anthropic – Claude). El visitante escribe su pregunta y la respuesta **se genera y se muestra de manera progresiva** (en tiempo real, palabra por palabra), ofreciendo una experiencia similar a la de un asistente conversacional moderno. El agente está **acotado deliberadamente** para responder únicamente sobre ReWear; ante preguntas ajenas al proyecto, indica de forma amable que solo puede ayudar con temas de la plataforma.

### 11.7.3. Incorporación en producción

- El agente se integra como un **componente del sitio web** (un botón flotante disponible en todo momento).
- La comunicación con el servicio de inteligencia artificial se realiza de forma **segura desde el servidor**, de modo que la **clave de acceso al servicio nunca queda expuesta** al usuario; se gestiona como una variable de configuración protegida (ver sección 11.4 sobre servicios y costos).
- Su **costo se paga por uso**, por lo que su consumo se contempla dentro de los gastos operativos y se monitorea.

### 11.7.4. Aporte a la puesta en marcha

La incorporación del agente conversacional **mejora la atención al usuario** desde el primer día de operación, acompaña el proceso de incorporación (*onboarding*) de los nuevos visitantes y complementa los demás canales de contacto, contribuyendo a una puesta en marcha más sólida en términos de experiencia y confianza.

## 11.8. Conclusión

La puesta en marcha de ReWear requiere, además de un software funcional, la definición de los **recursos** humanos y tecnológicos necesarios, una **proyección realista de los costos** de la infraestructura en la nube, la especificación de los **tipos de licencia** del software propio y de terceros, la elaboración de los **términos y condiciones y las políticas de privacidad** que regulan la relación con los usuarios, y la incorporación de un **agente conversacional** que acompaña al usuario desde el inicio. Sumado a las **herramientas de despliegue** que automatizan la publicación del sistema, estos aspectos permiten una operación **sostenible, legal y ordenada**, sentando las bases para el crecimiento de la startup.
