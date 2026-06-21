# 12.1. Aspecto de puesta en marcha

Para el sistema **“ReWear”**, la calidad del software en producción es una prioridad fundamental. A continuación, se describe cómo se abordan los principales aspectos de calidad del software en el producto terminado.

ReWear se compromete a entregar un software en calidad de producción que cumpla con altos estándares de confiabilidad y satisfaga plenamente las necesidades de sus usuarios (compradores, vendedores y administradores de la plataforma). El proceso de desarrollo integral garantiza que cada aspecto del sistema sea evaluado y optimizado antes de su despliegue en entornos operativos.

## Siete Puntos de Calidad del Software

### Funcionalidad

**Definición:** El software debe cumplir con las funciones y características definidas en los requisitos del sistema.

**Enfoque en ReWear:** Se realizan pruebas exhaustivas de funcionalidad para asegurar que todas las características implementadas respondan a los casos de uso definidos (publicación de prendas, verificación con inteligencia artificial, emisión del pasaporte digital NFT, compra con pago en custodia, confirmación de entrega, disputas, calificaciones y favoritos) y satisfagan las necesidades de los usuarios finales.

**Ejemplo:** Se diseñan y ejecutan casos de prueba basados en los requisitos y en los diagramas de casos de uso para verificar que cada módulo (por ejemplo, la publicación y verificación de una prenda o la compra con escrow) funcione según lo especificado.

### Fiabilidad

**Definición:** El software debe ser capaz de funcionar de forma confiable bajo diversas condiciones y mantener la integridad de los datos y operaciones críticas.

**Enfoque en ReWear:** Se implementan pruebas de fiabilidad orientadas a detectar y corregir errores que puedan afectar la estabilidad del sistema, especialmente en procesos críticos como el pago con custodia (escrow), la emisión y transferencia del pasaporte NFT, la resolución de disputas y la consistencia entre la base de datos y la blockchain.

**Ejemplo:** Se realizan pruebas para verificar que las operaciones críticas se confirmen primero en la blockchain antes de registrarse en la base de datos, evitando estados inconsistentes; por ejemplo, que una disputa o un reembolso solo se marquen como resueltos en el sistema si la transacción correspondiente se ejecutó correctamente en el contrato inteligente.

### Mantenibilidad

**Definición:** El software debe ser fácil de mantener y actualizar, permitiendo incorporar mejoras y corregir errores de manera eficiente.

**Enfoque en ReWear:** La arquitectura de ReWear se diseña de forma modular, separando responsabilidades en componentes independientes (la aplicación o marketplace, la API de servicios, el sitio web corporativo y los contratos inteligentes), acompañada de una documentación clara del código y el uso de buenas prácticas de desarrollo.

**Ejemplo:** Se aplican patrones de diseño, se utilizan sistemas de control de versiones (como Git y GitHub) y se mantienen convenciones de código consistentes, de modo que nuevos desarrolladores puedan entender y modificar el sistema con facilidad.

### Usabilidad

**Definición:** El software debe ser fácil de aprender y utilizar, ofreciendo una experiencia de usuario intuitiva y eficiente.

**Enfoque en ReWear:** Se realizan revisiones de interfaz y pruebas de usabilidad con usuarios representativos (compradores y vendedores) para asegurar que las pantallas de catálogo, publicación de prendas, detalle de prenda y compra sean claras, consistentes y accesibles. Además, el sitio web corporativo y el asistente virtual (chatbot) acompañan a los usuarios nuevos.

**Ejemplo:** Se observa cómo un usuario nuevo conecta su billetera digital y recorre el flujo de compra o de publicación de una prenda, y se ajustan textos, botones y la distribución de los elementos cuando se detectan dificultades en la navegación (por ejemplo, el onboarding del perfil o el rediseño del detalle de prenda).

### Eficiencia

**Definición:** El software debe utilizar de manera eficiente los recursos de hardware y software disponibles, optimizando tiempos de respuesta y consumo de recursos.

**Enfoque en ReWear:** Se realizan pruebas de rendimiento y se optimizan las consultas a la base de datos, las llamadas al servicio de inteligencia artificial y las consultas a la blockchain (como el historial del NFT), buscando reducir los tiempos de carga y mejorar la respuesta del sistema.

**Ejemplo:** Se emplean herramientas de monitoreo para identificar cuellos de botella (por ejemplo, en la consulta del historial on-chain de una prenda o en la carga del catálogo) y se aplican mejoras como la paginación de resultados, el uso de índices en la base de datos o el ajuste de las consultas a la red blockchain.

### Portabilidad

**Definición:** El software debe poder ejecutarse en diferentes entornos de infraestructura con cambios mínimos en la configuración.

**Enfoque en ReWear:** ReWear se desarrolla utilizando tecnologías web estándar y se despliega en servicios en la nube (como Vercel y Railway), gestionando los parámetros sensibles mediante variables de configuración, lo que permite mover el sistema entre distintos proveedores o servidores con ajustes limitados.

**Ejemplo:** Se realizan despliegues de prueba en entornos locales y remotos (servidores de desarrollo y producción) verificando que el sistema funcione correctamente cambiando únicamente parámetros de configuración, como las credenciales de la base de datos, las direcciones de los contratos inteligentes o las direcciones de los servicios externos.

### Adaptabilidad

**Definición:** El software debe ser capaz de adaptarse a cambios en los requisitos de los usuarios, el modelo de negocio o la infraestructura tecnológica.

**Enfoque en ReWear:** Se adopta una metodología de trabajo ágil que permite introducir cambios en los módulos de prendas, catálogo, transacciones o reputación sin afectar de manera negativa el funcionamiento global del sistema. Además, se procura desacoplar la lógica de negocio de los servicios externos como la blockchain, la inteligencia artificial y el almacenamiento de imágenes.

**Ejemplo:** Se incorporan nuevas necesidades —por ejemplo, el ordenamiento del catálogo, la reputación del vendedor o la cancelación de una compra— a través de iteraciones controladas. Asimismo, el desacople de la red blockchain permite contemplar el paso de una red de pruebas a una red real con un impacto mínimo en el resto del sistema.
