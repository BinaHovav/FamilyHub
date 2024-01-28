import React from 'react'
import { NavLink } from 'react-router-dom'
import './Shopping.scss'

const Shopping = () => {
  return (
    <div className="shopping">
      <h1> This is going to be Shopping page</h1>
      <NavLink to={`/`} className="menu-button">
        Back
      </NavLink>
    </div>
  )
}

export default Shopping
