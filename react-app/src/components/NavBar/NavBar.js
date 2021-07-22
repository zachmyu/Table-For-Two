// Imports
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import DemoUser from '../DemoUser'
import LoginFormModal from '../auth/LoginForm';
import logo from './logo.png'
import { Button } from "@material-ui/core"
import User from "../User"
import "./NavBar.css"


const NavBar = ({ loaded }) => {
  const user = useSelector(state => state.session.user);

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <div className='navbar-button'>
          <NavLink to={`/users/${user.id}`} exact={true} activeClassName='active'>
            <AccountCircleIcon></AccountCircleIcon>
          </NavLink>
        </div>
        <div className='navbar-button'>

          <CalendarTodayRoundedIcon />

        </div>
        <div className='navbar-button'>
          <LogoutButton />
        </div>
        <div className='logout'>
          <LogoutButton />
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div className='navbar-button'>
          <LoginFormModal />
        </div>
        <div className='navbar-button'>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
          <div className='navbar-button'>
            <DemoUser></DemoUser>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className='navbar__container'>
      <NavLink className='navbar__logo' exact to="/">
        <img src={logo} className="homepageLogo" alt="homepageLogo"></img>
      </NavLink>
      <div className='session-container' >
        {loaded && sessionLinks}
      </div>
    </div>
  );
}

export default NavBar;