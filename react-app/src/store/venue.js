const READ_SINGLE_REVIEW = 'review/READ_SINGLE_REVIEW'
const READ_ALL_REVIEWS = 'review/READ_ALL_REVIEWS'
const CREATE_REVIEW = 'review/CREATE_REVIEW'
const UPDATE_REVIEW = 'review/UPDATE_REVIEW'
const DELETE_REVIEW = 'review/DELETE_REVIEW'


const loadOneReview = review => ({
    type: READ_SINGLE_REVIEW,
    payload: review
});

const loadAllReviews = reviews => ({
    type: READ_ALL_REVIEWS,
    payload: reviews
});

const addReview = review => ({
    type: CREATE_REVIEW,
    payload: review
});

const changeReview = review => ({
    type: UPDATE_REVIEW,
    payload: review
});

const removeReview = review => ({
    type: DELETE_REVIEW,
    payload: review
});


export const getOneRating = ratingId => async dispatch => {
    const res = await fetch(`/api/ratings/${ratingId}/`)
    const data = await res.json();

    if (res.ok) dispatch(loadOneReview(data));
}

export const getAllUserRatings = userId => async dispatch => {
    const res = await fetch(`/api/ratings/users/${userId}/`);
    const data = await res.json();

    if (res.ok) dispatch(loadAllReviews(data));
}

export const getAllItemRatings = menuItemId => async dispatch => {
    const res = await fetch(`/api/ratings/menuitems/${menuItemId}/`);
    const data = await res.json();

    if (res.ok) dispatch(loadAllReviews(data));
}

export const createRating = ratingData => async dispatch => {
    const { userId, menuItemId, review, rating } = ratingData

    const res = await fetch(`/api/ratings/create/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: userId,
            menu_item_id: menuItemId,
            review: review,
            rating: rating
        }),
    });
    const data = await res.json();

    if (res.ok) dispatch(addReview(data.rating));
    return data
}

export const updateRating = ratingData => async dispatch => {
    const { userId, menuItemId, review, rating, ratingId } = ratingData

    const res = await fetch(`/api/ratings/${ratingId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: userId,
            menu_item_id: menuItemId,
            review: review,
            rating: rating
        }),
    });
    const data = await res.json();

    if (res.ok) dispatch(changeReview(data));
    return data
}

export const deleteRating = ratingId => async dispatch => {
    const res = await fetch(`/api/ratings/${ratingId}/`, {
        method: 'DELETE',
    })

    if (res.ok) dispatch(removeReview(ratingId));
}


const initialState = {}
const ratingsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case READ_SINGLE_RATING:
            newState = { ...state };
            newState.current = action.payload;
            return newState;

        case READ_ALL_RATINGS:
            newState = { ...action.payload };
            return newState

        case CREATE_RATING:
            newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState

        case UPDATE_RATING:
            newState = {
                ...state,
                [action.payload.id]: action.payload
            }
            return newState;

        case DELETE_RATING:
            newState = { ...state }
            delete newState[action.payload]
            return newState

        default:
            return state;
    }
}

export default ratingsReducer;
