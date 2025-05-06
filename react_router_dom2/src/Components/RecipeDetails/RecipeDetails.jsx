import React from 'react'
import dRecipes from '../Recipes/dRecipes'
import {useParams} from 'react-router-dom'
import './RecipeDetails.css'

const RecipeDetails = () => {
    // console.log(useParams())
    const {id} = useParams()
    // console.log(id, 'id')

    const recipeMatch = dRecipes.recipes.find(y=>y.id === Number(id))
    console.log(recipeMatch)
  return (
    <div className='recipeDetail'>
      <img src={recipeMatch.image} alt="" style={{width:"40%"}}/>
      <h1>{recipeMatch.name}</h1>
      <br />
      <h2>Ingredient</h2>
      <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
        {recipeMatch.ingredients.slice(0,6).map((ingredient, index)=>{
            return (
                <li key={index}><h3>{ingredient}</h3></li>
            )
        })}
      </ul>
      <br />
      <h2>Instructions</h2>
      <ul style={{ listStyleType: 'decimal', marginLeft: '20px' }}>
        {recipeMatch.instructions.slice(0,6).map((instractions, index)=>{
            return (
                <li key={index}><h3>{instractions}</h3></li>
            )
        })}
      </ul>
      <br />
    </div>
  )
}

export default RecipeDetails
