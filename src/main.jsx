import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Error from './Pages/Error.jsx'
import PrivateUpdate from './Provider/PrivateUpdateProvider/PrivateUpdate.jsx'
import UpdateProfile from './Pages/UpdateProfile.jsx'
import EstateDetails from './Pages/EstateDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [ 
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../Estates.JSON") 
      },   
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/update",
        element: <PrivateUpdate><UpdateProfile></UpdateProfile></PrivateUpdate>
      },
      {
        path: "/estate/:id",
        element: <EstateDetails></EstateDetails>,
        loader: () => fetch("../Estates.JSON")
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
