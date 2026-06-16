// ❌ PATRÓN 1 — COMPONENTE DIOS
// Este componente maneja: fetch de datos, carrito, búsqueda, modal,
// panel lateral y toda la lógica de UI. Más de 150 líneas, 9 useState.
// Un cambio en cualquier área obliga a tocar este mismo archivo.

import { useState, useEffect } from 'react'
import ProductGrid from './components/ProductGrid'

export default function App() {

  // ❌ PATRÓN 1 — 9 estados en el mismo componente
  const [products, setProducts]           = useState([])
  const [loading, setLoading]             = useState(false)
  const [error, setError]                 = useState(null)
  const [search, setSearch]               = useState('')
  const [cart, setCart]                   = useState([])
  const [isCartOpen, setIsCartOpen]       = useState(false)
  const [selectedProduct, setSelected]    = useState(null)
  const [isModalOpen, setIsModalOpen]     = useState(false)
  // ❌ PATRÓN 4 — EFECTO DESCONTROLADO
  // lastSearch se usa dentro del efecto pero no está en las dependencias.
  // El efecto nunca vuelve a ejecutarse aunque lastSearch cambie.
  const [lastSearch, setLastSearch]       = useState('')

  // ❌ PATRÓN 5 — DATOS MEZCLADOS CON UI
  // El fetch, la transformación y el filtrado viven aquí dentro,
  // mezclados con toda la lógica de presentación del componente.
  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar productos')
        return res.json()
      })
      .then(data => {
        // Transformación mezclada con el fetch
        const transformados = data.map(p => ({
          id:          p.id,
          title:       p.title,
          price:       p.price,
          image:       p.image,
          category:    p.category,
          description: p.description,
          rating:      p.rating.rate,
        }))
        setProducts(transformados)
        setLoading(false)

        // ❌ PATRÓN 4 — lastSearch no está en el array de dependencias de arriba,
        // así que este log solo imprime el valor inicial (''), siempre.
        console.log('Última búsqueda al cargar:', lastSearch)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })

  }, []) // ← falta lastSearch aquí para que el efecto sea correcto

  // ❌ PATRÓN 2 — ESTADO MAL UBICADO
  // El estado del carrito (cart, setCart) vive en App aunque Header
  // y CartPanel también lo necesitan. Se pasa hacia abajo como prop setter.
  function handleAddToCart(product) {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id)
      if (exists) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  function handleRemoveFromCart(id) {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  function handleOpenModal(product) {
    setSelected(product)
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
    setSelected(null)
  }

  function handleSearchChange(e) {
    setSearch(e.target.value)
    setLastSearch(e.target.value)
  }

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  const total = cart.reduce((acc, i) => acc + i.price * i.qty, 0)

  if (loading) return <div className="status">Cargando productos…</div>
  if (error)   return <div className="status" style={{ color:'red' }}>{error}</div>

  return (
    <>
      {/* ❌ PATRÓN 3 — PROP DRILLING
          search, onSearchChange, cart, onCartOpen, onAddToCart, onOpenModal
          se pasan desde App → ProductGrid → ProductCard sin que ProductGrid
          los use directamente. Solo los reenvía hacia ProductCard. */}
      <header>
        <h1>Tienda 🛒</h1>

        {/* ❌ PATRÓN 2 — onSearchChange es un setter que viene de App */}
        <input
          type="text"
          placeholder="Buscar productos…"
          value={search}
          onChange={handleSearchChange}
        />

        <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
          Carrito ({cart.reduce((a, i) => a + i.qty, 0)})
        </button>
      </header>

      <main>
        {/* ❌ PATRÓN 3 — ProductGrid recibe props que solo reenvía */}
        <ProductGrid
          products={filtered}
          cart={cart}
          onAddToCart={handleAddToCart}
          onOpenModal={handleOpenModal}
        />
      </main>

      {/* Modal de detalle */}
      {isModalOpen && selectedProduct && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <img src={selectedProduct.image} alt={selectedProduct.title} />
            <h2>{selectedProduct.title}</h2>
            <p style={{ fontSize:'0.8rem', color:'#64748b' }}>{selectedProduct.category}</p>
            <p>{selectedProduct.description}</p>
            <p style={{ fontWeight:700, color:'#3b82f6', margin:'.5rem 0' }}>
              ${selectedProduct.price}
            </p>
            <div className="modal-footer">
              <button onClick={handleCloseModal}>Cerrar</button>
              <button className="add" onClick={() => { handleAddToCart(selectedProduct); handleCloseModal() }}>
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Panel del carrito */}
      {isCartOpen && (
        <div className="cart-panel">
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'1rem' }}>
            <h2>Carrito</h2>
            <button onClick={() => setIsCartOpen(false)} style={{ background:'none', border:'none', cursor:'pointer', fontSize:'1.2rem' }}>✕</button>
          </div>
          {cart.length === 0
            ? <p style={{ color:'#64748b' }}>El carrito está vacío.</p>
            : <>
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <span>{item.title.slice(0, 28)}… ×{item.qty}</span>
                    <span>${(item.price * item.qty).toFixed(2)}</span>
                    {/* ❌ PATRÓN 2 — onRemove llama directamente a setCart de App */}
                    <button onClick={() => handleRemoveFromCart(item.id)}>✕</button>
                  </div>
                ))}
                <p className="cart-total">Total: ${total.toFixed(2)}</p>
              </>
          }
        </div>
      )}
    </>
  )
}
