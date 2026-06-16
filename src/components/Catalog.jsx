import React, { useEffect, useMemo } from 'react'
import { dessertCatalog } from '../data/desserts'
import { useApp } from '../context/AppContext'

export default function Catalog() {
  const { addProductToCart, toggleFavorite, searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, favorites } = useApp()

  useEffect(() => {
    if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons()
  }, [favorites])

  const filters = [
    { id: 'todos', label: 'Todo el Menú' },
    { id: 'tortas', label: 'Tortas Enteras' },
    { id: 'individuales', label: 'Porciones Individuales' },
    { id: 'copas', label: 'Copas & Vasitos' }
  ]

  const filtered = useMemo(() => {
    return dessertCatalog.filter(p => {
      const matchesCategory = selectedCategory === 'todos' || p.category === selectedCategory
      const q = searchQuery.trim().toLowerCase()
      const matchesSearch = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <section id="catalog-section" className="space-y-10">
      <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between bg-white p-6 rounded-3xl border border-purple-100/80 shadow-md">
        <div className="flex flex-wrap items-center gap-2" id="category-filters-container">
          {filters.map(f => (
            <button key={f.id} onClick={() => setSelectedCategory(f.id)} className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold tracking-wide ${selectedCategory === f.id ? 'bg-purple-600 text-white' : 'bg-purple-50/50 text-neutral-600'}`}>
              {f.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80">
          <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} id="catalog-search-input" type="text" placeholder="Buscar postre de ensueño..." className="w-full pl-4 pr-4 py-3 rounded-2xl bg-neutral-50 border text-sm font-semibold" />
        </div>
      </div>

      <div id="product-grid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-purple-200">No encontramos ningún postre</div>
        ) : (
          filtered.map(p => (
            <div key={p.id} className="group bg-white rounded-3xl overflow-hidden border border-purple-100/80 flex flex-col h-full">
              <div className="relative h-64 bg-neutral-50 overflow-hidden flex items-center justify-center p-6">
                <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: p.svg }} />
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-black tracking-widest text-amber-600">{p.category}</span>
                    <div className="flex items-center gap-1 text-amber-500 font-extrabold text-xs">{p.rating}</div>
                  </div>

                  <h3 className="text-xl font-black text-neutral-900">{p.name}</h3>
                  <p className="text-sm text-neutral-500 font-medium line-clamp-3 leading-relaxed">{p.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-purple-50">
                  <div>
                    <span className="text-[10px] text-neutral-400 block font-bold uppercase tracking-wider">Precio</span>
                    <span className="text-2xl font-black text-purple-950">${p.price.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => toggleFavorite(p.id)} className={`p-2 rounded-full bg-white/90 ${favorites.includes(p.id) ? 'text-red-500' : 'text-neutral-400'}`}>❤</button>
                    <button onClick={() => addProductToCart(p.id)} className="px-5 py-3.5 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 text-white text-xs font-black rounded-2xl">Añadir</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}
