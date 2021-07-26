// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import DemoUser from '../DemoUser'
import LoginFormModal from '../auth/LoginForm';
import SignUpFormModal from '../auth/SignUpForm';
import logo from './logo.png'

import "./NavBar.css"


const NavBar = ({ loaded }) => {
	const user = useSelector(state => state.session.user);

	let sessionLinks;
	if (user) {
		sessionLinks = (
			<>
				<div className='navbar-button'>
					<NavLink to={`/users/${user.id}`} exact={true} activeClassName='active' className='navbar-button'>
						<AccountCircleIcon></AccountCircleIcon>
					</NavLink>
				</div>
				<div className='navbar-button'>
					<CalendarTodayRoundedIcon />
				</div>
				<div className='logout'>
					<LogoutButton />
				</div>
			</>
		);
	} else {
		sessionLinks = (
			<>
				<div className='navbar-button-container'>
					<LoginFormModal />
				</div>
				<div className='navbar-button-container'>
					<SignUpFormModal />
				</div>
				<div className='navbar-button-container'>
					<DemoUser />
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
