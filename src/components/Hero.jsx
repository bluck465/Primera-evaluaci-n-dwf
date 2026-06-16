import React from 'react'
import { dessertCatalog } from '../data/desserts'
import { useApp } from '../context/AppContext'

export default function Hero() {
  const featured = dessertCatalog[0]
  const { addProductToCart } = useApp()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-100/40 via-purple-50/10 to-transparent py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 text-purple-800 text-xs font-bold tracking-wider uppercase border border-purple-200 shadow-sm">Alta Repostería de Autor</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-purple-950 leading-tight">El arte de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-600 to-amber-500">endulzar</span> tus mejores momentos</h1>
            <p className="text-lg text-neutral-600 max-w-xl font-medium">En un postre fusionamos sabores sofisticados, técnicas francesas y un toque de magia dorada.</p>
          </div>

          <div className="md:col-span-5 relative flex justify-center">
            <div className="w-72 h-72 sm:w-96 sm:h-96 relative rounded-3xl p-1">
              <div className="relative w-full h-full bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden p-6 flex flex-col justify-between border border-purple-100 shadow-2xl">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black text-amber-600 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">Destacado de la Semana</span>
                  <div className="flex items-center text-amber-500 font-extrabold text-sm">{featured.rating}</div>
                </div>
                <div className="w-full h-44 my-4 flex items-center justify-center" dangerouslySetInnerHTML={{ __html: featured.svg }} />
                <div>
                  <h3 className="font-black text-lg text-purple-950">{featured.name}</h3>
                  <p className="text-xs text-neutral-500">{featured.description}</p>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-neutral-100">
                    <span className="text-xl font-black text-purple-800">${featured.price.toFixed(2)}</span>
                    <button onClick={() => addProductToCart(featured.id)} className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-400 text-purple-950 font-black text-xs rounded-xl shadow-md">Ordenar Ahora</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
