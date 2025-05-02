import React from 'react'
import './Recipe.css'

const Recipe = (singleRec) => {
    console.log(singleRec)
  return (
    <div className='recipeCart'>
      <img src={singleRec.oneRecipe.image} alt="" />
      <h1>{singleRec.oneRecipe.name}</h1>
      <h1>{singleRec.oneRecipe.mealType}</h1>
    </div>
  )
}

export default Recipe
