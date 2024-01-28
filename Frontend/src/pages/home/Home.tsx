import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.scss'

const Homepage = () => {
  const menuItems = ['Meals', 'Shopping', 'Chores']

  return (
    <div className="homepage">
      <div className="homepage-titles">
        <h1>Welcome to FamilyHub</h1>
        <h2>Your Home's Personal Assistant</h2>
      </div>
      <div className="menu">
        {menuItems.map((item, index) => (
          <NavLink key={index} to={`/${item.toLowerCase()}`} className="menu-button">
            {item}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Homepage
