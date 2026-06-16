// ✓ PATRÓN 5 RESUELTO — Servicio separado
// Responsabilidad única: fetch + transformación de datos.
// No sabe nada de estado React ni de cómo se renderiza.

const API_URL = 'https://fakestoreapi.com/products'

function transformProduct(p) {
  return {
    id:          p.id,
    title:       p.title,
    price:       p.price,
    image:       p.image,
    category:    p.category,
    description: p.description,
    rating:      p.rating.rate,
  }
}

export async function fetchProducts() {
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error('Error al cargar productos')
  const data = await res.json()
  return data.map(transformProduct)
}
