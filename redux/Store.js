import { combineReducers, configureStore } from "@reduxjs/toolkit";

import RestaurantReducer from "./Reducers";

const rootReducer = combineReducers({
    RestaurantReducer: RestaurantReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
});
