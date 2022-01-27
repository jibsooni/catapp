import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: true,
};

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.isLoggedIn = false;
        }
    },
}); 

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer; 