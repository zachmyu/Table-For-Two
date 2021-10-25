const READ_SINGLE_VENUE = 'venue/READ_SINGLE_VENUE'
const READ_ALL_VENUES = 'venue/READ_ALL_VENUES'
const CREATE_VENUE = 'venue/CREATE_VENUE'
const UPDATE_VENUE = 'venue/UPDATE_VENUE'
const DELETE_VENUE = 'venue/DELETE_VENUE'


const loadOneVenue = venue => ({
    type: READ_SINGLE_VENUE,
    payload: venue
});

const loadAllVenues = venues => ({
    type: READ_ALL_VENUES,
    payload: venues
});

const addVenue = venue => ({
    type: CREATE_VENUE,
    payload: venue
});

const changeVenue = venue => ({
    type: UPDATE_VENUE,
    payload: venue
});

const removeVenue = venue => ({
    type: DELETE_VENUE,
    payload: venue
});


export const getSingleVenue = venueId => async dispatch => {
    const res = await fetch(`/api/venues/${venueId}/`)
    const data = await res.json();

    if (res.ok) {
        dispatch(loadOneVenue(data))
    } else {
        throw res;
    };
}

export const getAllVenues = () => async dispatch => {
    const res = await fetch(`/api/venues/`);
    const data = await res.json();

    if (res.ok) {
        dispatch(loadAllVenues(data))
    } else {
        throw res;
    };
}

export const getAllUserVenues = userId => async dispatch => {
    const res = await fetch(`/api/venues/users/${userId}/`);
    const data = await res.json();

    if (res.ok) {
        dispatch(loadAllVenues(data))
    } else {
        throw res;
    };
}

export const createVenue = venueData => async dispatch => {
    const { userId, name, dateTypeId, price, description, imageUrl, phoneNumber, address, city, state, zipcode, operationHours, latitude, longitude } = venueData
    const res = await fetch(`/api/venues/create/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            creator_id: userId,
            name: name,
            date_type_id: dateTypeId,
            price: price,
            description: description,
            image_url: imageUrl,
            phone_number: phoneNumber,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode,
            operation_hours: operationHours,
            latitude: latitude,
            longitude: longitude
        }),
    });
    const data = await res.json();

    if (res.ok) {
        dispatch(addVenue(data))
    } else {
        throw res;
    };
    return data
}

export const updateVenue = venueData => async dispatch => {
    const { userId, name, dateTypeId, price, description, imageUrl, phoneNumber, address, city, state, zipcode, operationHours, latitude, longitude, venueId } = venueData
    const res = await fetch(`/api/venues/${venueId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            creator_id: userId,
            name: name,
            date_type_id: dateTypeId,
            price: price,
            description: description,
            image_url: imageUrl,
            phone_number: phoneNumber,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode,
            operation_hours: operationHours,
            latitude: latitude,
            longitude: longitude
        }),
    });
    const data = await res.json();

    if (res.ok) {
        dispatch(changeVenue(data))
    } else {
        throw res;
    };
    return data
}

export const deleteVenue = venueId => async dispatch => {
    const res = await fetch(`/api/venues/${venueId}/`, {
        method: 'DELETE',
    })

    if (res.ok) {
        dispatch(removeVenue(venueId))
    } else {
        throw res;
    };
}


const initialState = {}
const venuesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case READ_SINGLE_VENUE:
            newState = { ...state };
            newState.current = action.payload;
            return newState;

        case READ_ALL_VENUES:
            newState = { ...action.payload };
            return newState;

        case CREATE_VENUE:
            newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState;

        case UPDATE_VENUE:
            newState = { ...state };
            newState.current = action.payload;
            return newState;

        case DELETE_VENUE:
            newState = { ...state };
            delete newState[action.payload];
            return newState;

        default:
            return state;
    }
}

export default venuesReducer;
