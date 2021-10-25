const GET_SINGLE_RESERVATION = 'reservations/GET_SINGLE_RESERVATION'
const READ_ALL_RESERVATIONS = 'reservations/READ_ALL_RESERVATIONS'
const CREATE_RESERVATION = 'reservations/CREATE_RESERVATION'
const UPDATE_RESERVATION = 'reservations/UPDATE_RESERVATION'
const DELETE_RESERVATION = 'reservations/DELETE_RESERVATION'


const loadSingleReservation = reservation => ({
    type: GET_SINGLE_RESERVATION,
    payload: reservation
});

const loadAllReservations = reservations => ({
    type: READ_ALL_RESERVATIONS,
    payload: reservations
});

const addReservation = reservation => ({
    type: CREATE_RESERVATION,
    payload: reservation
});

const updateReservation = reservation => ({
    type: UPDATE_RESERVATION,
    payload: reservation
});

const deleteReservation = reservation_id => ({
    type: DELETE_RESERVATION,
    payload: reservation_id
});


export const getOneReservation = reservationId => async dispatch => {
    const res = await fetch(`/api/reservations/${reservationId}/`)
    const data = await res.json();

    if (res.ok) {
        dispatch(loadSingleReservation(data))
    } else {
        throw res;
    };
}

export const getAllUserReservations = userId => async dispatch => {
    const res = await fetch(`/api/reservations/user/${userId}/`);
    const data = await res.json();

    if (res.ok) {
        dispatch(loadAllReservations(data))
    } else {
        throw res;
    };
}

export const createReservation = reservationData => async dispatch => {
    const { user_id, venue_id, reservation_datetime, party_size, duration } = reservationData

    const res = await fetch(`/api/reservations/create/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: user_id,
            venue_id: venue_id,
            reservation_datetime: reservation_datetime,
            party_size: party_size,
            duration: duration,
        }),
    });
    const data = await res.json();

    if (res.ok) {
        dispatch(addReservation(data))
    } else {
        throw res;
    };
    return data
}

export const updateReservation = reservationData => async dispatch => {
    const { user_id, venue_id, reservation_datetime, party_size, duration, reservationId } = reservationData
    const res = await fetch(`/api/reservations/${reservationId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: user_id,
            venue_id: venue_id,
            reservation_datetime: reservation_datetime,
            party_size: party_size,
            duration: duration,
        }),
    });
    const data = await res.json();

    if (res.ok) {
        dispatch(updateReservation(data))
    } else {
        throw res;
    };
    return data
}

export const deleteReservation = reservationId => async dispatch => {
    const res = await fetch(`/api/reservations/${reservationId}/`, {
        method: 'DELETE',
    })

    if (res.ok) {
        dispatch(deleteReservation(reservationId))
    } else {
        throw res;
    };
}


const initialState = {}
const menu_itemsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_SINGLE_RESERVATION:
            newState = { ...state };
            newState.current = action.payload;
            return newState;

        case READ_ALL_RESERVATIONS:
            newState = { ...action.payload };
            return newState;

        case CREATE_RESERVATION:
            newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState;

        case UPDATE_RESERVATION:
            newState = { ...state };
            newState.current = action.payload;
            return newState;

        case DELETE_RESERVATION:
            newState = { ...state };
            delete newState[action.payload];
            return newState;

        default:
            return state;
    }
}

export default menu_itemsReducer;
