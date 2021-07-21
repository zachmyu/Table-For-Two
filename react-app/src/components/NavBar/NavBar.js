// Imports
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import "./NavBar.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import { Button } from "@material-ui/core"
// import * as SessionActions from './SessionActions'


const NavBar = ({ loaded }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  console.log('*****************************', sessionUser)

  // const logout = (e) => {
  //   e.preventDefault();
  //   dispatch(logout());
  //   history.push('/');
  // };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <li className='navbar-button'>
          <NavLink to='/users' exact={true} activeClassName='active'>
            <AccountCircleIcon color='primary'></AccountCircleIcon>
          </NavLink>
        </li>
        <li className='navbar-button'>
          <NavLink to='/users' exact={true} activeClassName='active'>
            <CalendarTodayRoundedIcon></CalendarTodayRoundedIcon>
          </NavLink>
        </li>
        <li className='navbar-button'>
          <LogoutButton />
          {/* <Button color= 'primary' variant='contained'> Poooop </Button> */}
        </li>
      </>
    );
  } else {
    sessionLinks = (
      <>
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
        {/* <li className='navbar-button'>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            DemoUser
          </NavLink>
        </li> */}
      </>
    );
  }

  return (
    <nav className='navbar__container'>
      <ul>
        <NavLink className='navbar__logo' exact to="/">
          <img src='/logo.png' className="homepageLogo" alt="homepageLogo"></img>
        </NavLink>
        <div className='home-container'>
          <li className='navbar-button'>
            {/* <NavLink to='/' exact={true} activeClassName='active'>
              TableForTwo
            </NavLink> */}
          </li>
        </div>
        <div className='session-container' >
          {loaded && sessionLinks}
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
