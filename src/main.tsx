// Initial settings
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// components
import App from './App.tsx'
// State Management
import { Provider } from 'react-redux'
import { store } from './components/redux/store/store.tsx'
// helpers
import { BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AnimatePresence mode='wait'>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
      </AnimatePresence>
    </Provider>
  </React.StrictMode>,
)
