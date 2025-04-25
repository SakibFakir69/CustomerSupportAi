import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayouts from './Layouts/MainLayouts.jsx'
import Chat from './components/chat/Chat.jsx'
import HomeLayouts from './components/home/HomeLayouts.jsx'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import ContextAPi from './provider/ContextAPi.jsx'
import AuthenticationLayoutes from './authentication/AuthenticationLayoutes.jsx'
import SignUp from './authentication/SignUp.jsx'
import SignIn from './authentication/SignIn.jsx'
import PrivateRoute from './private/PrivateRoute.jsx'
import Services from './components/services/Services.jsx'
import Blog from './components/blog/Blog.jsx'
// add ai based customer support
// messaging
// live location track

const queryClient = new QueryClient()
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
        element:<PrivateRoute><Chat/></PrivateRoute>
      },
      {
        path:'/services',
        element: <Services/>
      },
      {
        path:'/blog',
        element: <Blog/>
      }
     
    ]
  },
  {
    path:'authentication',
    element: <AuthenticationLayoutes/>,
    children:[
      {
        path:'signup',
        element: <SignUp/>
      },
      {
        path:'signin',
        element: <SignIn/>
      }
    ]

  }
  // authentication



])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <ContextAPi>
   <QueryClientProvider client={queryClient}>
   <RouterProvider router={route}/>
   </QueryClientProvider>
   </ContextAPi>

  </StrictMode>,
)
