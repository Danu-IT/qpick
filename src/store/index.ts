import { combineReducers, configureStore } from "@reduxjs/toolkit";
import slices from './slices';

const rootReducer = combineReducers(slices);

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];