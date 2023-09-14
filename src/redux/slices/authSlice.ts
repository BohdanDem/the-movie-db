import {createSlice} from "@reduxjs/toolkit";

interface IState {
    me: string
}

const initialState: IState = {
    me: "Demchuk Bohdan"
    //me: null
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setMe: (state, action) => {
            state.me = action.payload
        }
    }
});

const {reducer: authReducer, actions: authActions} = authSlice;

export {
    authReducer,
    authActions
}