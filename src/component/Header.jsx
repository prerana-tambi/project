import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.jpeg'


const Header = () => {
  return (
    <div>
        <div class="navbar">
        <div><img src={logo} alt="AlloAyu" id="logo"/></div>
        <div class="menubar">
            <Link to ='/home'class="heading">Home</Link>
            <Link to ='/about'class="heading">About</Link>
            <Link to ='/service'class="heading">Service</Link>
            <Link to ='/contact'class="heading">Contact us</Link>
            
        </div>
    </div>

    
    </div>
  )
}

export default Header