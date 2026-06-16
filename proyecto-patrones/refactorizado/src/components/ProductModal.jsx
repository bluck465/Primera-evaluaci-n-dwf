// ✓ PATRÓN 1 RESUELTO — Responsabilidad única: mostrar el detalle de un producto.
// ✓ PATRÓN 2 RESUELTO — El estado modal (qué producto mostrar) vive en App,
//   que es el único lugar que lo necesita y lo controla.

import { useCart } from '../contexts/CartContext'

export default function ProductModal({ product, onClose }) {
  const { addToCart } = useCart()

  if (!product) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p style={{ fontSize:'0.8rem', color:'#64748b' }}>{product.category}</p>
        <p>{product.description}</p>
        <p style={{ fontWeight:700, color:'#3b82f6', margin:'.5rem 0' }}>
          ${product.price}
        </p>
        <div className="modal-footer">
          <button onClick={onClose}>Cerrar</button>
          <button className="add" onClick={() => { addToCart(product); onClose() }}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}
