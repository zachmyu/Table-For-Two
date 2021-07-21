import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
// import { Modal } from '../../context/Modal';
import * as reviewActions from '../../store/reviews';
import { createReview } from '../../store/reviews'

function ReviewFormModal({venue_id}) {
    const dispatch = useDispatch();
    const history = useHistory()
    const sessionUser = useSelector((state) => state.session.user)
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [rating, setRating] = useState(0);
    const reviews = useSelector(state => state.review)
    const [errors, setErrors] = useState([]);
    const { id } = useParams()
    venue_id = Number(venue_id)
    console.log('TYPE OF VENUE_ID', typeof(venue_id))

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // id = parseInt(id)
    //     // setErrors([]);
    //     await dispatch(createReview({user_id: sessionUser.id, venue_id: id, title, body, rating}))
    //     // dispatch(reviewActions.createReview({
    //     //     user_id: sessionUser.id,
    //     //     venue_id: id,
    //     //     review: review
    //     // }))
    //     //     .then(() => history.push(`/venue/${id}`))
    //     //     .catch(async (res) => {
    //     //         const data = await res.json();
    //     //         if (data && data.errors) setErrors(data.errors);
    //     //     });
    // }

    // useEffect(() => {
    //     if (errors.length > 0) setSubmission(false);
    //     if (submission && errors.length === 0) setSubmission(true);
    // }, [errors])
    // useEffect(() =>{

    // })
    // useEffect(() => {

    // })
    console.log('COMING FROM REVIEWFORMMODAL&&&&&&&&&&&&&&&&&&&&&', venue_id)

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createReview({user_id: sessionUser.id, venue_id, title, body, rating}))
    }

    const ratingHelper = (num) => {
        setRating(num)
    }

    const radioHelper = () => {
        return [5,4,3,2,1].map(i => (
            <div>
                <input type="radio" key={i} value={i} checked={i === rating} onClick={() => ratingHelper(i)}>

                </input>
            </div>
        ))
    }
    console.log(reviews)

    return (
        <>

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
                        {/* <label> */}
                            {/* <input
                                className="form--rating"
                                type="radio"
                                value={1}
                                checked={false}
                                onChange={(e) => setRating(e.target.value)}
                            />
                            <input
                                className="form--rating"
                                type="radio"
                                value="2"
                                checked={false}
                                onChange={(e) => setRating(e.target.value)}
                            />
                            <input
                                className="form--rating"
                                type="radio"
                                value="3"
                                checked={false}
                                onChange={(e) => setRating(e.target.value)}
                            />
                            <input
                                className="form--rating"
                                type="radio"
                                value="4"
                                checked={false}
                                onChange={(e) => setRating(e.target.value)}
                            />
                            <input
                                className="form--rating"
                                type="radio"
                                value="5"
                                checked={false}
                                onChange={(e) => setRating(e.target.value)}
                            /> */}

                        {/* </label> */}
                        <div>
                            {radioHelper()}
                        </div>
                        <button className="button2" type="submit">Submit Review</button>
                    </form >
        </>
    );
}

export default ReviewFormModal;
