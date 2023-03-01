import { createSlice } from "@reduxjs/toolkit";
const initialState = {currentQ: 0}

export const questionSlice = createSlice({
    name: 'questionSlice',
    initialState,
    reducers: {
        next(state){
            state.currentQ += 1
        }
    }
})