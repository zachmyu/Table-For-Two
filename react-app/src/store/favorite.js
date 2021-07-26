const GET_FAVORITES = 'favorites/GET_FAVORITE'
const CREATE_FAVORITE = 'favorites/CREATE_FAVORITE'
const DELETE_FAVORITE = 'favorites/DELETE_FAVORITE'

const loadFavorites = favorite => ({
    type: GET_FAVORITES,
    favorite
})


const addFavorites = favorite => ({
    type: CREATE_FAVORITE,
    favorite
})

const deleteSingleFavorite = favorite => ({
    type: DELETE_FAVORITE,
    favorite
})




export const createFavorites = (favoriteInfo) => async (dispatch) => {
    const response = await fetch(`/api/favorites/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(favoriteInfo)
    })
    if (response.ok) {
        const newFavorite = await response.json()
        dispatch(addFavorites(newFavorite))
    }
}


export const deleteFavorites = (favoriteId) => async (dispatch) => {
    const response = await fetch(`/api/favorites/${favoriteId}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(deleteSingleFavorite(favoriteId))
    }
}

export const getFavorites = (user_id) => async (dispatch) => {
    const response = await fetch(`/api/favorites/${user_id}`)

    if (response.ok) {
        const favorites = await response.json()
        dispatch(loadFavorites(favorites))
    }
}

const initialState = {}

export default function favorites(state = initialState, action) {
    let updatedState = { ...state }
    // let newState;
    switch (action.type) {
        case GET_FAVORITES: {
            let newState = {}
            newState[action.favorite.id] = action.favorite
            return newState
        }


        case CREATE_FAVORITE:
            updatedState[action.favorite.id] = action.favorite
            return updatedState
        case DELETE_FAVORITE: {
            delete updatedState[action.favorite]
            return updatedState
        }
        default:
            return state
    }
}
