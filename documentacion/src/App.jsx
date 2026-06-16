import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import { AppProvider } from './context/AppContext'

export default function App() {
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
