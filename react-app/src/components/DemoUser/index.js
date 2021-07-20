// Importing
import React from 'react';
import { login } from "../../store/session";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// Initializing DemoUser component
function DemoUser() {

    // Assigning hooks to variables
    const dispatch = useDispatch();
    const history = useHistory();

    // Creating async helper function to listen for click event
    const handleClick = async(e) => {
        // Preventing the page from reloading after the demo user button it clicked
        e.preventDefault();

        // Creating demouser object with the signin information
        // got this from the store login thing
        const DemoUser = {
            email: 'demo-user@demodata.com', 
            password: 'password',
        };

        // thunk that sends the new context back to the store
        await dispatch(login(DemoUser))
        // use history redirects to the signed in home page 
        history.push("/");
    }

    return(
        <div>
            <form onSubmit={ handleClick }>
                <button type='submit' className="demo-btn"> Demo User </button>
            </form>
        </div>
    )

}

// Exporting
export default DemoUser;