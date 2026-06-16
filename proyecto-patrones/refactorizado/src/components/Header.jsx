// ✓ PATRÓN 3 RESUELTO — Lee el carrito directo del contexto,
// sin necesitar que App le pase cart como prop.

import { useCart } from '../contexts/CartContext'

export default function Header({ search, onSearchChange, onCartOpen }) {
  const { itemCount } = useCart()

  return (
    <header>
      <h1>Tienda 🛒</h1>
      <input
        type="text"
        placeholder="Buscar productos…"
        value={search}
        onChange={onSearchChange}
      />
      <button className="cart-btn" onClick={onCartOpen}>
        Carrito ({itemCount})
      </button>
    </header>
  )
}
