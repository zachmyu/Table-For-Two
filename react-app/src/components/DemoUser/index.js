// Importing
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../store/session';

// Initializing DemoUser component
const DemoUser = () => {
	const [errors, setErrors] = useState([]);
	const user = useSelector(state => state.session.user);
	const dispatch = useDispatch();
	const history = useHistory()

	const onLogin = async (e) => {
		e.preventDefault();

		const data = await dispatch(login('demo-user@demodata.com', 'table42User!'));
		if (data) setErrors(data);
	};

	if (user) history.push('/');

	return (
		<form onSubmit={onLogin}>
			<div className='form'>
				{errors.map((error, ind) => (
					<div key={ind}>{error}</div>
				))}
			</div>
			<button type='submit' className="button3"> Demo User </button>
		</form>
	)
}

// Exporting
export default DemoUser;
