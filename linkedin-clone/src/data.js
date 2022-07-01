import { createSlice } from "@reduxjs/toolkit";


export const user = createSlice({
    name: 'data',
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.user= action.payload
        },
        logout: state => {
            state.user = null
        }
    }
})

export const { login, logout } = user.actions

export const selectUser=state=>state.data.user

export default user.reducer