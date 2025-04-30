import React from 'react'
import './Products.css'
import Product from '../Product/Product'

const Products = () => {
    const products = [
        {
            id: 1,
            name: 'Laptop',
            cost: 55000
        },
        {
            id: 2,
            name: 'Mobile',
            cost: 15000
        }
    ]     
  return (
    <div>
        {/* {products.map((p, index)=>{
          console.log(p)
          return (
            <div>
              <h1>{p.name}</h1>
            </div>
          )
        })} */}
        <Product data={products}/>
    </div>
  )
}

export default Products
