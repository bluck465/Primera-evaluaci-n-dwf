// ✓ PATRÓN 2 RESUELTO — Estado en su lugar correcto
// ✓ PATRÓN 3 RESUELTO — Contexto elimina el prop drilling
// El carrito vive aquí porque es estado global que múltiples
// componentes (Header, ProductCard, CartPanel) consumen directamente.

import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id)
      if (exists) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  const total    = cart.reduce((acc, i) => acc + i.price * i.qty, 0)
  const itemCount = cart.reduce((acc, i) => acc + i.qty, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total, itemCount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider')
  return ctx
}
