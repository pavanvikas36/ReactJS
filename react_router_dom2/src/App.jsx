import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Products from './Components/Products/Products'
import {Routes, Route} from 'react-router-dom'
import data from './Components/Products/pData'
import ProductsDetails from './Components/ProductsDetails/ProductsDetails'
console.log(data)

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/products/product/:id' element={<ProductsDetails />}/>
        <Route path='/products' element={<Products productsData={data.products} />}/>
      </Routes>
    </div>
  )
}

export default App
