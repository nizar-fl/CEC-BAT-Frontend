import React from 'react'
import companylogo from "../../assests/images/cecLogo.jpg"
import "./signin.css"

export default function Signin() {
  return (
    <div className='signincontainter'>
        <div className='biglogo'>
            <img className='biglogoimg' src={companylogo} alt="ceclogo" />
        </div>
        <div className="logincontainer">
            <p className="logintitle">Login</p>
            <div className='formcontainer'>
                <form className="loginform">
                    <input className='emailinput' type="email" name='email'  placeholder="Email" required/>
                    <input className='passwordinput' type="password" name='password'  placeholder="Password" required/>
                    <button className='loginbutton'>login</button>
                </form>
            </div>
            
            <p className='forgetpassword'> forgetten your password ? </p>
            
        </div>

    </div>
  )
}
