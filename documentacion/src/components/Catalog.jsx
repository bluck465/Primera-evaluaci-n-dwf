import React, { useMemo } from 'react'
import { dessertCatalog } from '../data/desserts'
import { useApp } from '../context/AppContext'
import { useLucideIcons } from '../hooks/useLucideIcons'
import CategoryFilters from './CategoryFilters'
import SearchBar from './SearchBar'
import ProductCard from './ProductCard'

export default function Catalog() {
  const {
    addProductToCart, toggleFavorite, searchQuery, setSearchQuery,
    selectedCategory, setSelectedCategory, favorites,
  } = useApp()

  useLucideIcons([favorites])

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
        <CategoryFilters selected={selectedCategory} onSelect={setSelectedCategory} />
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      <div id="product-grid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-purple-200 col-span-full">
            No encontramos ningún postre
          </div>
        ) : (
          filtered.map(p => (
            <ProductCard
              key={p.id}
              product={p}
              isFavorite={favorites.includes(p.id)}
              onAddToCart={addProductToCart}
              onToggleFavorite={toggleFavorite}
            />
          ))
        )}
      </div>
    </section>
  )
}
