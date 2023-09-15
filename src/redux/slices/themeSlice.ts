import {createSlice} from "@reduxjs/toolkit";

interface IState {
    themeSwitch: boolean
}

const initialState: IState = {
    themeSwitch: false
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        changeThemeSwitch: (state) => {
            state.themeSwitch = !state.themeSwitch
        },
    }
});

const {reducer: themeReducer, actions: themeActions} = themeSlice;

export {
    themeReducer,
    themeActions
}