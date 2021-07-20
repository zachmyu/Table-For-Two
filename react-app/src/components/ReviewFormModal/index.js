import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import * as reviewActions from '../../store/reviews';

function ReviewFormModal() {
    const dispatch = useDispatch();
    const history = useHistory()
    const sessionUser = useSelector((state) => state.session.user)
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [rating, setRating] = useState('');
    const [errors, setErrors] = useState([]);
    let { id } = useParams()

    const handleSubmit = (e) => {
        e.preventDefault();
        id = parseInt(id)
        setErrors([]);
        setSubmission(true);
        dispatch(reviewActions.createReview({
            user_id: sessionUser.id,
            venue_id: id,
            review: review
        }))
            .then(setShowModal(false))
            .then(() => history.push(`/venue/${id}`))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    useEffect(() => {
        if (errors.length > 0) setSubmission(false);
        if (submission && errors.length === 0) setSubmission(true);
    }, [submission, errors])

    return (
        <>
            <button className="button1" type="button" onClick={() => setShowModal(true)}>Add Review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
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
                        <label>
                            <input
                                className="form--rating"
                                type="radio"
                                value="1"
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
                            />
                        </label>
                        <button className="button2" type="submit">Submit Review</button>
                    </form >
                </Modal>
            )}
        </>
    );
}

export default ReviewFormModal;
