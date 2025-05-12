import React, {Component} from "react"
import { ImSun } from "react-icons/im";
import { IoMoon } from "react-icons/io5";

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      a:false
    }
  }
  themeToggleHandeler = ()=>{
    this.setState({a:!this.state.a})
  }
  render(){
    return (
      <div className="flex justify-center items-center h-screen" style={{backgroundColor:this.state.a? "black" : "white"}}>
        <button onClick={this.themeToggleHandeler}>{this.state.a?<ImSun />:<IoMoon />}</button>
      </div>
    )
  }
}