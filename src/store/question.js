import { createSlice } from "@reduxjs/toolkit";
const initialState = {currentQ: 0, time: 0}

export const questionSlice = createSlice({
    name: 'questionSlice',
    initialState,
    reducers: {
        next(state){
            state.currentQ = state.currentQ + 1
        },
        setTime(state,action){
            state.time = action.payload
        }
    }
})
