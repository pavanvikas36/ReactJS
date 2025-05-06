import React from 'react'
import Product from '../Product/Product'
import './Products.css'

const Products = (prop) => {
    // console.log(prop.productsData, 'prop data')
    const d = prop.productsData
  return (
    <div className='productGrid'>
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

      {/* {d.filter((x)=>{
        if(x.category=== "beauty"){
            return <Beauty b_SibgleData={x}/>
        }else if(x.category === "fragances"){
            return <Fragances f_SibgleData={x}/>

        }else{
            return <Product />
        }
      })} */}
    </div>
  )
}

export default Products
