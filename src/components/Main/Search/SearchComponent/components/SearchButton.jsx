import React from "react"
import { useDispatch, useSelector } from "react-redux"

import "./styles/SearchButton.css"
import { setSearchStart } from "../../../../../store/objectSearchRequestSlice"
import { writeHistograms } from "../../../../../store/histogramsSlice"
import { writePublicationIDs, addPublication } from "../../../../../store/publicationSlice"
import { objectSearch } from "../../../../../export/featchAPI"


export default function SearchButton() {
    const request = useSelector(state => state.objectSearchRequest);

    const dispatch = useDispatch()
    const setHistograms = (obj) => dispatch(writeHistograms(obj))
    const searchStart = (bool) => dispatch(setSearchStart(bool))
    const writePub = (obj) => dispatch(writePublicationIDs(obj))
    const addPub = (obj) => dispatch(addPublication(obj))

    async function buttonClick() {
        searchStart(1)
        const histograms = await objectSearch(request.search, "/objectsearch/histograms")
        if (histograms) {
            setHistograms({date: histograms.date, all: histograms.all, risks: histograms.risks})
            const publicationIDs = await objectSearch(request.search, "/objectsearch")
            writePub(publicationIDs)
            const publications = await objectSearch({ids: publicationIDs.slice(0, 2)}, "/documents")
            addPub(publications)
        } else {
            searchStart(2)
        }
    }

    return(
        <div className="main-search-content-search-button">
            <div className="main-search-content-search-button-container">
                { request.ready ? 
                <button className="button-active" onClick={buttonClick}>Поиск</button> :
                <button className="button-inactive">Поиск</button>
                }
                { request.searchStart == 2 ? 
                <p style={{color: "var(--color-red)"}}>По вашеме запросу ничего не нашлось</p> :
                <p>* Обязательные к заполнению поля</p>
                }
            </div>
        </div>
    )
}