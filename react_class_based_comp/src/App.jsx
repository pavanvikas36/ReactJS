import React from "react";
import Navbar from "./Components/Navbar/Nabar";
import Home from "./Components/Home/Home";
import './App.css'
import { Routes, Route } from "react-router-dom";
// import Data from "./Components/Products/pData"
import data from "../../react_router_dom2/src/Components/Products/pData";
import Products from "./Components/Products/Products";

class App extends React.Component{
  render(){
    return (
      <>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/products" element={<Products productsData={data.products}/>}></Route>
        </Routes>
      </>
    )
  }
}
export default App;