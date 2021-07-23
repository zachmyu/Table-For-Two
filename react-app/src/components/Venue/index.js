import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getSingleVenue } from '../../store/venue'
// import { getReviews } from '../../store/reviews'
import { createReview, getReviews, updateReview, deleteReview } from '../../store/reviews'
import { getReservations, createReservation } from '../../store/reservations'
import { NavLink, useParams, useHistory } from "react-router-dom";
import StarsIcon from '@material-ui/icons/Stars';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined'; import Typography from '@material-ui/core/Typography';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import NaturePeopleOutlinedIcon from '@material-ui/icons/NaturePeopleOutlined';
import NewReservation from '../Reservations/NewReservation'
import Grid from '@material-ui/core/Grid';
import ReviewFormModal from '../ReviewFormModal'
import ReservationForm from '../Reservations/ReservationForm'
import SendIcon from '@material-ui/icons/Send';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { getFavorites, createFavorites, deleteFavorites } from '../../store/favorite'


function Venue({ venueResult }) {
    const { id } = useParams()
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [rating, setRating] = useState(0);
    const [showForm, setShowForm] = useState(false)
    const [formId, setFormId] = useState(null)
    const user = useSelector(state => state.session.user)
    const venues = useSelector(state => state.venues)
    const reviews = useSelector(state => state.reviews)
    const favorites = useSelector(state => state.favorites)
    const reservations = useSelector(state => state.reservations)
    const map = Object.values(venues)
    const singleVenue = map['0']
    // const venueeee = singleVenue['0']
    // console.log("VENUERESULT", venueResult)

    const handleSubmit = () => {
        const reviewsInfo = map[0]['1']['reviews']
        // return reviewsInfo
        let total = 0
        reviewsInfo.forEach(review => total += review.rating)
        let avg = (total * 1.0) / reviewsInfo.length
        return avg

    }
    // console.log('111111', venueeee)

    useEffect(() => {
        dispatch(getSingleVenue(Number(id)))
    }, [dispatch, id])

    useEffect(() => {
        dispatch(getFavorites(user.id))
    })

    console.log('~!!!!!!@@@~~~~', favorites)
    
    // useEffect(() => {
    //     dispatch(getReservations(user?.id))
    // }, [dispatch])
    console.log('MAP', map)
    console.log('VALUES OF REVIEWS THUNK', reviews)
    // console.log('0000000000000000000000', singleVenue?.id)
    console.log("THIS IS VENUES", venues)

    const editReview = async (reviewId, title, body, rating, e) => {
        e.preventDefault();
        await dispatch(updateReview(user.id, id, title, body, Number(rating), reviewId))
        setTitle('')
        setBody('')
        setRating('')
        setShowForm(false)
        history.push(`/users/${user.id}`)
    }

    const openForm = (review) => {
        setShowForm(true)
        setTitle(review.title)
        setBody(review.body)
        setRating(review.rating)
        setFormId(review.id)
    }

    const deleteSingleReview = async (reviewId) => {
        console.log('9999999999999')
        let alert = window.confirm('Are you sure you want to delete this review?')
        if (alert) {
            console.log('ALERT')
            dispatch(deleteReview(reviewId))
        }
        history.push(`/users/${user.id}`)

    }

    // if (!user) {
    //     alert('You must login')
    //     history.push('/')
    // }
    console.log('***************', venues)
    return (
        <div>
            {Object.values(venues).map(venue => (
                <div>
                    <button onClick={() =>console.log(venueResult)}>CLICK</button>
                    <img src={venue['0']?.image_url} style={{ width: '100vw', height: '50vh' }} alt="" />
                    <Grid container align="center">
                        <Grid item md={2}></Grid>

                        <Grid item md={5} style={{ boxShadow: '10px 5px 5px gray' }}>
                            <div>
                                <Typography variant="h1" component='h6' align="center">
                                    {venue['0']?.name}
                                    <hr />
                                </Typography>
                                <StarsIcon fontSize='small' style={{ marginTop: '10px', paddingRight: '10px' }} ></StarsIcon>
                                <span>
                                    {handleSubmit()}
                                </span>
                                <ModeCommentOutlinedIcon fontSize='small' ></ModeCommentOutlinedIcon>
                                <span style={{ paddingLeft: '5px', paddingRight: '10px', marginBottom: '100px' }}>
                                    {venue['1']?.reviews.length} reviews
                                </span>
                                <LocalAtmOutlinedIcon></LocalAtmOutlinedIcon> $30 under
                            </div>
                            <div>
                                {venue['0']?.description}
                            </div>
                            <div>
                                {Object.values(venue['1'].reviews).map(review => (
                                    <div>
                                        <button onClick={() =>console.log(review)}>HEY!</button>
                                        <hr></hr>
                                        {review.title}
                                        <div>                            
                                        {review.body}
                                        </div>
                                        {user.id === review.user_id && (
                                            <div>
                                                {/* <h1>Jeff</h1> */}
                                                <button onClick={() => openForm(review)}>Edit Review</button>
                                                {showForm && review.id === formId ? 
                                                <>
                                                    <form onSubmit={(e) => editReview(review.id, title, body, Number(rating), e)} key={review.id}>
                                                        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                                                        <input type='text' value={body} onChange={(e) => setBody(e.target.value)}></input>
                                                        <input type='number' value={rating} onChange={(e) => setRating(Number(e.target.value))}></input>
                                                        <button type='submit'>
                                                            <SendIcon></SendIcon>
                                                        </button>
                                                    </form>
                                                    <button onClick={() => deleteSingleReview(review.id)}><DeleteForeverIcon></DeleteForeverIcon></button>
                                                </>
                                                : null    
                                            }

                                            </div>
                                        )}
                                        {/* <button onClick={() => console.log('{}{}{}{}{}{}{}{}][][]', review)}>LLLLL</button> */}
                                    </div>
                                ))}
                                <div><ReviewFormModal venue_id={id} ></ReviewFormModal></div>
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div>
                                <div>Reservations</div>
                                <ReservationForm venue_id={id} venue={venue} reservations={reservations}></ReservationForm>

                            </div>
                        </Grid>
                        <Grid item md={2}>
                        </Grid>
                    </Grid>
                </div>
            ))}

        </div>
    )
}

export default Venue
