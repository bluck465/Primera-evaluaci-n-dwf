import React from 'react'
import { useApp } from '../context/AppContext'
import { useEffect } from 'react'

export default function Header() {
  const { totalItems, toggleCart } = useApp()

  useEffect(() => {
    if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons()
  }, [totalItems])

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-purple-600 via-purple-500 to-amber-500 flex items-center justify-center shadow-lg">
            <i data-lucide="sparkles" className="text-white w-5 h-5"></i>
          </div>
          <div>
            <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-purple-800 via-purple-600 to-amber-600 bg-clip-text text-transparent">un postre</span>
            <p className="text-[10px] uppercase tracking-widest text-amber-600 font-bold">Repostería de Ensueño</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => document.getElementById('catalog-section')?.scrollIntoView({behavior:'smooth'})} className="text-sm font-extrabold tracking-wide py-2 px-3 rounded-xl text-purple-700 bg-purple-50/70 border-b-2 border-purple-600">Nuestra Carta</button>
          <button onClick={() => document.getElementById('catalog-section')?.scrollIntoView({behavior:'smooth'})} className="text-sm font-extrabold tracking-wide py-2 px-3 rounded-xl text-neutral-500 hover:text-purple-600">Arma tu Postre</button>
          <button onClick={() => document.querySelector('footer')?.scrollIntoView({behavior:'smooth'})} className="text-sm font-extrabold tracking-wide py-2 px-3 rounded-xl text-neutral-500 hover:text-purple-600">Nuestro Taller</button>
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={() => toggleCart(true)} className="relative p-3 rounded-2xl bg-purple-50 text-purple-700 border border-purple-200/40">
            <i data-lucide="shopping-bag" className="w-5 h-5"></i>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs font-black w-5 h-5 flex items-center justify-center rounded-full animate-bounce">{totalItems}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
