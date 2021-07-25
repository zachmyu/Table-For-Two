import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../../store/session';
import './LoginForm.css';

function LoginForm() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login(email, password)).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    const demoLogin = () => {
        setEmail('demo-user@demodata.com');
        setPassword('table42User!');
        return dispatch(sessionActions.login(email, password))
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <ul className="form-errors">
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <h2>Please Sign in </h2>
            <hr />
            <div className="login--element--container">
                <input
                    className="login--element"
                    type="text"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="login--element--container">
                <input
                    className="login--element"
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="login__button--container">
                <button className="button2" type="submit">Log In</button>
                <button className="button1" onClick={() => demoLogin()}>Demo User</button>
            </div>
        </form>
    );
}

export default LoginForm;
