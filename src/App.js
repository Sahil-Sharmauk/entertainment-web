import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import AppLayout from './Layout/AppLayout';
export default function App() {
  console.log("Router")
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/movies',
          element:<Home/>
        },
        {
          path:'/series',
          element:<Home/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    }
  ]);

  return(
      <RouterProvider router={router}></RouterProvider>
  )
}



