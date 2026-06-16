import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import Footer from './components/Footer'
import { AppProvider } from './context/AppContext'
import CartDrawer from './components/CartDrawer'

export default function App() {
  useEffect(() => {
    // Initialize lucide icons for the initial render
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons()
    }
  }, [])

  return (
    <AppProvider>
      <Header />
      <CartDrawer />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Hero />
        <Catalog />
      </main>
      <Footer />
    </AppProvider>
  )
}
