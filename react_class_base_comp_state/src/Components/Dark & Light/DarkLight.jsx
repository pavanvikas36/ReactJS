import React, {Component} from "react"
import { ImSun } from "react-icons/im";
import { IoMoon } from "react-icons/io5";
import { FaRegSun } from "react-icons/fa6";

export default class DarkLight extends Component {
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
      <div className="flex justify-center items-center h-screen" style={{backgroundColor:this.state.a? "black" : "white", color:this.state.a? "white": "black"}}>
        <button onClick={this.themeToggleHandeler} className="text-8xl hover:bg-teal-600 p-5 border-4 border-double">{this.state.a?<FaRegSun />:<IoMoon />}</button>
      </div>
    )
  }
}