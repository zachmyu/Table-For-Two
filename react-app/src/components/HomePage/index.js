// Imports
import DemoUser from "../DemoUser";
import "./HomePage.css";
// import Calendar from "../Calendar";
import DropDown from "../DropDown";
import Carousel from 'react-material-ui-carousel'


import { useEffect } from "react";
// import { NavLink, useParams, useHistory } from "react-router-dom";
// import Map from "../Venue/GoogleMap"
// import {Marker } from "@react-google-maps/api";
import { getVenues } from '../../store/venue'
import { useSelector, useDispatch } from 'react-redux'
import Calendar from "../Calendar";

function HomePage(){
    // const { id } = useParams()
    const venues = useSelector(state => state.venues.venues)
    // const venue = Object.values(venues)
    // const val = Object.keys(venue)
    const dispatch = useDispatch()
    // const history = useHistory()

    useEffect(() => {
        dispatch(getVenues())
        // console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%', id)
    }, [dispatch])
    console.log('THIS IS THE VALUE OF VENUES', venues)

    // const handleClick = (id) => {
    //     history.push(`/venues/${id}`)
    // }

    return (
        <>
        <div className='Splash-container'>
            <h1 id= 'date'>A date for any occasion</h1>
            <div className='booking-container'>
                {/* <DemoUser></DemoUser> */}
                <Calendar id='calender'/>
                <DropDown/>
                <button>Let's go </button>
            </div>

            
        </div>
        <div>
            <Carousel>
                {venues?.map(venue => (
                    // <button onClick={() => console.log("poop", venue)}>pooooooooooooooooooop</button>
                    <div>
                        <a href={`/venues/${venue.id}`}>
                            <img src={venue.image_url} style={{width: '20%', height: '20%'}}></img>
                        </a>
                    </div>
                ))}
            </Carousel>
        </div>
            {/* <h2>Netflix and Chill</h2>
            {venues?.map(venue => (
                // { console.log('After mapping') }
                <div className='testing'>
                    <button onClick={() => history.push(`/venues/${venue.id}`)}>Press</button>
                    {/* <button onClick={() => console.log('**************************', venue.id)}>Venues</button> */}
                    {/* <h1>
                        {value.id}
                    </h1> */}
                    {/* <Map id={venue.id}>
                        <Marker key={venue.id} position={{
                            lat: venue.latitude,
                            lng: venue.longitude
                        }}
                        onClick={handleClick(venue.id)}
                        >

                        </Marker>
                    </Map> */}
                    {/* <Map venue={venue} />

                </div>

            ))}  */}
        </>
    );
}

export default HomePage

// import React from 'react';
// import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@material-ui/core'

// function HomePage(props)
// {
//     var items = [
//         {
//             name: "Random Name #1",
//             description: "Probably the most random thing you have ever seen!"
//         },
//         {
//             name: "Random Name #2",
//             description: "Hello World!"
//         }
//     ]

//     return (
//         <Carousel>
//             {
//                 items.map( (item, i) => <Item key={i} item={item} /> )
//             }
//         </Carousel>
//     )
// }

// function Item(props)
// {
//     return (
//         <Paper>
//             <h2>{props.item.name}</h2>
//             <p>{props.item.description}</p>

//             <Button className="CheckButton">
//                 Check it out!
//             </Button>
//         </Paper>
//     )
// }

// export default HomePage