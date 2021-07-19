import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Map from "../GoogleMap"
import { getVenues } from '../../store/venue'
import { useSelector, useDispatch } from 'react-redux'


function Venue() {
    const { id } = useParams()
    const venues = useSelector(state => state.venues)
    const venue = Object.values(venues)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVenues())
        console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%', id)
    }, [dispatch])


    return (
        <div>
            {Object.values(venues).map(venue => {
                <div>
                    {/* <button onClick={() => console.log('**************************', venue)}>Venues</button> */}
                    {/* <Map venues={venue} ></Map> */}

                </div>

            })}
            <button onClick={() => console.log('**************************', venue, venues)}>Venues</button>

            {/* <div>
            </div> */}
        </div>
    )

}

export default Venue