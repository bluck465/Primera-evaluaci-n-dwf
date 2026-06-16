// ✓ PATRÓN 3 RESUELTO — Ya no es un tubo de props.
// Solo recibe lo que realmente necesita: la lista filtrada y el handler del modal.
// Cart y addToCart los consume ProductCard directamente del contexto.

import ProductCard from './ProductCard'

export default function ProductGrid({ products, onOpenModal }) {
  if (products.length === 0) {
    return <p className="status">Sin resultados.</p>
  }

  return (
    <div className="grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onOpenModal={onOpenModal}
        />
      ))}
    </div>
  )
}
