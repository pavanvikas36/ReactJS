import React, { Component } from 'react'
import "./App.css"

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      data: [],
      loading: true
    }
  }

  
  handleData = (button)=>{
    let url;
    if(button === "fakestoreProducts"){
      url = "https://fakestoreapi.com/products/"
    }else if(button === "dummyProducts"){
      url = "https://dummyjson.com/products"
    }else if(button === "dummyRecipes"){
      url = "https://dummyjson.com/recipes"
    }else{
      return "No Data Found"
    }
    fetch(url).then(res=>res.json()).then(res=>{
      console.log(res)
      const finalRes = res.products || res.recipes || res
      console.log(finalRes)
      this.setState({data:finalRes, loading:false})
    })
  }

  // componentDidMount(){
  //   fetch("https://fakestoreapi.com/products/").then(res=>res.json()).then(res=>{
  //     console.log(res, "data")
  //     this.setState({data:res})
  //   })
  // }
  render() {
    return (
      <div id='App'>
        <div id='App-child1'>
          <button onClick={()=>this.handleData("fakestoreProducts")}>Fake Products</button>
          <button onClick={()=>this.handleData("dummyProducts")}>Dummy Products</button>
          <button onClick={()=>this.handleData("dummyRecipes")}>Dummy Recipes</button>
        </div>
        <div id='App-child2'>
          {this.state.loading ? "Please Click Any Button To Get Data" : this.state.data.map((p, index)=>{
            return (
              <div key={index}>
                <img src={p.image || p.thumbnail} alt="" />
                <h1>{p.title || p.name}</h1>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
