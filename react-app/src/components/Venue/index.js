import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getSingleVenue } from '../../store/venue'
// import { getReviews } from '../../store/reviews'
import { NavLink, useParams, useHistory } from "react-router-dom";
import StarsIcon from '@material-ui/icons/Stars';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined'; import Typography from '@material-ui/core/Typography';
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
    // const venue = venues
    // const reviews = useSelector(state => state.reviews)
    const map = Object.values(venues)
    const singleVenue = map['0']

    useEffect(() => {
        dispatch(getSingleVenue(Number(id)))
    }, [dispatch, id])

    // useEffect(() => {
    //     dispatch(getReviews(Number(id)))
    // }, [dispatch, id])
    // console.log('THIS IS VENUE???????', venue)
    // console.log('&&&&&&&&&&&&&&&&&&&&&&&&', reviews)
    console.log('VENUES', venues)
    console.log('MAP?', map)
    console.log('PLEASE WORK', singleVenue)

    return (
        <div>
            {/* <div className="venue--title"> */}
            {/* <h2>{venue?.name}</h2> */}
            {/* <button onClick={() => console.log('Value of Venuessss', venues[id])}>Click me</button>
                <button onClick={() => console.log('Single venue', venue)}>Click ME</button> */}
            {/* </div> */}
            {Object.values(venues).map(venue => (
                <div>
                    <Typography variant="h5" component='h6' align="center">
                        {venue['0'].name}
                    </Typography>

                    <hr></hr>
                    <Grid container align="center">
                        <Grid item md={2}></Grid>
                        <Grid item md={5}>
                            <StarsIcon fontSize='small' style={{ marginTop: '10px', paddingRight: '10px' }} ></StarsIcon> 
                            <span>
                                {venue['1'].reviews['0'].rating}
                            </span>
                            <ModeCommentOutlinedIcon fontSize='small' ></ModeCommentOutlinedIcon> 
                                <span style={{paddingLeft: '5px', paddingRight: '10px', marginBottom: '100px'}}>
                                    {venue['1'].reviews.length} reviews

                                </span>
                            <LocalAtmOutlinedIcon></LocalAtmOutlinedIcon> $30 under
                            <NaturePeopleOutlinedIcon></NaturePeopleOutlinedIcon> Adventurous
                        </Grid>
                        <Grid item md={3}>Reservation</Grid>
                        <Grid item md={2}></Grid>
                    </Grid>
                </div>
                // <div>
                //     <h1>{venue['0'].name}</h1>
                //     <h2>{venue['1'].reviews.length}</h2>
                // </div>
            ))}

        </div>
    )
}

export default Venue
