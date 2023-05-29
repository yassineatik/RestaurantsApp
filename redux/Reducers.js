import { ADD_FAVORITE_RESTAURANT, DELETE_FAVORITE_RESTAURANT } from "./Actions";
const initialState = {
    favoriteRestaurants: [],
};

export const RestaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE_RESTAURANT:
            return {
                ...state,
                favoriteRestaurants: [
                    ...state.favoriteRestaurants,
                    action.payload,
                ],
            };
        case DELETE_FAVORITE_RESTAURANT:
            return {
                ...state,
                favoriteRestaurants: state.favoriteRestaurants.filter(
                    (restaurant) => restaurant._id !== action.payload._id
                ),
            };
        default:
            return state;
    }
};
export default RestaurantReducer;
