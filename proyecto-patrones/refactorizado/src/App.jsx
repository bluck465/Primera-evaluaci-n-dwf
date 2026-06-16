// ✓ PATRÓN 1 RESUELTO — App orquesta la composición, no la lógica.
// Solo 3 estados locales: search, selectedProduct, isCartOpen.
// Toda la lógica de datos y carrito vive en sus propias capas.

import { useState } from 'react'
import Header       from './components/Header'
import ProductGrid  from './components/ProductGrid'
import ProductModal from './components/ProductModal'
import Cart         from './components/Cart'
import { useProducts } from './hooks/useProducts'

export default function App() {
  const [search, setSearch]             = useState('')
  const [selectedProduct, setSelected]  = useState(null)
  const [isCartOpen, setIsCartOpen]     = useState(false)

  // ✓ PATRÓN 5 RESUELTO — fetch y estado en el hook, no aquí
  const { products, loading, error } = useProducts(search)

  if (loading) return <div className="status">Cargando productos…</div>
  if (error)   return <div className="status" style={{ color:'red' }}>{error}</div>

  return (
    <>
      {/* ✓ PATRÓN 3 RESUELTO — Header solo recibe lo que usa */}
      <Header
        search={search}
        onSearchChange={e => setSearch(e.target.value)}
        onCartOpen={() => setIsCartOpen(true)}
      />

      <main>
        {/* ✓ PATRÓN 3 RESUELTO — ProductGrid no reenvía props de carrito */}
        <ProductGrid
          products={products}
          onOpenModal={setSelected}
        />
      </main>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelected(null)}
      />

      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
    </>
  )
}
