import React from 'react'
import {Link} from 'react-router-dom'
import './Recipe.css'

const Recipe = (singleRec) => {
    // console.log(singleRec)
  return (
    <div className='recipeCart'>
      <img src={singleRec.oneRecipe.image} alt="" />
      <h1>{singleRec.oneRecipe.name}</h1>
      <h1>{singleRec.oneRecipe.mealType}</h1>
      <Link to={`/Recipes/Recipe/${singleRec.oneRecipe.id}`}>View Recipe</Link>
    </div>
  )
}

export default Recipe
