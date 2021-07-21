import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getSingleVenue } from '../../store/venue'
// import { getReviews } from '../../store/reviews'
import { createReview } from '../../store/reviews'
import { NavLink, useParams, useHistory } from "react-router-dom";
import StarsIcon from '@material-ui/icons/Stars';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined'; import Typography from '@material-ui/core/Typography';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import NaturePeopleOutlinedIcon from '@material-ui/icons/NaturePeopleOutlined';
import Grid from '@material-ui/core/Grid';
import ReviewFormModal from '../ReviewFormModal'


function Venue() {
    const { id } = useParams()
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.session.user)
    // const venue = useSelector(state => state.venues.venue)
    const venues = useSelector(state => state.venues)
    const reviews = useSelector(state => state.reviews)
    // const venue = venues
    // const reviews = useSelector(state => state.reviews)
    const map = Object.values(venues)
    const singleVenue = map['0']
    // const something = singleVenue.keys(singleVenue)
    // const reviewsInfo = map[0]['1']['reviews']
    // const total = 0
    // let ratingAverage = Object.values(venues).map(venue => {
    //     let reviewsArr = Object.values(venue['1'].reviews);
    //     reviewsArr.forEach(review => total += review.rating);
    //     let avg = (total * 1.0) / reviewsArr.length;
    //     return avg
    // })

    const handleSubmit = () => {
        const reviewsInfo = map[0]['1']['reviews']
        // return reviewsInfo
        let total = 0
        reviewsInfo.forEach(review => total += review.rating)
        let avg = (total * 1.0) / reviewsInfo.length
        return avg

    }

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
    console.log('ADD A REVIEW@@@@@@@@@@', reviews)
    console.log('USEEEEEEERRRRRRR$$$$$$$$', user.id)
    // console.log('SOMETHING GOES HERE', reviewsInfo)

    return (
        <div>
            {/* <div className="venue--title"> */}
            {/* <div className="venue--title"> */}
            {/* <h2>{venue?.name}</h2> */}
            {/* <button onClick={() => console.log('Value of Venuessss', venues[id])}>Click me</button>
                <button onClick={() => console.log('Single venue', venue)}>Click ME</button> */}
            {/* </div> */}
            {Object.values(venues).map(venue => (
                <div>
                    <img src={venue['0'].image_url} style={{width: '100vw', height: '50vh'}} alt="" />
                    {/* <Typography variant="h5" component='h6' align="center">
                        {venue['0'].name}
                    </Typography> */}

                    {/* <hr></hr> */}
                    <Grid container align="center">
                        <Grid item md={2}></Grid>
                        
                        <Grid item md={5} style={{ boxShadow: '10px 5px 5px gray' }}>
                            <div>
                                <Typography variant="h1" component='h6' align="center">
                                    {venue['0'].name}
                                    <hr />
                                </Typography>
                            <StarsIcon fontSize='small' style={{ marginTop: '10px', paddingRight: '10px' }} ></StarsIcon>
                            <span>
                                {handleSubmit()}
                                {/* <button onClick={() => console.log('AAAAAHHHHHHHHHHHH',handleSubmit())}>****************</button> */}
                            </span>
                            <ModeCommentOutlinedIcon fontSize='small' ></ModeCommentOutlinedIcon>
                            <span style={{ paddingLeft: '5px', paddingRight: '10px', marginBottom: '100px' }}>
                                {venue['1'].reviews.length} reviews
                            </span>
                            <LocalAtmOutlinedIcon></LocalAtmOutlinedIcon> $30 under
                            </div>
                            <div>
                                {venue['0'].description}
                            </div>
                            <div>
                                {/* {Object.values(venue).map(rating => {
                                    <button onClick={() => console.log(rating)}>REVIEW?</button>
                                })} */}
                                {/* {singleVenue[]} */}
                                {/* <button onClick={() => console.log(singleVenue['1'])}</button> */}
                                {/* <button onClick={() => console.log(singleVenue['1'])}>REVIEW?</button> */}
                                {/* {singleVenue['1']?.map(review => (
                                    <div>
                                        {review.title}
                                    </div>
                                ))} */}
                                {Object.values(venue['1'].reviews).map(review => (
                                    <div>
                                        <hr></hr>
                                        {review.title}
                                    <div>
                                        {/* <hr></hr> */}
                                            {review.body}
                                    </div>
                                    </div>
                                ))}
                                <div><ReviewFormModal></ReviewFormModal></div>
                            </div>
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
