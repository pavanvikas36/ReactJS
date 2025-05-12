import React, { Component } from 'react'
import './SignupLogin.css'

export default class SignupLogin extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedin: true
        }
    }
    updateStatus = ()=>{
        this.setState({isLoggedin: !this.state.isLoggedin})
    }
  render() {
    return (
      <div id='container'>
        {this.state.isLoggedin ? 
        <div>
            <form action="" id='loginForm'>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <button>Login</button>
            </form>
        </div> : 
        <div>
            <form action="" id='signupForm'>
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input type="password" placeholder='Conform Pssword'/>
                <button>Sign Up</button>
            </form>
        </div>
        }
        <button onClick={this.updateStatus}>{this.state.isLoggedin ? "Switch To Signup" : "Switch To Login"}</button>
      </div>
    )
  }
}
