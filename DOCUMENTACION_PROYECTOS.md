# Documentación de los proyectos en la workspace

Este documento resume cada carpeta/proyecto presente en la raíz del workspace y recoge acciones realizadas (inferred) basadas en los archivos del proyecto. Por favor revisa y ajusta las secciones "Qué hice yo" cuando sea necesario.

**Archivo creado**: [DOCUMENTACION_PROYECTOS.md](DOCUMENTACION_PROYECTOS.md)

---

**albunmundial**:
- **Descripción**: Aplicación frontend (Vite + React) para un álbum de figuritas/colección.
- **Archivos clave**: [albunmundial/index.html](albunmundial/index.html), [albunmundial/src/App.jsx](albunmundial/src/App.jsx), [albunmundial/src/main.jsx](albunmundial/src/main.jsx), [albunmundial/src/styles.css](albunmundial/src/styles.css)
- **Componentes**: `FilterBar`, `Header`, `PackModal`, `StickerCard`, `TeamGroup` en [albunmundial/src/components](albunmundial/src/components)
- **Datos**: jugadores en [albunmundial/src/data/players.js](albunmundial/src/data/players.js)
- **Qué hace**: interfaz para filtrar y mostrar jugadores, abrir modal de paquetes y visualizar stickers por equipo.
- **Qué hice yo (acciones inferidas)**: configuraste Vite y `package.json`, creaste componentes React, añadiste los datos de jugadores y estilos.

**documentacion**:
- **Descripción**: Proyecto de ejemplo o portafolio con catálogo de productos (probablemente Vite + React).
- **Archivos clave**: [documentacion/index.html](documentacion/index.html), [documentacion/src/App.jsx](documentacion/src/App.jsx), [documentacion/src/main.jsx](documentacion/src/main.jsx)
- **Componentes**: `CartDrawer`, `CartItem`, `Catalog`, `CategoryFilters`, `Footer`, `Header`, `Hero`, `ProductCard`, `SearchBar` en [documentacion/src/components](documentacion/src/components)
- **Context / Datos / Hooks**: `AppContext` en [documentacion/src/context/AppContext.jsx](documentacion/src/context/AppContext.jsx), datos en [documentacion/src/data/desserts.js](documentacion/src/data/desserts.js)
- **Qué hace**: catálogo de productos con búsqueda, filtros por categoría, carrito y contexto global.
- **Qué hice yo (acciones inferidas)**: implementaste el contexto de la app, componentes de catálogo y carrito, y añadiste datos de ejemplo.

**market-react**:
- **Descripción**: Pequeña tienda/market React con paneles y consola de logs.
- **Archivos clave**: [market-react/src/App.jsx](market-react/src/App.jsx), [market-react/src/main.jsx](market-react/src/main.jsx)
- **Componentes**: `CartPanel`, `CategoryFilters`, `Header`, `LogsConsole`, `ProductCard`, `ProductModal`, `ScenarioPanel` en [market-react/src/components](market-react/src/components)
- **Hooks/Servicios**: `useFavorites` en [market-react/src/hooks/useFavorites.js](market-react/src/hooks/useFavorites.js), `storage` en [market-react/src/services/storage.js](market-react/src/services/storage.js)
- **Qué hace**: gestor de productos con favoritos, modal de producto y panel de carrito.
- **Qué hice yo (acciones inferidas)**: añadiste lógica para favoritos, implementaste UI de producto y persistencia simple en `storage`.

**Proyecto_mec.dental**:
- **Descripción**: Proyecto para una clínica/dental con interfaz y dominios (auth, dashboard, órdenes, odontograma, etc.).
- **Archivos clave**: [Proyecto_mec.dental/index.html](Proyecto_mec.dental/index.html), [Proyecto_mec.dental/src/main.jsx](Proyecto_mec.dental/src/main.jsx), [Proyecto_mec.dental/src/App.jsx](Proyecto_mec.dental/src/App.jsx)
- **Estructura de dominios**: `auth/LoginView`, `dashboard/DashboardView`, `NewOrderForm`, `Odontograma`, `OrderFeed`, `portfolio` y componentes compartidos como `Carousel` y `Header`.
- **Qué hace**: aplicación más compleja con vistas de autenticación, panel administrativo, gestión de órdenes y componentes reusables.
- **Qué hice yo (acciones inferidas)**: organizaste el código por dominios, añadiste vistas y estilos específicos, y probablemente cargaste datos iniciales en [Proyecto_mec.dental/src/data/initialData.js](Proyecto_mec.dental/src/data/initialData.js).

**proyecto-patrones** (y `con-patrones`):
- **Descripción**: Ejemplos para aplicar patrones de diseño o refactorizaciones en proyectos React.
- **Archivos clave**: [proyecto-patrones/con-patrones/src/App.jsx](proyecto-patrones/con-patrones/src/App.jsx)
- **Qué hace**: demostraciones de componentes `ProductCard`, `ProductGrid` y estructuras que muestran patrones de componente y composición.
- **Qué hice yo (acciones inferidas)**: creaste ejemplos y demostraciones para aprender o enseñar patrones de diseño en React.

**refactorizado**:
- **Descripción**: Versión refactorizada de una tienda React con contexto y hooks.
- **Archivos clave**: [refactorizado/src/App.jsx](refactorizado/src/App.jsx), [refactorizado/src/main.jsx](refactorizado/src/main.jsx)
- **Componentes**: `Cart`, `Header`, `ProductCard`, `ProductGrid`, `ProductModal` en [refactorizado/src/components](refactorizado/src/components)
- **Contexts / Hooks / Services**: `CartContext` en [refactorizado/src/contexts/CartContext.jsx](refactorizado/src/contexts/CartContext.jsx), `useProducts` en [refactorizado/src/hooks/useProducts.js](refactorizado/src/hooks/useProducts.js), `services/products.js` para llamadas o simulación de API.
- **Qué hace**: implementación con separación de responsabilidades, contexto para el carrito y hooks reutilizables.
- **Qué hice yo (acciones inferidas)**: refactorizaste la app para usar contexto, extraí la lógica en hooks y servicios, y limpiaste componentes para mayor reuso.

---

Nota sobre "Qué hice yo": las acciones listadas son inferidas automáticamente a partir de los archivos y la estructura del proyecto. Si prefieres, puedo:

- Actualizar cada sección con descripciones exactas basadas en commits o tu input.
- Generar un `README.md` por cada proyecto con instrucciones para ejecutar, pruebas y scripts.

Indica cómo quieres proceder.
