import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getSingleVenue } from '../../store/venue'
import { NavLink, useParams, useHistory } from "react-router-dom";
import StarsIcon from '@material-ui/icons/Stars';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function Venue() {
    const { id } = useParams()
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.session.user)
    // const venue = useSelector(state => state.venues.venue)
    const venues = useSelector(state => state.venues)
    const venue = venues[id]
    
    useEffect(() => {
        dispatch(getSingleVenue(Number(id)))
    }, [dispatch, id])
    console.log('THIS IS VENUE???????', venue)
    
    return (
        <div>
            {/* <div className="venue--title"> */}
                {/* <h2>{venue?.name}</h2> */}
                {/* <button onClick={() => console.log('Value of Venuessss', venues[id])}>Click me</button>
                <button onClick={() => console.log('Single venue', venue)}>Click ME</button> */}
            {/* </div> */}
            <Typography variant="h5" component='h6' align="center">
                {venue?.name}
            </Typography>
            <hr></hr>
            <Grid container align="center">
                <Grid item md={6}>
                    <StarsIcon></StarsIcon> {}
                </Grid>
                <Grid item md={3}>Reservation</Grid>
            </Grid>
        </div>
    )
}

export default Venue
