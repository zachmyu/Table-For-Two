const CREATE_RESERVATION = 'reservations/CREATE_RESERVATION';
const GET_RESERVATIONS = 'reservations/GET_RESERVATIONS'


const loadReservations = reservations => ({
    type: GET_RESERVATIONS,
    reservations
})

const addReservation = reservation => ({
    type: CREATE_RESERVATION,
    payload: reservation
})


export const getReservations = (user_id) => async (dispatch) => {
    const response = await fetch(`/api/reservations/${user_id}`)

    if (response.ok) {
        const reservations = await response.json()
        dispatch(loadReservations(reservations))
    }
}

export const createReservation = (reservationInfo) => async (dispatch) => {
    const response = await fetch(`/api/reservations`, {
        method: 'POST',
        headers: {}
    })
}


const initialState = {}

export default function reservations(state = initialState, action) {
    let updatedState = {...state}
    switch (action.type) {
        case GET_RESERVATIONS:
            let newState = {}
            action.reservations.reservations.forEach(reservation => {
                newState[reservation.id] = reservation
            })
            return newState
        default:
            return state
    }
}
