import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './LoginForm.css';

function LoginForm() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ email, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    const demoLogin = () => {
        setEmail('demo@mcdemoface.com');
        setPassword('password');
        sessionActions.login(email, password);
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <h1>Please Sign in </h1>
            <label className="form--element--container">
                Email
                <input
                    className="login--element"
                    type="text"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label className="login--element--container">
                Password
                <input
                    className="login--element"
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <div className="login__button--container">
                <button className="button2" type="submit">Log In</button>
                <button className="button1" onClick={() => demoLogin()}>Demo User</button>
            </div>
        </form>
    );
}

export default LoginForm;
