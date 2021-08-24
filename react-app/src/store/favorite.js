const GET_FAVORITE = 'rating/GET_FAVORITE'
const GET_ALL_FAVORITES = 'rating/GET_ALL_FAVORITES'
const CREATE_FAVORITE = 'rating/CREATE_FAVORITE'
const DELETE_FAVORITE = 'rating/DELETE_FAVORITE'

const loadOneFavorite = favorite => ({
    type: GET_FAVORITE,
    payload: favorite
});

const loadAllUserFavorites = favorites => ({
    type: GET_ALL_FAVORITES,
    payload: favorites
});

const addFavorites = favorite => ({
    type: CREATE_FAVORITE,
    payload: favorite
});

const removeFavorite = favoriteId => ({
    type: DELETE_FAVORITE,
    payload: favoriteId
});

export const getOneFavorite = favoriteId => async dispatch => {
    const res = await fetch(`/api/favorites/${favoriteId}/`)
    const data = await res.json();

    if (res.ok) {
        dispatch(loadOneRating(data))
    } else {
        throw res
    }
}

export const getAllUserRatings = userId => async dispatch => {
    const res = await fetch(`/api/ratings/users/${userId}/`);
    const data = await res.json();

    if (res.ok) {
        dispatch(loadAllRatings(data))
    } else {
        throw res
    }
}

export const getAllItemRatings = menuItemId => async dispatch => {
    const res = await fetch(`/api/ratings/menuitems/${menuItemId}/`);
    const data = await res.json();

    if (res.ok) {
        dispatch(loadAllRatings(data))
    } else {
        throw res
    }
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


    if (res.ok) {
        dispatch(addRating(data.rating))
    } else {
        throw res
    }
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

    if (res.ok) {
        dispatch(changeRating(data))
        // dispatch(loadOneRating(ratingId))
    } else {
        throw res
    }
    return data
}

export const deleteRating = ratingId => async dispatch => {
    const res = await fetch(`/api/ratings/${ratingId}/`, {
        method: 'DELETE',
    })

    if (res.ok) {
        dispatch(removeRating(ratingId));
    } else {
        throw res
    }
}

//Reducers
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
