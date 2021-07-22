// Imports
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import DemoUser from '../DemoUser'
import LoginFormModal from '../LoginFormModal';
import "./NavBar.css"


const NavBar = ({ loaded }) => {
  const user = useSelector(state => state.session.user);

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <div className='navbar-button'>
          <NavLink to={`/users/${user.id}`} exact={true} activeClassName='active'>
            <AccountCircleIcon color='primary'></AccountCircleIcon>
          </NavLink>
        </div>
        <div className='navbar-button'>
          {/* <NavLink to='/users' exact={true} activeClassName='active'> */}
          <CalendarTodayRoundedIcon></CalendarTodayRoundedIcon>
          {/* </NavLink> */}
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
      <div className='home-container' >
        {/* <NavLink className='navbar__logo' exact to="/"> */}
          
          <a href='/'>
            <img src='/logo.png'  alt="homepageLogo"></img>
          </a>
        {/* </NavLink> */}
      </div>
      <div className='session-container' >
        {loaded && sessionLinks}
      </div>
    </div>
  );
}

export default NavBar;
