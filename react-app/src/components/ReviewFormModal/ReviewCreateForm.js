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
    const [errors, setErrors] = useState([]);
    const [showForm, setShowForm] = useState(false)
    venue_id = Number(venue_id)

    console.log('VALUES OF REVIEWS THUNK', reviews)

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createReview({ user_id: sessionUser.id, venue_id, title, body, rating }))
        history.push(`/users/${sessionUser.id}`)

    }

    const ratingHelper = (num) => {
        setRating(num)
    }

    const radioHelper = () => {
        return [5, 4, 3, 2, 1].map(i => (
            <div>
                <input type="radio" key={i} value={i} checked={i === rating} onClick={() => ratingHelper(i)}>

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


    console.log(reviews)

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

            <form className='form--container' onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>
                    Title
                    <input
                        className="form--element"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Review
                    <textarea
                        className="form--element"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                </label>
                <div>
                    {radioHelper()}
                </div>
                <button className="button2" type="submit">Submit Review</button>
            </form >
        </>
    );
}

export default ReviewFormModal;
