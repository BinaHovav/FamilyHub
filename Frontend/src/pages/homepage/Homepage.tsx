import React from 'react'
import './Homepage.scss'

const Homepage = () => {
  const menuItems = ['Shopping List', 'Meals', 'Occasional Chores', 'Events & Reminders']

  return (
    <div className="homepage">
      <div className="homepage-titles">
        <h1>Welcome to FamilyHub</h1>
        <h2>Your Home's Personal Assistant</h2>
      </div>
      <div className="menu">
        {menuItems.map((item, index) => (
          <button key={index} className="menu-button" type="button">
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Homepage
