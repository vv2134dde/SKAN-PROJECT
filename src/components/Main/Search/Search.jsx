import React from "react"
import { useDispatch, useSelector } from "react-redux"

import SearchComponent from "./SearchComponent/SearchComponent.jsx"
import ResultComponent from "./ResultComponent/ResultComponent.jsx"


export default function Search() {

    React.useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            location.replace(location.origin)
        }
    }, [])

    const searchStart = useSelector(state => state.objectSearchRequest.searchStart);

    return(
        <>
        { searchStart == 1 ?
            <ResultComponent/> :
            <SearchComponent/>
        }
        </>
    )
} 