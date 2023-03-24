import React , {useState} from 'react'
import { json } from 'react-router-dom'
import companylogo from "../../assests/images/cecLogo.jpg"
import "./signin.css"
import { Link, useNavigate } from 'react-router-dom'
import CryptoJS from 'crypto-js';


export default function Signin() {
    const navigate = useNavigate();
    const[userData,setUserData]=useState({ 
        email:"",
        password:"",
        })
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
        console.log(userData)
    }
    
    const handleSubmit = async(event) => {
        const secretKey = 'hellodarknessmyoldfriend';
        const secondsecretKey = "Ahmed200516"
        event.preventDefault(); // Prevent the page from reloading
        const response = await fetch("https://backendcec.onrender.com/account/login",{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({email:userData.email, password:userData.password})
        })
        const jsonData = await response.json();
        if (response.status >= 400 && response.status <= 404){
            window.alert("the password or the email is wrong");
        }
        else{
            const encryptedUserData = CryptoJS.AES.encrypt(JSON.stringify(jsonData.user), secretKey).toString();
            localStorage.setItem('userData', encryptedUserData);
            const encryptedtoken = CryptoJS.AES.encrypt(JSON.stringify(jsonData.token), secondsecretKey).toString();
            localStorage.setItem('token', encryptedtoken);
            navigate('/main')
            
        }
        console.log('Form submitted:');
      }


    
  return (
    <div className='signincontainter'>
        <div className='biglogo'>
            <img className='biglogoimg' src={companylogo} alt="ceclogo" />
        </div>
        <div className="logincontainer">
            <p className="logintitle">Login</p>
            <div className='formcontainer'>
                <form onSubmit={handleSubmit} className="loginform">
                    <input className='emailinput' onChange={handleChange}  autoComplete="off" type="email" name='email'  placeholder="Email" required/>
                    <input className='passwordinput'  onChange={handleChange}  autoComplete="off" type="password" name='password'  placeholder="Password" required/>
                    <button className='loginbutton' >login</button>
                </form>
            </div>
            
            <p className='forgetpassword'> forgetten your password ? </p>
            
        </div>

    </div>
  )
}
