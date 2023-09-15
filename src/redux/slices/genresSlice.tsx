import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {IGenre} from "../../interfaces/movieInterface";
import {genreService} from "../../services/genreService";

export interface IGenreRes {
    genres: IGenre[]
}

const initialState: IGenreRes = {
    genres: []
}

const getAll = createAsyncThunk<IGenreRes>(
    'genresSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err)
        }
    }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.genres = action.payload.genres
        })
})

const {reducer: genresReducer, actions} = genresSlice;

const genresActions = {
    ...actions,
    getAll
}

export {
    genresReducer,
    genresActions
}