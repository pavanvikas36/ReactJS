import React from 'react'
import Product from '../Product/Product'
import './Products.css'

const Products = (prop) => {
    console.log(prop.productsData, 'prop data')
    const d = prop.productsData
  return (
    <div className='products'>
      {/* {d.map((p)=>{
        return (
            <div>
                <h1>{p.title}</h1>
                <h1>{p.price}</h1>
            </div>
        )
      })} */}
      {
        d.map((x)=>{
            return (
                <>
                    <Product singleProduct = {x}/>
                </>
            )
        })
      }
    </div>
  )
}

export default Products
