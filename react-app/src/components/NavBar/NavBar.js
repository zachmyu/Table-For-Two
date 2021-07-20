
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import "./NavBar.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import { Button } from "@material-ui/core"

const NavBar = () => {
  return (
    <nav>
      <ul>
        <div className='home-container'>
        <li className='navbar-button'>
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
            <AccountCircleIcon color= 'primary'></AccountCircleIcon>
          </NavLink>
        </li>
        <li className='navbar-button'>
          <LogoutButton />
          {/* <CalendarTodayRoundedIcon></CalendarTodayRoundedIcon> */}
          {/* <Button color= 'primary' variant='contained'> Poooop </Button> */}
        </li>
      </div>
      </ul>
    </nav>
  );
}

export default NavBar;