import {createSlice} from "@reduxjs/toolkit";
import {ISearch} from "../../interfaces/movieInterface";

const initialState: ISearch = {
    querySearchData: null
}

const searchQuery = createSlice({
    name: 'searchQuery',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.querySearchData = action.payload.query
        }
    }
});

const {reducer: searchQueryReducer, actions: searchQueryActions} = searchQuery;

export {
    searchQueryReducer,
    searchQueryActions
}