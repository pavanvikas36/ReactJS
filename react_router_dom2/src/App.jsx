import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Products from './Components/Products/Products'
import Recipes from './Components/Recipes/Recipes'
import {Routes, Route} from 'react-router-dom'
import data from './Components/Products/pData'
import recipeData from './Components/Recipes/dRecipes'
import ProductsDetails from './Components/ProductsDetails/ProductsDetails'
// console.log(data)
console.log(recipeData)

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
        <Route path='/recipes' element={<Recipes recipeD={recipeData.recipes}/>}/>
      </Routes>
    </div>
  )
}

export default App
