import { configureStore } from "@reduxjs/toolkit"

import objectSearchRequestSlice from "./objectSearchRequestSlice"
import histogramsSlice from "./histogramsSlice"
import publicationSlice from "./publicationSlice"


export default configureStore({
    reducer: {
        objectSearchRequest: objectSearchRequestSlice,
        histograms: histogramsSlice,
        publication: publicationSlice,
    }
})