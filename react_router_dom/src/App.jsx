import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Home></Home>
        <About></About>
        <Contact></Contact>
      </div>
    </div>
  )
}

export default App
