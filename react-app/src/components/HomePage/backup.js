// Imports
import "./HomePage.css";
import { useHistory } from "react-router-dom";
import DropDown from "../DropDown";
// import Carousel from 'react-material-ui-carousel'

import { useEffect, useState } from "react";
import { getVenues } from '../../store/venue'
import { useSelector, useDispatch } from 'react-redux'
import Calendar from "../Calendar";

function HomePage({ setResults }) {
    const venues = useSelector(state => state.venues)
    const venueArray = Object.values(venues)
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getVenues())
    }, [dispatch])

    let venueForSearchBar = []
    // const handleClick = () => {
    //     const venueFilter = venueArray.filter((venue) => venue.name.toLowerCase().includes(search.toLowerCase()))
    //     venueForSearchBar.push(venueFilter)
    //     setResults(venueForSearchBar)
    //     setSearch('')
    //     return history.push("/search")
    // }

    return (
        <>
            <div className='Splash-container'>
                <h1 id='date'>A date for any occasion</h1>
                <div className='booking-container'>
                    <Calendar id='calender' />
                    <DropDown />
                    <button>Let's go </button>
                </div>
            </div>
            {/* <div>
                <Carousel>
                    {venues?.map(venue => (
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
            </div> */}
        </>
    );
}

export default HomePage
