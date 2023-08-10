import React from 'react';
import "../components/styles/Header.css"
import Logo from "../components/assets/logo.jpg"
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <header className="header-container">
        <NavLink to = "/">
            {<img className="logo-img" src = { Logo } alt = "Little Lemon logo" />}
        </NavLink>
        <nav>
            <ul className="nav-menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="#">About</NavLink></li>
                <li><NavLink to="#">Menu</NavLink></li>
                <li><NavLink to="/reservations">Reservations</NavLink></li>
                <li><NavLink to="#">Order Online</NavLink></li>
            </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
