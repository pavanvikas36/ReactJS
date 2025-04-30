import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div id='navbar_container'>
      <h3 className='navbar_right'>Kider</h3>
      <div className='navbar_middle'>
        <span>Home</span>
        <span>About Us</span>
        <span>Classes</span>
        <span>Contact Us</span>
      </div>
      <p className='navbar_left'>Join Us</p>
    </div>
  )
}

export default Navbar
