import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { signUp } from '../../../store/session';
import './SignUpForm.css';

const SignUpForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [profile_image_url, setProfileImg] = useState('');
    const user = useSelector(state => state.session.user);

    const onSignUp = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            const data = await dispatch(signUp(first_name, last_name, username, email, password, profile_image_url));

            if (data?.errors) {
                setErrors(data?.errors)
            }
        }
    };

    const updateImage = (e) => {
        const file = e.target.files[0];
        if (file) setProfileImg(file)
    }

    if (user) {
        return history.push('/');
    }

    return (
        <form className='signUpForm-container' onSubmit={onSignUp}>
            <ul className="form-errors">
                {errors?.map((error, ind) => <li key={ind}>{error}</li>)}
            </ul>
            <h2>Welcome to Table For Two!</h2>
            <div className="signUpForm--element--container">
                <input
                    className="signUpForm--element"
                    name='first_name'
                    type='text'
                    placeholder='First Name *'
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                ></input>
            </div>
            <div className="signUpForm--element--container">
                <input
                    className="signUpForm--element"
                    name='last_name'
                    type='text'
                    placeholder='Last Name *'
                    value={last_name}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                ></input>
            </div>
            <div className="signUpForm--element--container">
                <input
                    className="signUpForm--element"
                    name='username'
                    type='text'
                    placeholder='Username *'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                ></input>
            </div>
            <div className="signUpForm--element--container">
                <input
                    className="signUpForm--element"
                    name='email'
                    type='text'
                    placeholder='Email *'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                ></input>
            </div>
            <div className="signUpForm--element--container">
                <input
                    className="signUpForm--element"
                    name='password'
                    type='password'
                    placeholder='Enter Password *'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                ></input>
            </div>
            <div className="signUpForm--element--container">
                <input
                    className="signUpForm--element"
                    name='repeat_password'
                    type='password'
                    placeholder='Re-enter Password *'
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    required
                ></input>
            </div>
            <div className="profImgContainer--element">
                <h4 id='profPicTitle'>Upload a Profile Picture</h4>
                <input
                    className="profImgUpload--element"
                    type="file"
                    onChange={updateImage}
                />
            </div>
            <div className="login__button--container">
                <button className="button2" type="submit">Submit</button>
            </div>
        </form>
    );
};

export default SignUpForm;
