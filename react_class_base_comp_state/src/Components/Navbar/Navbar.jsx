import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <div id="navbar" className="flex justify-between items-center p-5 bg-teal-600 text-white shadow-md">
                <div className="text-lg font-semibold cursor-pointer hover:text-yellow-300">
                    Pavan Count & Color
                </div>
                <div className="flex space-x-6 text-sm md:text-base cursor-pointer">
                    <Link to='/home'><span className="hover:text-yellow-300">Home</span></Link>
                    <Link to='/count'><span className="hover:text-yellow-300">Count</span></Link>
                    <Link to='/color'><span className="hover:text-yellow-300">Color</span></Link>
                </div>
            </div>
        )
    }
}

export default Navbar