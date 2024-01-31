import React from 'react'
import { NavLink } from 'react-router-dom'
import './Meals.scss'

const Meals = () => {
  return (
    <div className="meals">
      <h1> This is going to be Meals page</h1>
      <NavLink to={`/`} className="menu-button">
        Back
      </NavLink>
    </div>
  )
}

export default Meals
