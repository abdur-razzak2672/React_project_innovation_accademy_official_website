import React from 'react'
import image1 from './images/logo.png'

const navbar = () => {
    return (
         <nav className = "navbar"> 
            <div className =  "logo">
                <img src = {image1} alt = ""></img>
            </div>
            <ul className = "menu">
                <li><a href = "#home">Home</a></li>
                <li><a href = "#courses">Curriculum</a></li>
                <li><a href = "#map">Services</a></li>
                <li><a href = "#about">About Us</a></li>
                <li><a href = "#contact">Contact Us</a></li>

            </ul>
            <div className="menu-btn">
                <a href="#none" className="active">      
                </a>
                <a href="#none" className="icon" onclick="myFunction()">
                <i className="fa fa-bars"></i>
                </a>
            </div>  
        </nav>
    )
}

export default navbar;
