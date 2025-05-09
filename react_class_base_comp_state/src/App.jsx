import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import {Routes, Route} from 'react-router-dom'
import Count from "./Components/Count/Count"
import Color from "./Components/Color/Color"
import Home from "./Components/Home/Home"

class App extends React.Component{
  render(){
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/count" element={<Count/>}/>
          <Route path="/color" element={<Color/>}/>
        </Routes>
      </div>
    )
  }
}
export default App