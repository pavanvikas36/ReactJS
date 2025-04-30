import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div id='navbar_container'>
      <div className='navbar_right'>
        <span>Pavan Tech</span>
      </div>
      <div className='navbar_left'>
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
        <span>Products</span>
      </div>
    </div>
  )
}

export default Navbar
