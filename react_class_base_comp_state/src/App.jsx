import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import {Routes, Route} from 'react-router-dom'
import Count from "./Components/Count/Count"
import Color from "./Components/Color/Color"
import Home from "./Components/Home/Home"
import RandomColor from "./Components/Random Color/RandomColor"
import RandomQuote from "./Components/Random Quote/RandomQuote"
import DarkLight from "./Components/Dark & Light/DarkLight"
import SignupLogin from "./Components/Signup/SignupLogin"

class App extends React.Component{
  render(){
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/count" element={<Count/>}/>
          <Route path="/color" element={<Color/>}/>
          <Route path="/randomcolor" element={<RandomColor/>}></Route>
          <Route path="/randomquote" element={<RandomQuote/>}></Route>
          <Route path="/darklight" element={<DarkLight/>}></Route>
          <Route path="/signuplogin" element={<SignupLogin/>}></Route>
        </Routes>
      </div>
    )
  }
}
export default App