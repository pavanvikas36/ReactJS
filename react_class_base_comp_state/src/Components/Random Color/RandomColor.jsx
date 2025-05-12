import React, { Component } from "react";
import './RandomColor.css'

export default class RandomColor extends Component {
  constructor() {
    super();
    this.state = {
      randomColor: "white",
    };
  }
  handleRandomColor = () => {
    let string = "abcdef0123456789"
    let haxc = "#"
    for (let i = 0;i < 6;i++ ){
        let number = Math.floor(Math.random() * string.length)
        let randomNum = string[number]
        haxc += randomNum
    }
    console.log(haxc, "Code")
    this.setState({randomColor:haxc})
  };
  render() {
    return (
      <div className="flex bg-lime-300 border-e p-4 h-screen w-full justify-center items-center" id="random" style={{ backgroundColor: this.state.randomColor }}>
        <button onClick={this.handleRandomColor} className="bg-white border-4 border-double h-15 text-black px-4 py-2 rounded shadow hover:bg-teal-600 hover:text-white transition">
            RandomColor
        </button>
      </div>
    );
  }
}
