import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Products from './Components/Products/Products'
import ProductsDetails from './Components/ProductsDetails/ProductsDetails'
import data from './Components/Products/pData'
import Recipes from './Components/Recipes/Recipes'
import recipeData from './Components/Recipes/dRecipes'
import RecipeDetails from './Components/RecipeDetails/RecipeDetails'
import Carts from './Components/Carts/Carts'
import cartsData from './Components/Carts/cartsData'
// console.log(data)
// console.log(recipeData)
// console.log(cartsData)


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
        <Route path='/recipes/recipe/:id' element={<RecipeDetails/>}/>
        <Route path='/recipes' element={<Recipes recipeD={recipeData.recipes}/>}/>
        <Route path='/carts' element={<Carts cartsData = {cartsData.carts}/>}/>
      </Routes>
    </div>
  )
}

export default App
