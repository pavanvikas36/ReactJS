import React from 'react'
import './Cart.css'

const Cart = (singleCart) => {
    console.log(singleCart)
  return (
    <div id='carts_display'>
      <div>
        {singleCart.singleCart.products.map((product)=>{
            return (
                <div className='thumbnails'>
                    <img src={product.thumbnail} alt="" />
                    <p>{product.title}</p>
                    <p>{product.discountPercentage}%</p>
                    <p style={{fontWeight:"bold"}}>${product.discountedTotal.toFixed(2)}</p>
                </div>
            )
        })}
      </div>
      <h1>Total: ${singleCart.singleCart.total.toFixed(2)}</h1>
    </div>
  )
}

export default Cart
