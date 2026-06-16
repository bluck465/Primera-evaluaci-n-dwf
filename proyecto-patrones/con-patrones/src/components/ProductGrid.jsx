// ❌ PATRÓN 3 — PROP DRILLING (componente intermediario)
// ProductGrid recibe cart, onAddToCart y onOpenModal pero no los usa.
// Solo los pasa hacia abajo a ProductCard. Es un tubo de props.

import ProductCard from './ProductCard'

export default function ProductGrid({ products, cart, onAddToCart, onOpenModal }) {
  if (products.length === 0) {
    return <p className="status">Sin resultados.</p>
  }

  return (
    // ❌ PATRÓN 3 — cart, onAddToCart y onOpenModal se reenvían sin usarse aquí
    <div className="grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          cart={cart}
          onAddToCart={onAddToCart}
          onOpenModal={onOpenModal}
        />
      ))}
    </div>
  )
}
