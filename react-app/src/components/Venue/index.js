import { useEffect } from "react";
import { NavLink, useParams, useHistory } from "react-router-dom";
import Map from "../GoogleMap"
import {Marker } from "@react-google-maps/api";
import { getVenues } from '../../store/venue'
import { useSelector, useDispatch } from 'react-redux'


function Venue() {
    const { id } = useParams()
    const venues = useSelector(state => state.venues.venues)
    // const venue = Object.values(venues)
    // const val = Object.keys(venue)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getVenues())
        // console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%', id)
    }, [dispatch])
    console.log('THIS IS THE VALUE OF VENUES', venues)

    const handleClick = (id) => {
        history.push(`/venues/${id}`)
    }

    return (
        <div>
            {console.log('Before mapping')}
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
                    <Map venue={venue} />

                </div>

                ))}
            {/* <button onClick={() => console.log('This is the value of const venues = useSelector(state => state.venues)', venues)}>Venues</button>
            <button onClick={() => console.log('This is the value of const venues = useSelector(state => state.venues)', venue)}>Venue</button> 
            <button onClick={() => console.log('This is the value of const venues = useSelector(state => state.venues)', val)}>Val</button>  */}
            {/* <Map venues={venues} ></Map>

            {/* <div>
            </div> */}
        </div>
    )

}

export default Venue
