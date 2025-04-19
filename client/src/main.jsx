import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayouts from './Layouts/MainLayouts.jsx'
import Chat from './components/chat/Chat.jsx'
import HomeLayouts from './components/home/HomeLayouts.jsx'

// add ai based customer support
// messaging
// live location track


const route = createBrowserRouter([
  {
    path:'',
    element: <MainLayouts/>,

    children:[
      {
        path:'/',
        element:<HomeLayouts/>
      },
      {
        path:'/chat',
        element: <Chat/>
      }
     
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={route}/>
  </StrictMode>,
)
