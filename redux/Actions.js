export const ADD_FAVORITE_RESTAURANT = "ADD_FAVORITE_RESTAURANT";
export const DELETE_FAVORITE_RESTAURANT = "DELETE_FAVORITE_RESTAURANT";

export const addFavoriteRestaurant = (restaurant) => (dispatch) => {
    dispatch({
        type: ADD_FAVORITE_RESTAURANT,
        payload: restaurant,
    });
};
export const deleteFavoriteRestaurant = (restaurant) => (dispatch) => {
    dispatch({
        type: DELETE_FAVORITE_RESTAURANT,
        payload: restaurant,
    });
};
