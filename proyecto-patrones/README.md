# proyecto-patrones

Dos versiones de la misma aplicación — una tienda de productos — para comparar
los 5 patrones problemáticos comunes en React con sus soluciones.

## Cómo correr cada versión

```bash
# Versión con patrones
cd con-patrones
npm install
npm run dev

# Versión refactorizada
cd refactorizado
npm install
npm run dev
```

---

## Mapa de patrones

### ❌ con-patrones/

| Patrón | Archivo | Qué buscar |
|--------|---------|------------|
| 1 — Componente Dios | `src/App.jsx` | 9 `useState`, fetch, carrito, búsqueda y modal en un solo componente |
| 2 — Estado mal ubicado | `src/App.jsx` | `cart` y `setCart` viven en App aunque son globales |
| 3 — Prop Drilling | `src/components/ProductGrid.jsx` | Recibe `cart` y `onAddToCart` sin usarlos; solo los reenvía a `ProductCard` |
| 4 — Efecto descontrolado | `src/App.jsx` | `useEffect(…, [])` usa `lastSearch` pero no la declara como dependencia |
| 5 — Datos mezclados | `src/App.jsx` | `fetch`, transformación y filtrado dentro del componente visual |

### ✓ refactorizado/

| Patrón resuelto | Archivo | Solución |
|-----------------|---------|----------|
| 1 — Componente Dios | `src/App.jsx` | Solo 3 estados locales; delega a hook, contexto y componentes |
| 2 — Estado mal ubicado | `src/contexts/CartContext.jsx` | El carrito vive en su contexto; cualquier componente lo consume directo |
| 3 — Prop Drilling | `src/components/ProductGrid.jsx` + `ProductCard.jsx` | Grid no reenvía nada; Card lee el carrito del contexto |
| 4 — Efecto descontrolado | `src/hooks/useProducts.js` | `useEffect` sin dependencias ocultas; incluye cleanup con flag |
| 5 — Datos mezclados | `src/services/products.js` + `src/hooks/useProducts.js` | Servicio fetcha y transforma; hook maneja estado; componente solo renderiza |

---

## Árbol de archivos

```
con-patrones/
└── src/
    ├── App.jsx                 ← Componente Dios (todos los patrones)
    ├── components/
    │   ├── ProductGrid.jsx     ← Prop Drilling (intermediario)
    │   └── ProductCard.jsx     ← Prop Drilling (consumidor)
    ├── index.css
    └── main.jsx

refactorizado/
└── src/
    ├── App.jsx                 ← Orquestador limpio
    ├── contexts/
    │   └── CartContext.jsx     ← Patrón 2 + 3 resueltos
    ├── hooks/
    │   └── useProducts.js      ← Patrón 4 + 5 resueltos
    ├── services/
    │   └── products.js         ← Patrón 5 resuelto
    ├── components/
    │   ├── Header.jsx
    │   ├── ProductGrid.jsx
    │   ├── ProductCard.jsx
    │   ├── ProductModal.jsx
    │   └── Cart.jsx
    ├── index.css
    └── main.jsx
```
