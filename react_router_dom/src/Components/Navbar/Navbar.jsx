import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div id='nav'>
      <div className='nav_right'>
        Pavan Solutions
      </div>
      <div className='nav_left'>
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </div>
  )
}

export default Navbar
