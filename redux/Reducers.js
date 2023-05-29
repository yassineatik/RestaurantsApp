import { ADD_FAVORITE_RESTAURANT, DELETE_FAVORITE_RESTAURANT } from "./Actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    favoriteRestaurants: [],
};

AsyncStorage.getItem("favoriteRestaurants")
    .then((data) => {
        if (data) {
            try {
                initialState.favoriteRestaurants = JSON.parse(data);
            } catch (error) {
                console.error("Invalid JSON data in Asyncstorage:", error);
            }
        }
    })
    .catch((error) => {
        console.error("Error retrieving data from Asyncstorage:", error);
    });

export const RestaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE_RESTAURANT:
            const updatedAddState = {
                ...state,
                favoriteRestaurants: [
                    ...state.favoriteRestaurants,
                    action.payload,
                ],
            };
            AsyncStorage.setItem(
                "favoriteRestaurants",
                JSON.stringify(updatedAddState.favoriteRestaurants)
            );
            return updatedAddState;

        case DELETE_FAVORITE_RESTAURANT:
            const updatedDeleteState = {
                ...state,
                favoriteRestaurants: state.favoriteRestaurants.filter(
                    (restaurant) => restaurant._id !== action.payload._id
                ),
            };
            AsyncStorage.setItem(
                "favoriteRestaurants",
                JSON.stringify(updatedDeleteState.favoriteRestaurants)
            );
            return updatedDeleteState;
        default:
            return state;
    }
};
export default RestaurantReducer;
