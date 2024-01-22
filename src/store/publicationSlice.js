import { createSlice } from "@reduxjs/toolkit"


const publicationSlice = createSlice({
    name: "histograms",
    initialState: {
        publicationID: [],
        publication: [],
    },
    reducers: {
        writePublicationIDs(state, action) {
            state.publicationID = action.payload.slice(2)
        },
        popPublicationID(state, action) {
            state.publicationID = state.publicationID.slice(action.payload)
        },
        addPublication(state, action) {
            action.payload.map((pub) => state.publication.push(pub))
        }
    }
});

export const {  writePublicationIDs, addPublication, popPublicationID } = publicationSlice.actions;

export default publicationSlice.reducer;