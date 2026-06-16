import React, { useEffect } from 'react'
import { useApp } from '../context/AppContext'

export default function CartDrawer() {
  const { cart, isCartOpen, toggleCart, changeCartQuantity, removeFromCart } = useApp()

  useEffect(() => {
    if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons()
  }, [cart, isCartOpen])

  return (
    <div className={`fixed inset-0 z-50 ${isCartOpen ? '' : 'pointer-events-none'} `} aria-hidden={!isCartOpen}>
      <div onClick={() => toggleCart(false)} className={`absolute inset-0 bg-black/40 transition-opacity ${isCartOpen ? 'opacity-100' : 'opacity-0'}`} />

      <aside className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b flex items-center justify-between">
          <h3 className="font-black">Tu Canasta</h3>
          <button onClick={() => toggleCart(false)} className="p-2"><i data-lucide="x" /></button>
        </div>

        <div className="p-6 space-y-4 overflow-y-auto" style={{maxHeight: '70vh'}}>
          {cart.length === 0 ? (
            <div className="text-center text-neutral-600">Aún no has agregado delicias</div>
          ) : (
            cart.map((item, idx) => (
              <div key={item.id + idx} className="flex gap-4 items-center">
                <div className="w-16 h-16 bg-neutral-50 rounded-md overflow-hidden" dangerouslySetInnerHTML={{ __html: item.svg || item.customSvg }} />
                <div className="flex-grow">
                  <div className="font-bold text-sm">{item.name}</div>
                  <div className="text-xs text-neutral-500">${item.price.toFixed(2)}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => changeCartQuantity(idx, -1)} className="px-2">-</button>
                    <span className="font-black">{item.quantity}</span>
                    <button onClick={() => changeCartQuantity(idx, 1)} className="px-2">+</button>
                    <button onClick={() => removeFromCart(idx)} className="ml-4 text-red-500 text-sm">Eliminar</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t">
          <div className="flex items-center justify-between font-black text-lg">
            <span>Total</span>
            <span>${cart.reduce((acc, it) => acc + it.price * it.quantity, 0).toFixed(2)}</span>
          </div>
          <button onClick={() => alert('Checkout aún no implementado')} className="w-full mt-4 py-3 bg-purple-700 text-white rounded-2xl">Confirmar Pedido</button>
        </div>
      </aside>
    </div>
  )
}
