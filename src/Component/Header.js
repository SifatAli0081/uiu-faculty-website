import React from 'react'
import {NavLink} from "react-router-dom";
import"./header.css"
 
const Header = () => {
  return (
    <>
      <header>
    <a href="/">Logo</a>
    <nav className='nav-links'>
    <ul >
        <li>
        <NavLink  to={"/"} > Home</NavLink>
        </li>
        <li> 
        <NavLink to={"/faculty"}> Faculty</NavLink>
        </li>
        <li> 
        <NavLink to={"/team"}> Team </NavLink>
        </li>
        <li>
        <NavLink to="/contact"> Contact</NavLink>
        </li>
    </ul>
    </nav>
    </header>  
    </>
  )
}

export default Header