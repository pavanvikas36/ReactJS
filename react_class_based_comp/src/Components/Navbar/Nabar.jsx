import React from "react";
import './Nabar.css'
import { Link } from "react-router-dom";

class Navbar extends React.Component{
    render(){
        return (
            <>
             <div id="nav">
                <div className="nav_right">
                    IT Solutions
                </div>
                <div className="nav_left">
                    <Link to='/home'><span>Home</span></Link>
                    <span>About</span>
                    <span>Contact</span>
                    <Link to='/products'><span>Products</span></Link>
                </div>
             </div>
            </>
        )
    }
}
export default Navbar