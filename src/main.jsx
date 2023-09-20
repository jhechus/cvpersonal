import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Home from './Routes/Home'
import Portfolio from './Routes/Portfolio'
import Space from './Routes/Space'
import Contact from './Routes/Contact'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: < Home />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/portfolio/space',
    element: <Space />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={ router } />
  </React.StrictMode>,
)
