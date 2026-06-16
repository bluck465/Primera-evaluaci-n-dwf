import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import './styles.css'

console.log('Initializing un postre app...')

const rootEl = document.getElementById('root')
if (!rootEl) {
  console.error('Root element #root not found')
} else {
  const root = createRoot(rootEl)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  console.log('App mounted')
}
