import React from 'react'
import './Login.css'
import Linkedin from '../components/linkedin2.svg'

export default function Login() {
    const loginToApp = () => {

    }

    const register = () =>{

    }
    return (
        <div className="login">
            <img src={Linkedin} alt=""/>

            <form>
                <input type="text" placeholder="Full Name (required while registering)"  required/>
                <input type="text" placeholder="Profile pic URL (optional)"  required/>
                <input type="text" placeholder="Email"  required/>
                <input type="password" placeholder="Password"  required/>
                <button onClick={loginToApp} type="submit">Sign In</button>
            </form>
            <p>
                Not a member? 
                <span onClick={register} className="login__register">Register Now.</span>
            </p>
        </div>
    )
}
