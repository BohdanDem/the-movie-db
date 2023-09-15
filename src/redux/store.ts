import {configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slices/moviesSlice";
import {authReducer} from "./slices/authSlice";
import {themeReducer} from "./slices/themeSlice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        me: authReducer,
        theme: themeReducer
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}

export {
    store
}