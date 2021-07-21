const GET_REVIEWS = "review/GET_REVIEWS"
const GET_SINGLE_REVIEW = "review/GET_SINGLE_REVIEW"
const ADD_REVIEW = "review/ADD_REVIEW"

const loadReviews = reviews => ({
    type: GET_REVIEWS,
    payload: reviews
})

const addReview = (review) => ({
    type: ADD_REVIEW,
    review
})


export const getReviews = (id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}`)

    if (response.ok) {
        const reviews = await response.json()
        dispatch(loadReviews(reviews))
    }
}

// export const createReview = (user_id, venue_id, title, body, rating) => async (dispatch) => {
//     const response = await fetch(`/api/venues/reviews/${venue_id}`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             user_id,
//             venue_id,
//             title,
//             body,
//             rating
//         })
//     })

//     const data = await response.json()
//     dispatch(loadReviews())

    
// }

export const createReview = review => async (dispatch) => {
    // const response = await fetch(`/api/venues/reviews/${review.venue_id}`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(review)
    // })
    // if (response.ok) {
    //     const data = await response.json()
    //     console.log("!!!!!!!!!!!!", data)
    //     dispatch(addReview(data))
    //     console.log("++++++++++", data)
    // }

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
        console.log('<><><><><><><><><><><>', newReview)
    }
    console.log('from store in reviews', review)
    // return review
}


const initialState = {}

export default function reviews(state = initialState, action) {
    let updatedState = {...state}
    switch (action.type) {
        case GET_REVIEWS:
            return {
                reviews: action.payload
            }
        case ADD_REVIEW:
            updatedState[action.review.id] = action.review
            return updatedState
        default:
            return state
    }
}