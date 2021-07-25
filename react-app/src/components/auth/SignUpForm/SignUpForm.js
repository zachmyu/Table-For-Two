import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { signUp } from '../../../store/session';
// import DemoUser from '../../DemoUser'
import { Button } from '@material-ui/core'

const SignUpForm = () => {
    const history = useHistory();
    // const [image, setImage] = useState(null)
    // const [imageLoading, setImageLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [profile_image_url, setProfileImg] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();


    const onSignUp = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            const data = await dispatch(signUp(first_name, last_name, username, email, password, profile_image_url));
            console.log('Aqui esta data en signUpForm', data)
            
            if (data.errors) {
                setErrors(data.errors)
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
    console.log("{}{}{}{}{}{}{}{}{SASA{}{S}{A}A{SA}S{A", errors)
    return (
        <form onSubmit={onSignUp} className='p-10'>
            <ul>
                {errors?.map((error, ind) => <li key={ind}>{error}</li>)}
            </ul>
            <h1>Welcome to Table For Two!</h1>
            <div>
                <label>First Name</label>
                <input
                    name='first_name'
                    type='text'
                    placeholder='First Name *'
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                ></input>
            </div>
            <div>
                <label>Last Name</label>
                <input
                    name='last_name'
                    type='text'
                    placeholder='Last Name *'
                    value={last_name}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                ></input>
            </div>
            <div>
                <label>User Name</label>
                <input
                    name='username'
                    type='text'
                    placeholder='Username *'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                ></input>
            </div>
            <div>
                <label>Email</label>
                <input
                    name='email'
                    type='text'
                    placeholder='Email *'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                ></input>
            </div>
            <div>
                <input
                    type="file"
                    // accept="image/*"
                    onChange={updateImage}
                />
                <label>Password</label>
                <input
                    name='password'
                    type='password'
                    placeholder='Enter Password *'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                ></input>
            </div>
            <div>
                <label>Repeat Password</label>
                <input
                    name='repeat_password'
                    type='password'
                    placeholder='Re-enter Password *'
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    required
                ></input>
            </div>
            
            <div className="login__button--container">
                <button className="button2" type="submit">Submit</button>
                {/* <DemoUser /> */}
            </div>
            {/* <button type="submit">Submit</button> */}
            {/* <Button color="primary" type="submit" variant="contained">Submit</Button> */}
            {/* {(imageLoading) && <p>Loading...</p>} */}
            {/* <button type='submit'>Sign Up</button> */}
        </form>
    );
};

export default SignUpForm;
