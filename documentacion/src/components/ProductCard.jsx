import React from 'react'

export default function ProductCard({ product, isFavorite, onAddToCart, onToggleFavorite }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-purple-100/80 flex flex-col h-full">
      <div className="relative h-64 bg-neutral-50 overflow-hidden flex items-center justify-center p-6">
        <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: product.svg }} />
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-black tracking-widest text-amber-600">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-extrabold text-xs">
              {product.rating}
            </div>
          </div>

          <h3 className="text-xl font-black text-neutral-900">{product.name}</h3>
          <p className="text-sm text-neutral-500 font-medium line-clamp-3 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-purple-50">
          <div>
            <span className="text-[10px] text-neutral-400 block font-bold uppercase tracking-wider">
              Precio
            </span>
            <span className="text-2xl font-black text-purple-950">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(product.id)}
              className={`p-2 rounded-full bg-white/90 ${
                isFavorite ? 'text-red-500' : 'text-neutral-400'
              }`}
            >
              ❤
            </button>
            <button
              onClick={() => onAddToCart(product.id)}
              className="px-5 py-3.5 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 text-white text-xs font-black rounded-2xl"
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
