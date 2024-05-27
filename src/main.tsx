// Initial settings
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// components and routes
import routes from "./routes.tsx"
// State Management
import { Provider } from 'react-redux'
import { store } from './components/redux/store/store.tsx'
// helpers
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AnimatePresence mode='wait'>
        <RouterProvider router={router}/>
      </AnimatePresence>
    </Provider>
  </React.StrictMode>,
)
