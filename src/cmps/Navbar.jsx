import React from "react";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    return (
        <div className='flex space-between navbar'>
        <div><NavLink className="navlink-btn" to="/"><img src="img/logo.png" alt='' className="logo-img"></img>
         <span> 
            Loopix 
         </span>
        </NavLink></div>
        </div>
    )
}