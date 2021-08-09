const GET_VENUES = "venue/GET_VENUES"
const GET_SINGLE_VENUE = "venue/GET_SINGLE_VENUE"
const DEL_REVIEW = "venue/DEL_SINGLE_REVIEW"
const ADD_REVIEW = "venue/DEL_REVIEW"
const UPDATE_REVIEW = "venue/UPDATE_REVIEW"


const loadVenues = (venues) => ({
    type: GET_VENUES,
    venues,
})

const loadSingleVenue = (venue) => ({
    type: GET_SINGLE_VENUE,
    venue
})

export const getVenues = () => async (dispatch) => {
    const response = await fetch("/api/venues/")

    if (response.ok) {
        const venues = await response.json()
        await dispatch(loadVenues(venues))
        return response
    }
}


export const getSingleVenue = (id) => async (dispatch) => {
    const response = await fetch(`/api/venues/${id}/`)
    if (response.ok) {
        const venue = await response.json()
        dispatch(loadSingleVenue(venue))
    }
}

const initialState = {}

export default function venues(state = initialState, action) {
    let updatedState = { ...state }
    let newState;
    switch (action.type) {
        case GET_VENUES: {
            const allVenues = {};
            action.venues.venues.forEach(venue => {
                allVenues[venue.id] = venue;
            });
            newState = { ...allVenues }
            return newState;
        }
        case GET_SINGLE_VENUE: {
            newState = { ...state }
            newState.current = action.venue
            return newState
        }
        case ADD_REVIEW: {
            // updatedState.current[action.review.id] = action.review
            updatedState.current.reviews[action.review] = action.review
            return updatedState
        }
        case UPDATE_REVIEW: {
            updatedState.current[action.review.id] = action.review
            return updatedState
        }

        case DEL_REVIEW: {
            delete updatedState.current.reviews[action.review]
            return updatedState
        }

        default:
            return state
    }
}
