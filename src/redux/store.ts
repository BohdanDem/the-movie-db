import {configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slices/moviesSlice";
import {authReducer} from "./slices/authSlice";
import {themeReducer} from "./slices/themeSlice";
import {genresReducer} from "./slices/genresSlice";
import {singleGenreIdReducer} from "./slices/singleGenreIdSlice";
import {searchQueryReducer} from "./slices/searchQuerySlice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        me: authReducer,
        theme: themeReducer,
        genres: genresReducer,
        singleGenreId: singleGenreIdReducer,
        querySearch: searchQueryReducer
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