const GET_REVIEWS = "review/GET_REVIEWS"
const GET_SINGLE_REVIEW = "review/GET_SINGLE_REVIEW"

const loadReviews = reviews => ({
    type: GET_REVIEWS,
    reviews
})


export const getReviews = (id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}`)

    if (response.ok) {
        const reviews = await response.json()
        dispatch(loadReviews(reviews))
    }
}


const initialState = {}

export default function reviews(state = initialState, action) {
    let updatedState = {...state}
    switch (action.type) {
        case GET_REVIEWS:
            return {
                reviews: action.payload
            }
        default:
            return state
    }
}