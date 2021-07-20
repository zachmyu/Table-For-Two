import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getSingleVenue } from '../../store/venue'
import { getReviews } from '../../store/reviews'
import { NavLink, useParams, useHistory } from "react-router-dom";
import StarsIcon from '@material-ui/icons/Stars';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';import Typography from '@material-ui/core/Typography';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import NaturePeopleOutlinedIcon from '@material-ui/icons/NaturePeopleOutlined';
import Grid from '@material-ui/core/Grid';


function Venue() {
    const { id } = useParams()
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.session.user)
    // const venue = useSelector(state => state.venues.venue)
    const venues = useSelector(state => state.venues)
    const venue = venues[id]
    const reviews = useSelector(state => state.reviews)
    
    useEffect(() => {
        dispatch(getSingleVenue(Number(id)))
    }, [dispatch, id])

    useEffect(() => {
        dispatch(getReviews(Number(id)))
    }, [dispatch, id])
    console.log('THIS IS VENUE???????', venue)
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&', reviews)
    
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
                <Grid item md={2}></Grid>
                <Grid item md={5}>
                    <StarsIcon style={{ marginTop: '10px', paddingRight: '10px' }} ></StarsIcon> 2
                    <ModeCommentOutlinedIcon style={{padding: '10px'}}></ModeCommentOutlinedIcon> 456 reviews
                    <LocalAtmOutlinedIcon style={{paddingRight: '10px' }}></LocalAtmOutlinedIcon> $30 under
                    <NaturePeopleOutlinedIcon></NaturePeopleOutlinedIcon> Adventurous
                </Grid>
                <Grid item md={3}>Reservation</Grid>
                <Grid item md={2}></Grid>
            </Grid>
        </div>
    )
}

export default Venue
