import {IMovie} from "../../interfaces/movieInterface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {movieService} from "../../services/movieService";

export interface IMovieRes {
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number
}

const initialState: IMovieRes = {
    page: null,
    results: [],
    total_pages: null,
    total_results: null
}

const getAll = createAsyncThunk<IMovieRes, {page:number}>(
    'moviesSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err)
        }
    }
)

const setAllByGenre = createAsyncThunk<IMovieRes, {page:number, with_genres:number}>(
    'moviesSlice/setAll',
    async ({page, with_genres}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllByGenre(page, with_genres);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err)
        }
    }
)

const getAllBySearch = createAsyncThunk<IMovieRes, {page:number, query:string}>(
    'moviesSlice/getAllBySearch',
    async ({page, query}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllBySearch(page, query);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err)
        }
    }
)

const moviesSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.page = action.payload.page
            state.results = action.payload.results
            state.total_pages = action.payload.total_pages
            state.total_results = action.payload.total_results
        })
        .addCase(setAllByGenre.fulfilled, (state, action) => {
            state.page = action.payload.page
            state.results = action.payload.results
            state.total_pages = action.payload.total_pages
            state.total_results = action.payload.total_results
        })
        .addCase(getAllBySearch.fulfilled, (state, action) => {
            state.page = action.payload.page
            state.results = action.payload.results
            state.total_pages = action.payload.total_pages
            state.total_results = action.payload.total_results
        })
})

const {reducer: moviesReducer, actions} = moviesSlice;

const moviesActions = {
    ...actions,
    getAll,
    setAllByGenre,
    getAllBySearch
}

export {
    moviesActions,
    moviesReducer
}