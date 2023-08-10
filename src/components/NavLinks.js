import React from 'react';
import { NavLink } from 'react-router-dom';


const NavLinks = (props) => {
  return (
            <ul className="menu-items">
          <li><NavLink to="/" className="active-links">Home</NavLink></li>
          <li> <NavLink to="#">About</NavLink></li>
          <li><NavLink to="#">Menu</NavLink></li>
          <li><NavLink to="/reservations" className="active-links">Reservations</NavLink></li>
          <li> <NavLink to="#">Order Online</NavLink></li>
        </ul>
  )
}

export default NavLinks