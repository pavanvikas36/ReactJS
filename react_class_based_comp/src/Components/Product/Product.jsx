import React from "react"
import './Product.css'

class Product extends React.Component{
    render(){
        return(
            <div id="product">
                <img src={this.props.singleProduct.image} alt="" />
                <h1>{this.props.singleProduct.title}</h1>
            </div>
        )
    }
}
export default Product