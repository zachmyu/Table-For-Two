import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
// import { Modal } from '../../context/Modal';
import * as reviewActions from '../../store/reviews';
import { createReview, updateReview } from '../../store/reviews'

function ReviewFormModal({ venue_id, reviewId }) {
    const dispatch = useDispatch();
    const history = useHistory()
    const venues = useSelector(state => state.venues)
    const sessionUser = useSelector((state) => state.session.user)
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [rating, setRating] = useState(0);
    const reviews = useSelector(state => state.review)
    const [showForm, setShowForm] = useState(false)
    venue_id = Number(venue_id)

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createReview({ user_id: sessionUser.id, venue_id, title, body, rating }))
        history.push(`/users/${sessionUser.id}`)

    }

    const ratingHelper = (num) => {
        setRating(num)
    }

    const radioHelper = () => {
        return [1, 2, 3, 4, 5].map(i => (
            <div className='review-radio-select'>
                {i}
                <input
                    type="radio"
                    key={i}
                    value={i}
                    checked={i === rating}
                    onChange={(e) => setRating(i)}
                    onClick={() => ratingHelper(i)}>
                </input>
            </div>
        ))
    }
    const editReview = async (reviewId, title, body, rating, e) => {
        e.preventDefault();
        await dispatch(updateReview(title, body, rating, reviewId))
        setTitle('')
        setBody('')
        setRating('')
        setShowForm(false)
    }

    return (
        <>
            {/* {Object.values(venues).map(venue => (
                <div>
                    {Object.values(venue['1'].reviews).map(review => (
                        <div>

                        </div>
                    ))}
                </div>
            ))} */}

            <form className='review-container' onSubmit={handleSubmit}>
                <h3>Add a review for this venue</h3>
                <div className="signUpForm--element--container">
                    <input
                        className="review-element"
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="signUpForm--element--container">
                    <textarea
                        className="review-text-element"
                        value={body}
                        placeholder='Add your review!'
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                </div>
                <div className="review-radio-container">
                    <h3>Rating</h3>
                    {radioHelper()}
                </div>
                <div className='review-button-container'>
                    <button className="button2" type="submit">Submit Review</button>
                </div>
            </form >
        </>
    );
}

export default ReviewFormModal;
