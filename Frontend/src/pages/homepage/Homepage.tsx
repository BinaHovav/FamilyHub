import React from 'react'
import './Homepage.scss'

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-titles">
        <h1> Welcome to FamilyHub</h1>
        <h2> Your Home's Personal Assistant</h2>
      </div>
      <div className="menu">
        <button className="menu-button" type="button">
          Shopping List
        </button>
        <button className="menu-button" type="button">
          Meals
        </button>
        <button className="menu-button" type="button">
          Occasional Chores
        </button>
        <button className="menu-button" type="button">
          Events & Reminders
        </button>
      </div>
    </div>
  )
}

export default Homepage
