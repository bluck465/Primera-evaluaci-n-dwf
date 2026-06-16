// ❌ PATRÓN 3 — PROP DRILLING (consumidor final)
// ProductCard es el destino real de cart y onAddToCart, pero para
// llegar aquí tuvieron que pasar por App → ProductGrid → ProductCard.

export default function ProductCard({ product, cart, onAddToCart, onOpenModal }) {

  // Comprueba si el producto ya está en el carrito
  // ❌ PATRÓN 3 — necesita el array cart completo solo para hacer este find
  const inCart = cart.some(i => i.id === product.id)

  return (
    <div className="card" onClick={() => onOpenModal(product)}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <button
        onClick={e => {
          e.stopPropagation()
          onAddToCart(product)
        }}
        style={inCart ? { background: '#16a34a' } : {}}
      >
        {inCart ? '✓ En carrito' : 'Agregar'}
      </button>
    </div>
  )
}
