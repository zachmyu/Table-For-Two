import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getSingleVenue } from '../../store/venue'
import { updateReview, deleteReview } from '../../store/reviews'
import { useParams, useHistory } from "react-router-dom";
import ReviewFormModal from '../ReviewFormModal/ReviewCreateForm'
import ReservationForm from '../Reservations/ReservationForm'
import { createFavorites, deleteFavorites } from '../../store/favorite'
import './Venue.css'
import '../ReviewFormModal/ReviewForm.css'


function Venue() {
    const { id } = useParams()
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [rating, setRating] = useState(0);
    const [showForm, setShowForm] = useState(false)
    const [formId, setFormId] = useState(null)
    const [buttonUnFave, setButtonUnFave] = useState('button-unfave')
    const [buttonAddFave, setButtonAddFave] = useState('button-addfave')
    const [oneClickBtn, setOneClickBtn] = useState(false)

    const user = useSelector(state => state.session.user)
    const reservations = useSelector(state => state.reservations)
    const venue = useSelector(state => state?.venues.current)
    const userFavorites = user ? Object.values(user?.favorites) : null
    const reviewsInfo = venue ? Object.values(venue?.reviews) : null
    const faveFind = userFavorites?.find(favorite => favorite?.venue_id === id)


    useEffect(() => {
        dispatch(getSingleVenue(id))
    }, [dispatch, id])

    const handleRating = () => {
        let total = 0
        reviewsInfo?.forEach(review => total += review?.rating)
        let avg = Math.round((total / reviewsInfo.length) * 10) / 10
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
        setShowForm(!showForm)
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
    }

    const addFave = async (e) => {
        e.preventDefault();
        setButtonAddFave('button-addfave-clicked')
        setOneClickBtn(true)
        await dispatch(createFavorites({ user_id: user.id, venue_id: id }))
        history.push(`/venues/${id}`)
    }

    const unFave = async (favId) => {
        await dispatch(deleteFavorites(favId))
        setButtonUnFave('button-unfave-clicked')
        setOneClickBtn(true)
        history.push(`/venues/${id}`)
    }

    const ratingHelper = (num) => {
        setRating(num)
    }

    let favoriteButton;
    if (faveFind) {
        favoriteButton = (
            <div classNames='reservation-favorites'>
                <span classNames='fav-title'>Remove from your favorites? ☹</span>
                <button type='button'
                    disabled={oneClickBtn}
                    id={buttonUnFave}
                    onClick={() => (
                        unFave(userFavorites.find(favorite => (
                            favorite?.venue_id === id
                        ))?.id)
                    )}>
                    <i class="fas fa-heart" />
                </button >
            </div>
        )
    } else {
        favoriteButton = (
            <div classNames='reservation-favorites'>
                <span classNames='fav-title'>Add to your favorites!</span>
                <button type='button'
                    disabled={oneClickBtn}
                    id={buttonAddFave}
                    onClick={addFave}>
                    <i class="fas fa-heart" />
                </button>
            </div>
        )
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
                                        <h3>Edit your review for this venue</h3>
                                        <form className='review-container'
                                            onSubmit={(e) =>
                                                editReview(review.id, title, body, Number(rating), e)}
                                            key={review.id}>
                                            <div className='review-element-container'>
                                                <input
                                                    className='review-element'
                                                    type='text'
                                                    value={title}
                                                    placeholder='Title'
                                                    onChange={(e) =>
                                                        setTitle(e.target.value)}
                                                    required>
                                                </input>
                                            </div>
                                            <div className='review-element-container'>
                                                <textarea
                                                    className='review-text-element'
                                                    value={body}
                                                    placeholder='Update your review!'
                                                    onChange={(e) =>
                                                        setBody(e.target.value)}
                                                    required
                                                />

                                            </div>
                                            <div className='review-radio-container'>
                                                <h3>Rating</h3>
                                                {[1, 2, 3, 4, 5].map(i => (
                                                    <div className='review-radio-select'>
                                                        {i}
                                                        <input
                                                            type="radio"
                                                            key={i}
                                                            value={i}
                                                            checked={i === rating}
                                                            onClick={() => ratingHelper(i)}>
                                                        </input>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className='review-button-container'>
                                                <button className='button2' type='submit'>Update Review</button>
                                                <button className='button1' onClick={() => deleteSingleReview(review.id)}>Delete Review</button>
                                            </div>
                                        </form>
                                    </>
                                    : null
                                }
                            </div>
                        )}
                    </>
                ))
                }
                <hr />
                <div><ReviewFormModal venue_id={id} /></div>
            </div >
        )
    } else {
        reviewChange = (
            <div className='container_venue-comments'>
                {reviewsInfo?.map(review => (
                    <div className='container_venue-comments' id={review.id}>
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
                {favoriteButton}
                <div className='container-reservation'>
                    <h3>Reservations</h3>
                    <ReservationForm venue_id={id}
                        venue={venue}
                        reservations={reservations}>
                    </ReservationForm>
                </div>
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
                        <img src={venue.image_url}
                            alt={venue.name}
                            className='venue-picture' />
                    </div>
                    <div className='container__venue'>
                        <div className='container_venue-left'>
                            <div className='container_venue-summary'>
                                <h1 className='venue-title'>{venue.name}</h1>
                                <hr />
                            </div>
                            <div className='container_venue-details'>
                                <div className='venue-details-element'>
                                    <i class="fas fa-star"></i>
                                    <span>{handleRating()}</span>
                                </div>
                                <div className='venue-details-element'>
                                    <i class="far fa-comment-alt"> </i>
                                    <span>{(Object.values(venue.reviews)).length} reviews</span>
                                </div>
                                <div className='venue-details-element'>
                                    <i class="fas fa-money-bill-wave"></i>
                                    <span>Price Per Couple: ${venue.price}</span>
                                </div>
                            </div>
                            <div className='container_venue-summary'>
                                {venue.description}
                            </div>
                            {reviewChange}
                        </div>
                        <div className='container_venue-right'>
                            <div id="venueElement-reservation">{makeReservation}</div>
                            {/* <div id="venueElement-maps">Google Maps Placeholder</div> */}
                            {/* <div id="venueElement-info">Various Information Placeholder</div> */}
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Venue
