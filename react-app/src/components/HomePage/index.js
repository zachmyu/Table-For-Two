// Imports
// import DemoUser from "../DemoUser";
import "./HomePage.css";
// import Calendar from "../Calendar";
import { NavLink, useHistory } from "react-router-dom";

import DropDown from "../DropDown";
import Carousel from 'react-material-ui-carousel'


import { useEffect, useState } from "react";
// import { NavLink, useParams, useHistory } from "react-router-dom";
// import Map from "../Venue/GoogleMap"
// import {Marker } from "@react-google-maps/api";
import { getVenues } from '../../store/venue'
import { useSelector, useDispatch } from 'react-redux'
import Calendar from "../Calendar";

function HomePage({ setResults }) {
    // const { id } = useParams()
    const venues = useSelector(state => state.venues)
    const venueArray = Object.values(venues)
    // const venue = Object.values(venues)
    // const val = Object.keys(venue)
    const [search, setSearch] = useState('')
    let [value, setValue] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()
    const [data, setData] = useState([]);


    useEffect(() => {
        dispatch(getVenues())
        // console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%', id)
        // setValue(venueArray)
    }, [dispatch])
    // // console.log('THIS IS THE VALUE OF VENUES', venues)
    console.log("PLS PRINT", venueArray)
    // let
    // // const handleClick = (id) => {
    // //     history.push(`/venues/${id}`)
    // })
    let venueForSearchBar = []
    const handleClick = () => {
        const venueFilter = venueArray.filter((venue) => venue.name.toLowerCase().includes(search.toLowerCase()))
        venueForSearchBar.push(venueFilter)
        setResults(venueForSearchBar)
        setSearch('')
        console.log('from handleclick', venueForSearchBar)
        // console.log('from result', result)
        return history.push("/search")
    }

    return (
        <>
            <div className='Splash-container'>
                <h1 id='date'>A date for any occasion</h1>
                <div className='booking-container'>
                    {/* <DemoUser></DemoUser> */}
                    <Calendar id='calender' />
                    <DropDown />
                    <button>Let's go </button>
                </div>
            </div>
            <div>
                <Carousel>
                    {venues?.map(venue => (
                        // <button onClick={() => console.log("poop", venue)}>pooooooooooooooooooop</button>
                        <div>
                            <a href={`/venues/${venue.id}`}>
                                <img src={venue.image_url} style={{ width: '20%', height: '20%' }}></img>
                            </a>
                        </div>
                    ))}
                </Carousel>
                <input type='text' onChange={(e) => setSearch(e.target.value)} onKeyUp={(e) => {
                    if (e.key === "Enter") {
                        return handleClick()
                    }
                }}></input>
                <button onClick={() => console.log('venues', venueForSearchBar)}>CLICKFORSEARCH</button>
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
