import React from 'react'
import { useApp } from '../context/AppContext'
import { useLucideIcons } from '../hooks/useLucideIcons'
import CartItem from './CartItem'

export default function CartDrawer() {
  const { cart, isCartOpen, toggleCart, changeCartQuantity, removeFromCart } = useApp()

  useLucideIcons([cart, isCartOpen])

  const total = cart.reduce((acc, it) => acc + it.price * it.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isCartOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isCartOpen}>
      <div
        onClick={() => toggleCart(false)}
        className={`absolute inset-0 bg-black/40 transition-opacity ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}
      />

      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 border-b flex items-center justify-between">
          <h3 className="font-black">Tu Canasta</h3>
          <button onClick={() => toggleCart(false)} className="p-2">
            <i data-lucide="x" />
          </button>
        </div>

        <div className="p-6 space-y-4 overflow-y-auto" style={{ maxHeight: '70vh' }}>
          {cart.length === 0 ? (
            <div className="text-center text-neutral-600">Aún no has agregado delicias</div>
          ) : (
            cart.map((item, idx) => (
              <CartItem
                key={`${item.id}-${idx}`}
                item={item}
                index={idx}
                onChangeQuantity={changeCartQuantity}
                onRemove={removeFromCart}
              />
            ))
          )}
        </div>

        <div className="p-6 border-t">
          <div className="flex items-center justify-between font-black text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={() => alert('Checkout aún no implementado')}
            className="w-full mt-4 py-3 bg-purple-700 text-white rounded-2xl"
          >
            Confirmar Pedido
          </button>
        </div>
      </aside>
    </div>
  )
}
