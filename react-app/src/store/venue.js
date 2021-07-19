const GET_VENUES = "venue/GET_VENUES"
const GET_SINGLE_VENUE = "venue/GET_SINGLE_VENUE"


const loadVenues = (venues) => ({
    type: GET_VENUES,
    venues
})

const loadSingleVenue = (venue) => ({
    type: GET_SINGLE_VENUE,
    venue
})


export const getVenues = () => async(dispatch => {
    const response = await fetch("/api/venues")

    if (response.ok) {
        const venues = await response.json()
        dispatch(loadVenues)
    }
})


export const getSingleVenue = (venueId) => async(dispatch => {
    const response = await fetch(`/api/venues/${venueId}`)
    if (response.ok) {
        const venue = await response.json()
        dispatch(loadSingleVenue(venue))
    }
})

const initialState = {}

export default function venueReducer(state = initialState, action) {
    let updatedState = {...state}
    switch (action.type) {
        case GET_VENUES: {
            const newState = {}
            action.venues.forEach(venue => {
                newState[venue.id] = venue
            })
            return newState
        }
        case GET_SINGLE_VENUE: {
            updatedState[action.venue.id] = action.venue
            return updatedState
        }
        default:
            return state
    }
}