// ✓ PATRÓN 1 RESUELTO — Responsabilidad única: solo renderiza una tarjeta
// ✓ PATRÓN 2 RESUELTO — Lee el carrito del contexto, no como prop
// ✓ PATRÓN 3 RESUELTO — No recibe props innecesarias de componentes superiores

import { useCart } from '../contexts/CartContext'

export default function ProductCard({ product, onOpenModal }) {
  const { cart, addToCart } = useCart()

  const inCart = cart.some(i => i.id === product.id)

  return (
    <div className="card" onClick={() => onOpenModal(product)}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <button
        onClick={e => { e.stopPropagation(); addToCart(product) }}
        style={inCart ? { background: '#16a34a' } : {}}
      >
        {inCart ? '✓ En carrito' : 'Agregar'}
      </button>
    </div>
  )
}
