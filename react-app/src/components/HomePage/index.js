// Imports
import "./HomePage.css";
import { useHistory } from "react-router-dom";
import DropDown from "../DropDown";
import { useEffect, useState } from "react";
import { getVenues } from '../../store/venue'
import { useSelector, useDispatch } from 'react-redux'
import Calendar from "../Calendar";

function HomePage({ setResults }) {
    const venues = useSelector(state => state?.venues)
    const venueArray = Object.values(venues)
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getVenues())
    }, [dispatch])

    let venueForSearchBar = []
    const handleClick = () => {
        const venueFilter = venueArray.filter((venue) => venue.name.toLowerCase().includes(search.toLowerCase()))
        venueForSearchBar.push(venueFilter)
        setResults(venueForSearchBar)
        setSearch('')
        return history.push("/search")
    }

    return (
        <>
            <div className='splash-container'>
                <h1 id='slogan'>A date for any occasion</h1>
                <div className='splash-booking-container'>
                    <Calendar />
                    <DropDown />
                    <form onSubmit={handleClick} className='splash-booking-form' >
                        <input
                            name='search'
                            id='splash-search'
                            type='text'
                            placeholder='Place or Date Type'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            required
                        ></input>
                        <button className='splash-button'>Let's go</button>
                    </form>
                </div>
            </div>
            <div className='splash-venues-container'>
                {venueArray.map(venue => (
                    <a href={`/venues/${venue.id}`} id={venue.id}>
                        <div className='splash-venue-card' >
                            <img src={venue.image_url} className='splash-venue-pix' alt='{venue.name}' />
                            <div className='splash-venue-description'>
                                <div className='splash-venue-title'><h3>{venue.name}</h3></div>
                                <div className='splash-venue-location'>{venue.city} {venue.state}</div>
                                <div className='splash-venue-hours'>Hours: {venue.operation_hours}</div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </>

    );
}

export default HomePage
