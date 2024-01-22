import { createSlice } from "@reduxjs/toolkit"


const histogramsSlice = createSlice({
    name: "histograms",
    initialState: {
        date: [],
        all: [],
        risks: [],
    },
    reducers: {
        writeHistograms(state, action) {
            state.date = action.payload.date
            state.all = action.payload.all
            state.risks = action.payload.risks
        }
    }
});

export const { writeHistograms } = histogramsSlice.actions;

export default histogramsSlice.reducer;