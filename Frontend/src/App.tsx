import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import Meals from './components/meals/Meals'
import Shopping from './components/shopping/Shopping'
import Chores from './components/chores/Chores'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/meals',
      element: <Meals />,
    },
    {
      path: '/shopping',
      element: <Shopping />,
    },
    {
      path: '/chores',
      element: <Chores />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
