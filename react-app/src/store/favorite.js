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
        dispatch(loadOneFavorite(data))
    } else {
        throw res
    };
}

export const getAllUserFavorites = userId => async dispatch => {
    const res = await fetch(`/api/favorites/users/${userId}/`);
    const data = await res.json();

    if (res.ok) {
        dispatch(loadAllUserFavorites(data))
    } else {
        throw res
    };
}

export const createFavorites = favoriteInfo => async dispatch => {
    const { userId, venueId } = favoriteInfo
    const res = await fetch(`/api/favorites/create/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: userId,
            venue_id: venueId,
        })
    });
    const data = await res.json();

    if (res.ok) {
        dispatch(addFavorites(data))
    } else {
        throw res
    };
    return data;
}

export const deleteFavorites = favoriteId => async dispatch => {
    const res = await fetch(`/api/favorites/${favoriteId}/`, {
        method: 'DELETE',
    })

    if (res.ok) {
        dispatch(removeFavorite(favoriteId))
    } else {
        throw res
    };
}

const initialState = {}

const favorite = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_FAVORITE:
            newState = { ...state };
            newState.current = action.payload;
            return newState;

        case GET_ALL_FAVORITES:
            newState = {}
            action.payload.forEach((favorite) => {
                newState[favorite.id] = favorite;
            })
            return newState;

        case CREATE_FAVORITE:
            newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState;

        case DELETE_FAVORITE:
            newState = { ...state };
            delete newState[action.payload];
            return newState;

        default:
            return state;
    }
}

export default favorite;
