import React, { use } from 'react'
import {useParams} from 'react-router-dom'
import data from '../Products/pData'
import './ProductsDetails.css'

const ProductsDetails = () => {
    console.log(useParams())
    const {id} = useParams()
    console.log(id, 'id')

    const matchedProduct = data.products.find(x=>x.id === Number(id))
    console.log(matchedProduct)
  return (
    <div className='productDetail'>
        <img src={matchedProduct.thumbnail} alt="" />
        <h1>{matchedProduct.title}</h1>
        <p>{matchedProduct.price}</p>
    </div>
  )
}

export default ProductsDetails
