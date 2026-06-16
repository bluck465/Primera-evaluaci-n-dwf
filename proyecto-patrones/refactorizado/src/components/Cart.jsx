// ✓ PATRÓN 2 RESUELTO — Lee su propio estado del contexto.
// ✓ PATRÓN 1 RESUELTO — Responsabilidad única: renderizar el panel del carrito.

import { useCart } from '../contexts/CartContext'

export default function Cart({ onClose }) {
  const { cart, removeFromCart, total } = useCart()

  return (
    <div className="cart-panel">
      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'1rem' }}>
        <h2>Carrito</h2>
        <button onClick={onClose} style={{ background:'none', border:'none', cursor:'pointer', fontSize:'1.2rem' }}>✕</button>
      </div>

      {cart.length === 0
        ? <p style={{ color:'#64748b' }}>El carrito está vacío.</p>
        : <>
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <span>{item.title.slice(0, 28)}… ×{item.qty}</span>
                <span>${(item.price * item.qty).toFixed(2)}</span>
                <button onClick={() => removeFromCart(item.id)}>✕</button>
              </div>
            ))}
            <p className="cart-total">Total: ${total.toFixed(2)}</p>
          </>
      }
    </div>
  )
}
