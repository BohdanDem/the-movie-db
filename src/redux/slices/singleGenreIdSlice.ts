import {createSlice} from "@reduxjs/toolkit";

interface IState {
    id: number,
    name: string
}

const initialState: IState = {
    id: null,
    name: null
}

const singleGenreIdSlice = createSlice({
    name: 'singleGenreIdSlice',
    initialState,
    reducers: {
        setSingleGenreId: (state, action) => {
            state.id = action.payload.id
            state.name = action.payload.name
        }
    }
});

const {reducer: singleGenreIdReducer, actions: singleGenreIdActions} = singleGenreIdSlice;

export {
    singleGenreIdReducer,
    singleGenreIdActions
}