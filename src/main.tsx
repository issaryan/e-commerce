import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Index } from './pages/Index'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { MainLayout } from './layouts/MainLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout><Index /></MainLayout>,
  },
  {
    path: '/login',
    element: <MainLayout><Login /></MainLayout>,
  },
  {
    path: '/register',
    element: <MainLayout><Register /></MainLayout>,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
