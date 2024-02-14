import React from 'react'
import './Nav.css'
import { useState, useEffect } from 'react';
import {Link} from 'react';

function Nav() {
  const[show, handleShow] = useState(false);
    

    const transitionNavBar = () => {
        if (window.scrollY>100){
            handleShow(true);
        }else{
            handleShow(false);
        } 
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return() => window.removeEventListener("scroll", transitionNavBar)
        
    }, [])
    //https://test2.melbournediwali.com.au/wp-content/uploads/2023/11/MD-Logo-Transparent.png
  return (
    <div className={`nav ${show}`}>
        <div className='nav__content'>
        <img 
        
        className='nav__logo'
        src="https://test2.melbournediwali.com.au/wp-content/uploads/2023/11/MD-Logo-Transparent.png" alt=""
        />

        <div className='nav__right'>
          <Link to={"/"}>
          <h2>Home</h2>
          </Link>
          <Link to={"/"}>
          <h2>About</h2>
          </Link>
          </div>
        
        </div>
        
      
    </div>
  )
}
export default Nav
