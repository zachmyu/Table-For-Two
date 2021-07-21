// // Importing
// import React from 'react';
// import { login } from "../../store/session";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";

// // Initializing DemoUser component
// function DemoUser() {

//     // Assigning hooks to variables
//     const dispatch = useDispatch();
//     const history = useHistory();

//     // Creating async helper function to listen for click event
//     const handleClick = async(e) => {
//         // Preventing the page from reloading after the demo user button it clicked
//         e.preventDefault();

//         // Creating demouser object with the signin information
//         // got this from the store login thing
//         const DemoUser = {
//             email: 'demo-user@demodata.com', 
//             password: 'table42User!',
//         };

//         // thunk that sends the new context back to the store
//         await dispatch(login(DemoUser))
//         // use history redirects to the signed in home page 
//         // history.push("/");
//     }

//     return(
//         <div>
//             <form onSubmit={ handleClick }>
//                 <button type='submit' className="demo-btn"> Demo User </button>
//             </form>
//         </div>
//     )

// }

// // Exporting
// export default DemoUser;




// Importing
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

// Initializing DemoUser component
const  DemoUser = () => {
    const [errors, setErrors] = useState([]);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
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

//   const updateEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const updatePassword = (e) => {
//     setPassword(e.target.value);
//   };

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