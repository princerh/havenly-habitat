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
import PrivateDetails from './Provider/PrivateDetailsProvider/PrivateDetails.jsx'
import Services from './Services.jsx'
import PrivateServices from './Provider/PrivateServicesProvider/PrivateServices.jsx'
import { HelmetProvider } from 'react-helmet-async'

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
        element: <PrivateDetails><EstateDetails></EstateDetails></PrivateDetails>,
        loader: () => fetch("../Estates.JSON")
      },
      {
        path: "/service",
        element: <PrivateServices><Services></Services></PrivateServices>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
    <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
