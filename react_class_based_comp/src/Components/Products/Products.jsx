import React from "react"
import Product from "../Product/Product"
import data from "./pData"
import './Products.css'

class Products extends React.Component{
    render(){
        console.log(this.props)
        console.log(data)
        return(
            <div id="products">
                {data.map((val, index)=>{
                    return(
                        <div key={index}>
                            <Product singleProduct={val}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Products