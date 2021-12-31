import React from 'react'
import NavMenu from './NavMenu';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <NavMenu />
        
            <div className="sign-in">
                <NavLink to="/login">
                    Login
                </NavLink>
                
                <NavLink to="/register">
                    Register
                </NavLink>
            </div>
        </nav>
    )
}

export default Nav
