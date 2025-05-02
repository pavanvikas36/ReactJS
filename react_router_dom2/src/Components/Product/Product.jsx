import React from 'react'
import './Product.css'
import {Link} from 'react-router-dom'

const Product = (singleP) => {
    console.log(singleP)
  return (
    <div className='productCart'>
      <img src={singleP.singleProduct.thumbnail} alt="" />
      <h1>{singleP.singleProduct.title}</h1>
      <p>{singleP.singleProduct.price}</p>
      <Link to={`/products/product/${singleP.singleProduct.id}`}><span>View Details</span></Link>
    </div>
  )
}

export default Product
