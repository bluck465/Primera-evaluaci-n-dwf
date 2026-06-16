// ✓ PATRÓN 4 RESUELTO — Efecto con dependencias correctas
// ✓ PATRÓN 5 RESUELTO — Hook separado del componente visual
// Responsabilidad única: gestionar estado y ciclo de vida del fetch.
// No renderiza nada. El componente solo consume lo que este hook expone.

import { useState, useEffect } from 'react'
import { fetchProducts } from '../services/products'

export function useProducts(search) {
  const [products, setProducts] = useState([])
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState(null)

  // ✓ PATRÓN 4 RESUELTO — sin dependencias externas ocultas,
  // el fetch solo se ejecuta una vez al montar.
  useEffect(() => {
    let cancelled = false
    setLoading(true)

    fetchProducts()
      .then(data => { if (!cancelled) { setProducts(data); setLoading(false) } })
      .catch(err  => { if (!cancelled) { setError(err.message); setLoading(false) } })

    return () => { cancelled = true }
  }, [])

  // El filtrado es derivado: no necesita estado propio
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  return { products: filtered, loading, error }
}
