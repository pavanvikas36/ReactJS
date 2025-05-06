import React from 'react'
import './Carts.css'
import Cart from '../Cart/Cart'

const Carts = (carts) => {
    // console.log(carts)
    const c = carts.cartsData
    // console.log(c)
  return (
    <div id='carts'>
      {/* {
        c.map((cart, index)=>{
            return (
                <div key={index}>
                    <h1>{cart.discountedTotal}</h1>
                    <h1>{cart.products.thumbnail}</h1>
                </div>
            )
        })
      } */}
      {
        c.map((cards)=>{
            return (
                <>
                    <Cart singleCart = {cards}/>
                </>
            )
        })
      }
    </div>
  )
}

export default Carts
