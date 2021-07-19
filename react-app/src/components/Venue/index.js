import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Map from "../GoogleMap"
import { getVenues } from '../../store/venue'
import { useSelector, useDispatch } from 'react-redux'


function Venue() {
    const { id } = useParams()
    const venues = useSelector(state => state.venues)
    const venue = Object.values(venues)
    const val = Object.keys(venue)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVenues())
        console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%', id)
    }, [dispatch])


    return (
        <div>
            {venue.map(value => {
                <div>
                    <button onClick={() => console.log('**************************', value)}>Venues</button>
             

                </div>

            })}
            <button onClick={() => console.log('This is the value of const venues = useSelector(state => state.venues)', venues)}>Venues</button>
            <button onClick={() => console.log('This is the value of const venues = useSelector(state => state.venues)', venue)}>Venue</button> 
            <button onClick={() => console.log('This is the value of const venues = useSelector(state => state.venues)', val)}>Val</button> 
            {/* <Map venues={venues} ></Map>

            {/* <div>
            </div> */}
        </div>
    )

}

export default Venue