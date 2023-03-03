import { createSlice } from "@reduxjs/toolkit";

const initialState = {answer: []}

export const answerSlice = createSlice({
    name: 'answerSlice',
    initialState,
    reducers:{
        add(state,action){
            state.answer[action.payload.index] = {
                ans: action.payload.ans,
                time: action.payload.time
            }
        }
    }
})