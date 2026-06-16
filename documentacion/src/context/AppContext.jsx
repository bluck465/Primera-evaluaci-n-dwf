import React, { createContext, useContext, useState, useMemo } from 'react'
import { dessertCatalog } from '../data/desserts'

const AppContext = createContext(null)

export function useApp() {
  return useContext(AppContext)
}

export function AppProvider({ children }) {
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [searchQuery, setSearchQuery] = useState('')
  const [isCartOpen, setIsCartOpen] = useState(false)

  function addProductToCart(productId) {
    const item = dessertCatalog.find(p => p.id === productId)
    if (!item) return

    setCart(prev => {
      const idx = prev.findIndex(ci => ci.id === item.id && !ci.isCustom)
      if (idx > -1) {
        const copy = [...prev]
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + 1 }
        return copy
      }
      return [...prev, { ...item, quantity: 1, isCustom: false }]
    })
  }

  function toggleFavorite(id) {
    setFavorites(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]))
  }

  function changeCartQuantity(index, delta) {
    setCart(prev => {
      const copy = [...prev]
      copy[index].quantity += delta
      if (copy[index].quantity <= 0) {
        copy.splice(index, 1)
      }
      return copy
    })
  }

  function removeFromCart(index) {
    setCart(prev => prev.filter((_, i) => i !== index))
  }

  function toggleCart(open) {
    setIsCartOpen(Boolean(open))
  }

  const totalItems = useMemo(() => cart.reduce((s, it) => s + (it.quantity || 0), 0), [cart])

  const value = {
    cart,
    favorites,
    selectedCategory,
    searchQuery,
    isCartOpen,
    totalItems,
    setSelectedCategory,
    setSearchQuery,
    addProductToCart,
    toggleFavorite,
    changeCartQuantity,
    removeFromCart
    ,toggleCart
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
