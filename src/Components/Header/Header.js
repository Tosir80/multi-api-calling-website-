import React from 'react';
import './Header.css'
 import { Link, NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <Link to="/">NewsDB</Link>
            </div>
            <nav>
               <NavLink to="/">Home</NavLink> 
               <NavLink to="/contact">Contact</NavLink> 
               <NavLink to="/home/nested">Nested</NavLink> 
               <NavLink to="/food">Food</NavLink> 
            </nav>
        </div>
    );
};

export default Header;