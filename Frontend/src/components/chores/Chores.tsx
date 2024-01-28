import React from 'react'
import { NavLink } from 'react-router-dom'
import './Chores.scss'

const Chores = () => {
  return (
    <div className="chores">
      <h1> This is going to be Chores page</h1>
      <NavLink to={`/`} className="menu-button">
        Back
      </NavLink>
    </div>
  )
}

export default Chores
