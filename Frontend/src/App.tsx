import React from 'react'
import { useState } from 'react'

import Homepage from './pages/homepage/Homepage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage />
    </>
  )
}

export default App
