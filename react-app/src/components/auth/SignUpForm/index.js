import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../../store/session';
import { Button } from '@material-ui/core'

const SignUpForm = () => {
  const history = useHistory();
  // const [image, setImage] = useState(null)
  // const [imageLoading, setImageLoading] = useState(false);
  // const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [profileImg, setProfileImg] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();


  const onSignUp = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append('image', image)
    // setImageLoading(true)
    // const res = await fetch('/api/images', {
    //   method: "POST",
    //   body: formData,
    // });
    // if (res.ok) {
    //   // let profileImg = await res.json();
    //   setImageLoading(false);
    //   // history.push("/images");
    // }
    // else {
    //   setImageLoading(false);
    //   // a real app would probably use more advanced
    //   // error handling
    //   console.log("error");
    // }
    if (password === repeatPassword) {
      // let profileImg = await res.json();
      const data = await dispatch(signUp(firstName, lastName, username, email, password, profileImg,));
      // if (data) {
      //   setErrors(data)
      // }
    }
  };


  // const onSignUp = async (e) => {
  //   e.preventDefault();
  //   if (password === repeatPassword) {
  //   const formData = new FormData();
  //   formData.append('image', image)
  //   setImageLoading(true)
  //   const res = await fetch('/api/images', {
  //     method: "POST",
  //     body: formData,
  //   });
  //   if (res.ok) {
  //     let profileImg = await res.json();
  //     setImageLoading(false);
  //     // history.push("/images");
  //     const user = await dispatch(signUp(firstName, lastName, username, email, password, profileImg))
  //   }
  //   else {
  //     setImageLoading(false);
  //     // a real app would probably use more advanced
  //     // error handling
  //     console.log("error");
  //   }
  //     // const data = await dispatch(signUp(firstName, lastName, username, email, password, profileImg));
  //     // if (data) {
  //     //   setErrors(data)
  //     // }
  //   }
  // };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastname(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateImage = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImg(file)
  }

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp} className='p-10'>
      {/* <div>
        {errors?.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div> */}
      <div>
        <label>First Name</label>
        <input
          type='text'
          name='firstName'
          onChange={updateFirstName}
          value={firstName}
        ></input>
      </div>
      <div>
        <label>Last Name</label>
        <input
          type='text'
          name='firstName'
          onChange={updateLastName}
          value={lastName}
        ></input>
      </div>
      <div>
        <label>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={updateImage}
      />
      {/* <button type="submit">Submit</button> */}
      <Button color="primary" type="submit" variant="contained">Submit</Button>
      {/* {(imageLoading) && <p>Loading...</p>} */}
      {/* <button type='submit'>Sign Up</button> */}
    </form>
  );
};

export default SignUpForm;
