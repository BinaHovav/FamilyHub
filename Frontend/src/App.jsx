import { useState, NavLink } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Shopping from './pages/shopping'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Welcome to FamilyHub</h1>
      <h2> Your Home's Personal Assistant</h2>
      <div className="card">
        {/* <NavLink to="/shopping"> */}
        <button type="button">Shopping List</button>
        {/* </NavLink> */}
        {/* <NavLink to="/lunchbox"> */}
        <button type="button">Lunch Box</button>
        {/* </NavLink> */}
        {/* <NavLink to="/dinner"> */}
        <button type="button">Dinner</button>
        {/* </NavLink> */}
        {/* <NavLink to="/events"> */}
        <button type="button">Events</button>
        {/* </NavLink> */}
        {/* <NavLink to="/chores"> */}
        <button type="button">General Chores</button>
        {/* </NavLink> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
