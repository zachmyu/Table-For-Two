// Imports
// import DemoUser from "../DemoUser";
import "./SplashPage.css";
import Calendar from "../Calendar";
import DropDown from "../DropDown";


// Splash function
function Splash(){

    return (
        <>
        <div className='Splash-container'>
            
            <h1 id= 'date'>A date for any occasion</h1>
            <div className='booking-container'>
                {/* date and time  */}
                <Calendar/>
                {/* people */}
                <DropDown/>
                {/* submit button */}
                <button>Let's go </button>
            </div>
            {/* <DemoUser></DemoUser> */}
        </div>
            <h2>Netflix and Chill</h2>
            {/* Add in carasoul for venues */}
        </>
    );
}

export default Splash