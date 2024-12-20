import { createSlice } from "@reduxjs/toolkit";
import { TypeFrom, TypeInitState } from "./types";

const initialState: TypeInitState = {
    from: {} as TypeFrom,
    to: {} as TypeFrom,
    travelTime: 0,
    selectedOption: ''
}

export const taxiSlice = createSlice({
    name: 'taxi',
    initialState,
    reducers: {
        setFrom: (state, action) => {
            state.from = action.payload;
        },

        setTo: (state, action) => {
            state.to = action.payload;
        },

        setTravelTime: (state, action) => {
            state.travelTime = action.payload;
        },

        setSelectedOption: (state, action) => {
            state.selectedOption = action.payload;
        }
    }
})