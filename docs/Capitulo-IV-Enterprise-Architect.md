# 4.1.4. Enterprise Architect

**Enterprise Architect** es una herramienta **CASE** (*Computer-Aided Software Engineering*, Ingeniería de Software Asistida por Computadora) desarrollada por la empresa **Sparx Systems**. Es una de las plataformas de modelado más completas, maduras y utilizadas en la industria del software a nivel mundial, orientada al **análisis, diseño, modelado, documentación y gestión** de sistemas a lo largo de todo su ciclo de vida.

A diferencia de los asistentes basados en inteligencia artificial —que apoyan principalmente la **escritura de código**—, Enterprise Architect se concentra en las etapas de **análisis y diseño**: permite representar de forma visual la estructura y el comportamiento del sistema antes y durante su construcción. Esto facilita la comprensión del problema, la comunicación entre los miembros del equipo, la trazabilidad de los requisitos y la generación de documentación técnica coherente y profesional.

## Clasificación dentro de las herramientas CASE

Las herramientas CASE suelen clasificarse según la etapa del ciclo de vida que apoyan:

- **Upper CASE (alto nivel):** apoyan las fases iniciales —análisis y diseño— mediante el modelado de requisitos, procesos y diagramas.
- **Lower CASE (bajo nivel):** apoyan las fases finales —construcción, generación de código y pruebas—.
- **I-CASE (integradas):** combinan ambas, cubriendo todo el ciclo de vida.

**Enterprise Architect se ubica como una herramienta I-CASE (integrada)**, ya que abarca desde la captura de requisitos y el diseño hasta la generación de código y la documentación, integrando en un solo entorno todas las etapas del desarrollo.

## Características principales

- **Soporte completo de UML:** permite crear todos los diagramas del Lenguaje Unificado de Modelado (UML), tanto **estructurales** (clases, componentes, objetos, despliegue) como **de comportamiento** (casos de uso, secuencia, actividad, estados).
- **Soporte de otras notaciones:** además de UML, admite estándares como **BPMN** (modelado de procesos de negocio), **SysML** (ingeniería de sistemas) y modelos **entidad-relación** para bases de datos.
- **Ingeniería directa e inversa:** puede **generar código** a partir de los modelos (ingeniería directa) y, a la inversa, **construir modelos a partir de código existente** (ingeniería inversa), manteniendo la sincronización entre diseño e implementación.
- **Modelado de bases de datos:** facilita el diseño de modelos de datos y la generación de su estructura.
- **Gestión de requisitos y trazabilidad:** vincula requisitos, casos de uso y elementos de diseño, permitiendo seguir cómo se relacionan y se cumplen a lo largo del proyecto.
- **Documentación automática:** genera reportes y documentación técnica (en formatos como Word, PDF o HTML) directamente desde los modelos, asegurando coherencia entre el diseño y su descripción.
- **Trabajo colaborativo:** permite que varios integrantes del equipo trabajen sobre un mismo modelo compartido, con control de versiones.

## Diagramas que aporta al proyecto

Enterprise Architect permite construir, entre otros, los siguientes diagramas, cada uno con un propósito específico dentro del diseño del sistema:

| Diagrama | Para qué sirve |
|----------|----------------|
| **Casos de uso** | Representa las funcionalidades del sistema y cómo interactúan los actores (usuarios) con ellas. |
| **Clases** | Modela la estructura del sistema: las entidades, sus atributos y las relaciones entre ellas. |
| **Secuencia** | Muestra, paso a paso y en el tiempo, cómo se comunican los componentes para realizar una operación. |
| **Actividad** | Describe el flujo de un proceso o procedimiento, con sus decisiones y caminos. |
| **Estados** | Representa los distintos estados por los que pasa un elemento del sistema (por ejemplo, una prenda o una transacción). |
| **Componentes / Despliegue** | Muestra cómo se organizan las partes del software y cómo se distribuyen en la infraestructura. |
| **Entidad-Relación** | Modela la estructura de la base de datos. |

## Ventajas

- Cubre **todo el ciclo de vida** del software en una sola herramienta.
- Soporta **múltiples estándares y notaciones** (UML, BPMN, SysML, ER).
- Mejora la **comunicación y la comprensión** del sistema dentro del equipo.
- Genera **documentación profesional** de forma automática.
- Permite **ingeniería directa e inversa**, manteniendo alineados diseño y código.

## Desventajas

- Tiene una **curva de aprendizaje** considerable por la cantidad de funciones que ofrece.
- Es una herramienta **de pago** (licencia comercial), aunque cuenta con versiones de evaluación.
- Para proyectos muy pequeños puede resultar **más robusta de lo necesario**.

## Aporte a la productividad del proyecto

El uso de Enterprise Architect aporta a la **productividad** del desarrollo de ReWear al permitir **diseñar y visualizar el sistema antes de programarlo**. Modelar previamente los procesos ayuda a:

- **Detectar errores de diseño de forma temprana**, cuando corregirlos es más simple y económico.
- **Alinear al equipo** en torno a una misma visión del sistema.
- Contar con **documentación clara y trazable** que respalda la construcción del software.
- **Reducir el retrabajo**, ya que se programa sobre una base previamente pensada y estructurada.

## Uso en el proyecto ReWear

En el contexto de ReWear, Enterprise Architect se utilizó para **representar visualmente el comportamiento de la plataforma**, en particular mediante un **diagrama de secuencia** (incluido en los anexos del capítulo). Este diagrama modela el flujo de interacción entre los distintos actores y componentes del sistema —por ejemplo, el proceso por el cual un usuario publica una prenda, esta se verifica con inteligencia artificial y se emite su pasaporte digital NFT, o el flujo de una compra con pago en custodia (escrow)—, mostrando **paso a paso y en el tiempo** cómo se comunican entre sí las partes del sistema.

De esta manera, Enterprise Architect **complementa** a las herramientas de productividad basadas en inteligencia artificial: mientras estas aceleran la **construcción** del código (Capítulo IV, puntos anteriores), Enterprise Architect fortalece la etapa de **análisis y diseño**, asegurando que el desarrollo parta de una base bien estructurada, comprendida por todo el equipo y debidamente documentada.

## Conclusión

Enterprise Architect es una herramienta CASE integral que cubre el modelado, el diseño y la documentación del software. Su incorporación al proyecto ReWear permitió **pensar y representar el sistema antes de construirlo**, mejorando la calidad del diseño y la productividad del equipo. Junto con las herramientas de inteligencia artificial empleadas para la programación, conforma un conjunto de instrumentos que abarca tanto la **concepción** como la **construcción** del software, en línea con el enfoque de productividad que plantea este capítulo.
