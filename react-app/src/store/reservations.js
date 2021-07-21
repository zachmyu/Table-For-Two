const CREATE_RESERVATION = 'reservations/CREATE_RESERVATION';
const GET_RESERVATIONS = 'reservations/GET_RESERVATIONS'


const loadReservations = reservations => ({
    type: GET_RESERVATIONS,
    reservations
})

const addReservation = reservation => ({
    type: CREATE_RESERVATION,
    reservation
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
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservationInfo)
    })
    if (response.ok) {
        const newReservation = await response.json()
        dispatch(addReservation(newReservation))
        console.log("DATA FROM RESERVATION STORE RIGHT AFTER DISPATCH", newReservation)
    }
    console.log('this is just the reservationInfo var on store', reservationInfo)
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
        case CREATE_RESERVATION:
            // newState = JSON.parse(JSON.stringify(state))
            // newState[action.payload.id] = action.payload
            // return newState
            updatedState[action.reservation.id] = action.reservation
            return updatedState
        default:
            return state
    }
}
