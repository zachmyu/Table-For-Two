
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav>
      <ul>
        <div className='home-container'>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            TableForTwo
          </NavLink>
        </li>
        </div>
        <div className= 'session-container' >
        <li className='navbar-button'>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li className='navbar-button'>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li className='navbar-button'>
          <NavLink to='/users' exact={true} activeClassName='active'>
            ProfilePage
          </NavLink>
        </li>
        <li className='navbar-button'>
          <LogoutButton />
        </li>
      </div>
      </ul>
    </nav>
  );
}

export default NavBar;