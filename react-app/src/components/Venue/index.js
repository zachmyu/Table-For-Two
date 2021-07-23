import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getSingleVenue } from '../../store/venue'
import { updateReview, deleteReview } from '../../store/reviews'
import { useParams, useHistory } from "react-router-dom";
import StarsIcon from '@material-ui/icons/Stars';
import ReviewFormModal from '../ReviewFormModal/ReviewCreateForm'
import ReservationForm from '../Reservations/ReservationForm'
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SendIcon from '@material-ui/icons/Send';
import { getFavorites, createFavorites, deleteFavorites } from '../../store/favorite'
import './Venue.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';




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
    const favorites = useSelector(state => state.favorites)
    const reservations = useSelector(state => state.reservations)
    const venue = useSelector(state => state?.venues.current)
    const reviewsInfo = venue ? Object.values(venue?.reviews) : null
    const faveObj = Object.values(favorites)
    const keyOfObj = faveObj['0']
    const faveToUse = keyOfObj?.favorites
    const thing = faveToUse?.find(favorite => favorite?.user_id == user?.id && favorite?.venue_id == id)?.id

    useEffect(async () => {
        await dispatch(getSingleVenue(id))
    }, [dispatch, id])

    useEffect(() => {
        dispatch(getFavorites(user.id))
    }, [dispatch, user.id])

    const handleRating = () => {
        let total = 0
        reviewsInfo.forEach(review => total += review.rating)
        let avg = (total * 1.0) / reviewsInfo.length
        return avg
    }

    const editReview = async (reviewId, title, body, rating, e) => {
        e.preventDefault();
        dispatch(updateReview(user.id, id, title, body, Number(rating), reviewId))
        setTitle('')
        setBody('')
        setRating('')
        setShowForm(false)
    }

    const openForm = (review) => {
        setShowForm(true)
        setTitle(review.title)
        setBody(review.body)
        setRating(review.rating)
        setFormId(review.id)
    }

    const deleteSingleReview = async (reviewId) => {
        let alert = window.confirm('Are you sure you want to delete this review?')
        if (alert) {
            await dispatch(deleteReview(reviewId))
        }
        history.push(`/venues/${id}`)
    }

    const handleFavorites = async (e) => {
        e.preventDefault();
        await dispatch(createFavorites({ user_id: user.id, venue_id: id }))
        history.push(`/users/${user.id}`)

    }

    const unFave = async (thing) => {
        // e.preventDefault();
        await dispatch(deleteFavorites(thing))
    }

    let reviewChange;
    if (user) {
        reviewChange = (
            <div className='container_venue-comments'>
                {reviewsInfo && reviewsInfo.map(review => (
                    <>
                        <hr />
                        <h3>Title: {review.title}</h3>
                        <div>{review.body}</div>
                        {user.id === review.user_id && (
                            <div className='container_venue-commentsEdit'>
                                <button className='button3' onClick={() => openForm(review)}>Edit Review</button>
                                {showForm && review.id === formId ?
                                    <>
                                        <form onSubmit={(e) => editReview(review.id, title, body, Number(rating), e)} key={review.id}>
                                            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                                            <input type='text' value={body} onChange={(e) => setBody(e.target.value)}></input>
                                            <input type='number' value={rating} onChange={(e) => setRating(Number(e.target.value))}></input>
                                            <button className='button3' type='submit'><SendIcon /></button>
                                        </form>
                                        <button className='button3' onClick={() => deleteSingleReview(review.id)}><DeleteForeverIcon></DeleteForeverIcon></button>
                                    </>
                                    : null
                                }
                            </div>
                        )}
                    </>
                ))}
                <hr />
                <div><ReviewFormModal venue_id={id} /></div>
            </div>
        )
    } else {
        reviewChange = (
            <div className='container_venue-comments'>
                {reviewsInfo?.map(review => (
                    <div className='container_venue-comments'>
                        <hr />
                        <h3>Title: {review.title}</h3>
                        <div>{review.body}</div>
                    </div>
                ))}
                <hr />
                <h4>Please log in to add or edit reviews!</h4>
            </div>
        )
    }

    let makeReservation;
    if (user) {
        makeReservation = (
            <>
                <h3>Reservations</h3>
                <div>
                    <button type='button' onClick={handleFavorites}><FavoriteIcon></FavoriteIcon></button>
                </div>
                <div>
                    {faveToUse?.find(favorite => favorite?.user_id == user?.id && favorite?.venue_id == id) && (
                        <div>
                            <button type='button' onClick={() => unFave(faveToUse.find(favorite => favorite?.user_id == user?.id && favorite?.venue_id == id)?.venue_id)}><FavoriteBorderIcon></FavoriteBorderIcon></button>
                            <button onClick={() => console.log('UGGGGHHHHHH', faveToUse?.find(favorite => favorite?.user_id == user?.id && favorite?.venue_id == id)?.id)}>dihsdidhj</button>
                        </div>
                    )}
                </div>
                <ReservationForm venue_id={id} venue={venue} reservations={reservations}></ReservationForm>
            </>
        )
    } else {
        makeReservation = (
            <>
                <h3>Reservations</h3>
                <p>Please login to make a reservation!</p>
            </>
        )
    }

    return (
        <>
            {venue &&
                <>
                    <div className='container__venue-title'>
                        <img src={venue.image_url} style={{ width: '100vw', height: '50vh' }} alt={venue.name} />
                    </div>
                    <div className='container__venue'>
                        <div className='container_venue-left'>
                            <div className='container_venue-summary'>
                                <h1 className='venue-title'>{venue.name}</h1>
                                <hr />
                                <StarsIcon fontSize='small' style={{ marginTop: '10px', paddingRight: '10px' }} />
                                <span> <ModeCommentOutlinedIcon fontSize='small' />{(Object.values(venue.reviews)).length} reviews</span>
                                <span>{handleRating()}</span>
                                <LocalAtmOutlinedIcon />Price Per Couple: {venue.price}
                            </div>
                            <div className='container_venue-summary'>
                                {venue.description}
                            </div>
                            {reviewChange}
                        </div>
                        <div className='container_venue-right'>
                            <div id="venueElement-reservation">{makeReservation}</div>
                            <div id="venueElement-maps">Google Maps Placeholder</div>
                            <div id="venueElement-info">Various Information Placeholder</div>
                            <div id="venueElement-favorite">Favorite This Venue Placeholder</div>
                        </div>
                    </div>
                </>

            }
        </>
    )
}

export default Venue
