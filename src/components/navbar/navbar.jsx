import React, { useState } from 'react';
import "./navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import cecBatLogo from '../../assests/images/cecLogo.jpg'
import Moreoptions from './more';
import Accounttopnav from './account';



export default function Navtopbar() {
  return (
    <div className='navbar'>
      <div className="topnav">
        <div className="logo">
          <img className="imglogo" src={cecBatLogo} alt="cec bat + logo" />
        </div>
        <div className='accountandmore'>
          <Accounttopnav/>
          <div className="moreoptions">
            <Moreoptions placement="end" />
          </div>
        </div>
        
      </div>
      <div className="links">
          <a href="#">first Link</a>          
          <a href="#">second Link</a>
          <a href="#">third Link</a>
        </div> 
             
    </div>
  )
}
