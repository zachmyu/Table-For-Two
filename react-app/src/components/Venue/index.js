import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Map from "../GoogleMap"
import { getVenues } from '../../store/venue'
import { useSelector, useDispatch } from 'react-redux'


function Venue() {
    const { id } = useParams()
    const venues = useSelector(state => state.venues.venues)
    // const venue = Object.values(venues)
    // const val = Object.keys(venue)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVenues())
        // console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%', id)
    }, [dispatch])
    console.log('THIS IS THE VALUE OF VENUES', venues)

    return (
        <div>
            {console.log('Before mapping')}
            {venues?.map(value => (
                // { console.log('After mapping') }

                <div className='testing'>
                    <button onClick={() => console.log('**************************', value.id)}>Venues</button>
                    {/* <h1>
                        {value.id}
                    </h1> */}

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