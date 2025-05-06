import React from 'react'
import Recipe from '../Recipe/Recipe'
import './Recipes.css'

const Recipes = (pro) => {
    // console.log(pro.recipeD, 'pro data')
    const resD = pro.recipeD
  return (
    <div className='card-container'>
      {/* {r.map((rec)=>{
        return (
            <div>
                <h1>{rec.name}</h1>
                <p>{rec.mealType}</p>
            </div>
        )
      })} */}
      {
        resD.map((y)=>{
            return (
                <div>
                    <Recipe oneRecipe = {y}/>
                </div>
            )
        })
      }
    </div>
  )
}

export default Recipes
