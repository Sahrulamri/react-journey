import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginPage from './Pages/login.jsx'
import RegisterPage from './Pages/register.jsx'
import ErrorPage from './Pages/error.jsx'
import ProductPage from './Pages/product.jsx'

const router = createBrowserRouter ([
  {
    path: "/",
    element : <LoginPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/product",
    element: <ProductPage/>,
    errorElement: <ErrorPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
