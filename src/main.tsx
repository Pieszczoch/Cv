import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/main-page'
import ErrorPage from './pages/not-found'
import Layout from './components/layouts/Layout'


export const routes = [
  {
    path: '/',
    index: true,
    element: <MainPage />,
    errorElement: <ErrorPage />
  }
]

const router = () => createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router()} />
    </Layout>
  </React.StrictMode>,
)
