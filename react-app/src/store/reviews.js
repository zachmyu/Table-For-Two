const GET_REVIEWS = "review/GET_REVIEWS"
const GET_SINGLE_REVIEW = "review/GET_SINGLE_REVIEW"
const ADD_REVIEW = "review/ADD_REVIEW"
const UPDATE_REVIEW = "review/UPDATE_REVIEW"
const DELETE_REVIEW = "review/DELETE_REVIEW"

const loadReviews = reviews => ({
    type: GET_REVIEWS,
    payload: reviews
})

const addReview = (review) => ({
    type: ADD_REVIEW,
    review
})

const updateSingleReview = (review) => ({
    type: UPDATE_REVIEW,
    review

})

const deleteSingleReview = (review) => ({
    type: DELETE_REVIEW,
    review
})

export const getReviews = (id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}`)

    if (response.ok) {
        const reviews = await response.json()
        dispatch(loadReviews(reviews))
    }
}

export const createReview = review => async (dispatch) => {
    const response = await fetch(`/api/reviews/venues/${review.venue_id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
    if (response.ok) {
        const newReview = await response.json()
        dispatch(addReview(newReview))
    }
}

export const updateReview = (user_id, venue_id, title, body, rating, reviewId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/venues/${reviewId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id, venue_id, title, body, rating })
    })
    if (response.ok) {
        const updatedReview = await response.json()
        dispatch(updateSingleReview(updatedReview))
    }
}

export const deleteReview = reviewId => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
    })
    if (response.ok) {
        dispatch(deleteSingleReview(reviewId))
    }
}


const initialState = {}

export default function reviews(state = initialState, action) {
    let updatedState = { ...state }
    switch (action.type) {
        case GET_REVIEWS: {
            const newState = {}
            action.reviews.forEach(review => {
                newState[review.id] = review
            })
            return newState
        }
        case ADD_REVIEW:
            updatedState[action.review.id] = action.review
            return updatedState
        case UPDATE_REVIEW: {
            updatedState[action.review.id] = action.review
            return updatedState
        }
        case DELETE_REVIEW: {
            delete updatedState[action.review]
            return updatedState
        }
        default:
            return state
    }
}
