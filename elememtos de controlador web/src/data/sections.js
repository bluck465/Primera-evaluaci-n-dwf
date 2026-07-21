const sections = [
  {
    id: 'elementos',
    icon: '📦',
    title: 'Panel de Elementos',
    tab: '01',
    subtitle: 'Estructura & CSS',
    url: 'chrome://devtools/elements',
    cards: [
      {
        index: '01',
        heading: '¿Qué es?',
        text: 'Es la representación viva y gráfica del árbol del <strong>DOM (Document Object Model)</strong> y las hojas de estilos asociadas que cargan actualmente en la pestaña.',
      },
      {
        index: '02',
        heading: '¿Para qué se usa?',
        text: 'Se usa para inspeccionar etiquetas HTML, inyectar clases CSS interactivas, modificar textos sin alterar archivos y auditar el modelo de cajas del navegador.',
      },
      {
        index: '03',
        heading: '¿Para qué me sirve?',
        text: 'Te permite experimentar diseños, prototipar animaciones, corregir márgenes rotos visualmente y validar jerarquías de etiquetas en segundos sin refrescar la página.',
      },
    ],
  },
  {
    id: 'consola',
    icon: '💻',
    title: 'Panel de Consola',
    tab: '02',
    subtitle: 'Logs & Scripting',
    url: 'chrome://devtools/console',
    cards: [
      {
        index: '01',
        heading: '¿Qué es?',
        text: 'Una terminal de entrada/salida y un entorno interactivo capaz de ejecutar sentencias de JavaScript directamente en el contexto global del sitio actual.',
      },
      {
        index: '02',
        heading: '¿Para qué se usa?',
        text: 'Se usa para capturar errores lanzados en runtime, imprimir datos con <code class="text-white bg-neutral-900 px-1 py-0.5 rounded">console.log()</code> y evaluar respuestas de API locales.',
      },
      {
        index: '03',
        heading: '¿Para qué me sirve?',
        text: 'Funciona como tu caja negra de vuelo. Si un botón de interacción falla, sabrás el archivo y línea exactos donde se originó la excepción con su traza de pila de llamadas.',
      },
    ],
  },
  {
    id: 'fuentes',
    icon: '📁',
    title: 'Panel de Fuentes',
    tab: '03',
    subtitle: 'Depuración & Archivos',
    url: 'chrome://devtools/sources',
    cards: [
      {
        index: '01',
        heading: '¿Qué es?',
        text: 'El explorador y editor de archivos estáticos que el navegador web ha descargado desde el servidor para compilar la interfaz de usuario.',
      },
      {
        index: '02',
        heading: '¿Para qué se usa?',
        text: 'Se usa para agregar puntos de interrupción o <code class="text-white bg-neutral-900 px-1 py-0.5">breakpoints</code>, leer mapeos de fuentes (Sourcemaps) y evaluar el alcance de variables locales.',
      },
      {
        index: '03',
        heading: '¿Para qué me sirve?',
        text: 'Te da la habilidad de detener el tiempo. Puedes pausar la ejecución en una condicional compleja y examinar el estado exacto de tu aplicación en lugar de recargar con infinitos logs.',
      },
    ],
  },
  {
    id: 'red',
    icon: '🌐',
    title: 'Panel de Red',
    tab: '04',
    subtitle: 'Servidor & Tráfico HTTP',
    url: 'chrome://devtools/network',
    cards: [
      {
        index: '01',
        heading: '¿Qué es?',
        text: 'Un registrador del tráfico de red que audita la transferencia de datos entre tu cliente y cualquier servidor externo a través del protocolo HTTP.',
      },
      {
        index: '02',
        heading: '¿Para qué se usa?',
        text: 'Se usa para auditar las cabeceras de peticiones, simular velocidad de conexión 3G lenta, validar códigos de respuesta (como 200, 404, 500) y visualizar respuestas JSON de API.',
      },
      {
        index: '03',
        heading: '¿Para qué me sirve?',
        text: 'Es vital para integrar bases de datos. Te ayuda a comprobar con exactitud si tu código frontend está enviando los parámetros correctos o si el backend devolvió un fallo interno del servidor.',
      },
    ],
  },
  {
    id: 'rendimiento',
    icon: '⚡',
    title: 'Panel de Rendimiento',
    tab: '05',
    subtitle: 'Ciclo de CPU & Rendimiento',
    url: 'chrome://devtools/performance',
    cards: [
      {
        index: '01',
        heading: '¿Qué es?',
        text: 'Un analizador de actividad profunda que captura un perfil de ejecución de la pestaña para diagnosticar cuellos de botella en el CPU y la tasa de refresco visual.',
      },
      {
        index: '02',
        heading: '¿Para qué se usa?',
        text: 'Se usa para grabar la actividad de un flujo, identificar qué funciones lentas retrasan el hilo principal y analizar retrasos en el re-dibujado de animaciones (FPS drop).',
      },
      {
        index: '03',
        heading: '¿Para qué me sirve?',
        text: 'Te ayuda a que tus sitios web no se sientan ralentizados. Diagnosticar scripts pesados que bloquean el clic del usuario asegura una experiencia suave y profesional en teléfonos móviles lentos.',
      },
    ],
  },
  {
    id: 'memoria',
    icon: '🧠',
    title: 'Panel de Memoria',
    tab: '06',
    subtitle: 'RAM Heap & Memory Leaks',
    url: 'chrome://devtools/memory',
    cards: [
      {
        index: '01',
        heading: '¿Qué es?',
        text: 'Un sistema de diagnóstico del consumo de almacenamiento volátil asignado a los objetos de JavaScript dentro de tu aplicación.',
      },
      {
        index: '02',
        heading: '¿Para qué se usa?',
        text: 'Se usa para tomar instantáneas del montón (<code class="text-white bg-neutral-900 px-1 py-0.5">heap snapshots</code>), comparar la memoria entre acciones y aislar fugas de memoria o memory leaks.',
      },
      {
        index: '03',
        heading: '¿Para qué me sirve?',
        text: 'Evita que la pestaña del navegador de tu usuario colapse. Puedes asegurar que las aplicaciones grandes que se usan por horas liberen adecuadamente la memoria RAM en el sistema.',
      },
    ],
  },
  {
    id: 'aplicacion',
    icon: '💾',
    title: 'Panel de Aplicación',
    tab: '07',
    subtitle: 'Almacenamiento & Caché',
    url: 'chrome://devtools/application',
    cards: [
      {
        index: '01',
        heading: '¿Qué es?',
        text: 'El centro de control del almacenamiento del cliente web, donde residen las bases de datos locales, el estado persistente y los recursos en caché del sitio.',
      },
      {
        index: '02',
        heading: '¿Para qué se usa?',
        text: 'Se usa para inspeccionar llaves en <code class="text-white bg-neutral-900 px-1 py-0.5">LocalStorage</code>, examinar las Cookies del navegador, depurar la base IndexDB y gestionar archivos de Service Workers para sitios sin conexión.',
      },
      {
        index: '03',
        heading: '¿Para qué me sirve?',
        text: 'Permite simular estados de sesión de usuarios (ej. iniciar sesión con tokens guardados en cookies) o forzar el restablecimiento de bases de datos locales limpiando el almacenamiento de prueba de manera directa.',
      },
    ],
  },
  {
    id: 'seguridad',
    icon: '🔒',
    title: 'Panel de Seguridad',
    tab: '08',
    subtitle: 'Certificados & HTTPS',
    url: 'chrome://devtools/security',
    cards: [
      {
        index: '01',
        heading: '¿Qué es?',
        text: 'Una interfaz de diagnóstico que evalúa la integridad criptográfica de la conexión y las políticas de encriptación del protocolo HTTPS de la página web actual.',
      },
      {
        index: '02',
        heading: '¿Para qué se usa?',
        text: 'Se usa para auditar la validez del certificado TLS/SSL, investigar recursos con contenido mixto (llamadas inseguras HTTP dentro de sitios HTTPS) y validar orígenes de conexión.',
      },
      {
        index: '03',
        heading: '¿Para qué me sirve?',
        text: 'Protege la privacidad de tus usuarios. Garantiza que ningún elemento (como imágenes o scripts pesados externos) ponga en peligro la confidencialidad de la información enviada mediante encriptación rota.',
      },
    ],
  },
  {
    id: 'lighthouse',
    icon: '💡',
    title: 'Panel de Lighthouse',
    tab: '09',
    subtitle: 'Auditoría & Buenas Prácticas',
    url: 'chrome://devtools/lighthouse',
    cards: [
      {
        index: '01',
        heading: '¿Qué es?',
        text: 'Una herramienta automatizada de código abierto que audita el sitio para calificar su rendimiento global, accesibilidad, optimización SEO y mejores prácticas.',
      },
      {
        index: '02',
        heading: '¿Para qué se usa?',
        text: 'Se usa para generar un reporte del sitio en móviles o escritorio, midiendo métricas clave del Core Web Vitals (como LCP o FID) y listando sugerencias críticas de optimización de imágenes.',
      },
      {
        index: '03',
        heading: '¿Para qué me sirve?',
        text: 'Es tu consultor de cabecera. Te dice exactamente qué cambiar paso a paso para mejorar el posicionamiento en motores de búsqueda (Google SEO) y lograr que la web cargue casi instantáneamente.',
      },
    ],
  },
  {
    id: 'grabadora',
    icon: '🔴',
    title: 'Grabadora (Recorder)',
    tab: '10',
    subtitle: 'Flujos de Usuario',
    url: 'chrome://devtools/recorder',
    cards: [
      {
        index: '01',
        heading: '¿Qué es?',
        text: 'Una utilidad que graba una secuencia de interacciones del usuario en el navegador para reproducirla automáticamente más tarde.',
      },
      {
        index: '02',
        heading: '¿Para qué se usa?',
        text: 'Se usa para capturar flujos complejos de compra, re-producir pruebas automatizadas de inicio de sesión y registrar el tiempo de renderizado durante transiciones interactivas.',
      },
      {
        index: '03',
        heading: '¿Para qué me sirve?',
        text: 'Te ahorra rellenar formularios manualmente 100 veces mientras pruebas código. Grabas el flujo de llenado una sola vez y lo reproduces con un clic cada vez que hagas cambios en tu sistema.',
      },
    ],
  },
]

export default sections
