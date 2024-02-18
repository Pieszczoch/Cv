import React from 'react';

import './index.css';

import Layout from './components/layouts/Layout';
import MainPage from './pages/main-page';
import ErrorPage from './pages/not-found';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    index: true,
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
];

const router = () => createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router()} />
    </Layout>
  </React.StrictMode>
);
