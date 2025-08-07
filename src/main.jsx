import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './App.css'
import { CartProvider } from './context/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
)
