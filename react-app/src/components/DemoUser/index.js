// Importing
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

// Initializing DemoUser component
const  DemoUser = () => {
    const [errors, setErrors] = useState([]);
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();

    const demo_user = {
        email: 'demo-user@demo.com', 
        password: 'password',
    };

    const data = await dispatch(login('demo-user@demo.com', 'password'));
    if (data) {
      setErrors(data);
    }
  };

  if (user) {
    return <Redirect to='/' />;
  }

    return(

        <form onSubmit={ onLogin }>
            <div className= 'form'>
                {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
                ))}
            </div>
            <button type='submit' className="demo-btn"> Demo User </button>
        </form>
    )
}

// Exporting
export default DemoUser;