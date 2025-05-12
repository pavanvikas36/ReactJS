import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <div id="navbar" className="flex justify-between items-center p-5 bg-teal-600 text-white shadow-md">
                <div className="text-lg font-semibold cursor-pointer hover:text-black-600">
                    Pavan Vikas Nayak
                </div>
                <div className="flex space-x-6 text-sm md:text-base cursor-pointer">
                    <Link to='/count'><span className="inline-block px-4 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-300 hover:text-black transition-colors duration-300">Count</span></Link>
                    <Link to='/color'><span className="inline-block px-4 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-300 hover:text-black transition-colors duration-300">Color</span></Link>
                    <Link to='/randomcolor'><span className="inline-block px-4 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-300 hover:text-black transition-colors duration-300">Random Color</span></Link>
                    <Link to='/randomquote'><span className="inline-block px-4 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-300 hover:text-black transition-colors duration-300">English Quote</span></Link>
                    <Link to='/darklight'><span className="inline-block px-4 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-300 hover:text-black transition-colors duration-300">Dark And Light</span></Link>
                    <Link to='/signuplogin'><span className="inline-block px-4 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-300 hover:text-black transition-colors duration-300">Signup & Login</span></Link>
                </div>
            </div>
        )
    }
}

export default Navbar