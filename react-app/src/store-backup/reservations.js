const CREATE_RESERVATION = 'reservations/CREATE_RESERVATION';
const GET_RESERVATIONS = 'reservations/GET_RESERVATIONS'
const UPDATE_RESERVATION = 'reservations/UPDATE_RESERVATION'
const DELETE_RESERVATION = 'reservations/DELETE_RESERVATION'


const loadReservations = reservations => ({
    type: GET_RESERVATIONS,
    reservations
})

const addReservation = reservation => ({
    type: CREATE_RESERVATION,
    reservation
})

const updateSingleReservation = (reservation) => ({
    type: UPDATE_RESERVATION,
    reservation
})

const deleteSingleReservation = (reservation) => ({
    type: DELETE_RESERVATION,
    reservation
})


export const getUserReservations = (user_id) => async (dispatch) => {
    const response = await fetch(`/api/reservations/user/${user_id}/`)

    if (response.ok) {
        const reservations = await response.json()
        dispatch(loadReservations(reservations))
    }
}

export const createReservation = (reservationInfo) => async (dispatch) => {
    const response = await fetch(`/api/reservations/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservationInfo)
    })
    if (response.ok) {
        const newReservation = await response.json()
        dispatch(addReservation(newReservation))
    }
}

export const updateReservation = (user_id, venue_id, reservation_datetime, party_size, duration, reservationId) => async (dispatch) => {
    const response = await fetch(`/api/reservations/${reservationId}/`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id, venue_id, reservation_datetime, party_size, duration })
    })
    if (response.ok) {
        const updateReservation = await response.json()
        dispatch(updateSingleReservation(updateReservation))
    }
}

export const deleteReservation = reservationId => async (dispatch) => {
    const response = await fetch(`/api/reservations/${reservationId}/`, {
        method: "DELETE"
    })
    if (response.ok) {
        dispatch(deleteSingleReservation(reservationId))
    }
}


const initialState = {}

export default function reservations(state = initialState, action) {
    let updatedState = { ...state }
    switch (action.type) {
        case GET_RESERVATIONS:
            // let newState = {}
            // action.reservations.reservations.forEach(reservation => {
            //     newState[reservation.id] = reservation
            // })
            // return newState
            return { ...state, ...action.reservations }
        case CREATE_RESERVATION:
            // newState = JSON.parse(JSON.stringify(state))
            // newState[action.payload.id] = action.payload
            // return newState
            updatedState[action.reservation.id] = action.reservation
            return updatedState
        case UPDATE_RESERVATION: {
            updatedState[action.reservation.id] = action.reservation
            return updatedState
        }
        case DELETE_RESERVATION: {
            delete updatedState[action.reservation]
            return updatedState
        }
        default:
            return state
    }
}
