// Imports
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import "./NavBar.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import DemoUser from '../DemoUser'
import LoginFormModal from '../LoginFormModal';
import { Button } from "@material-ui/core"
import User from "../User"
// import * as SessionActions from './SessionActions'


const NavBar = ({ loaded }) => {
  // const dispatch = useDispatch();
  // const history = useHistory();
  const user = useSelector(state => state.session.user);
  // console.log('*****************************', sessionUser)

  // const logout = (e) => {
  //   e.preventDefault();
  //   dispatch(logout());
  //   history.push('/');
  // };

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <div className='navbar-button'>
          <NavLink to='/users/{sessionUser.id}' exact={true} activeClassName='active'>
            <AccountCircleIcon color='primary'></AccountCircleIcon>
          </NavLink>
        </div>
        <div className='navbar-button'>
          {/* <NavLink to='/users' exact={true} activeClassName='active'> */}
          <CalendarTodayRoundedIcon></CalendarTodayRoundedIcon>
          {/* </NavLink> */}
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
        <img src='/logo.png' className="homepageLogo" alt="homepageLogo"></img>
      </NavLink>
      <div className='session-container' >
        {loaded && sessionLinks}
      </div>
    </div>
  );
}

export default NavBar;
