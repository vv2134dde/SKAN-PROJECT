import React from "react"
import { useSelector } from "react-redux"
import MediaQuery from "react-responsive"

import "./styles/ResultTable.css"
import TableLandscape from "./components/TableLandscape.jsx"
import TablePortrait from "./components/TablePortrait.jsx"


export default function ResultTable() {
    const histograms = useSelector(state => state.histograms);

    function getTotalDocCount() {
        const docCount = histograms.all.reduce((sum, a) => sum + a)
        return `Найдено ${docCount} вариант${declensionsQuantity(docCount)}`
    }
    
    function declensionsQuantity(quantity) {
        const remainder = quantity % 10
        if (remainder == 1 && !(quantity == 11)) {
            return ""
        }
        if ([2, 3, 4].includes(remainder) && ![12, 13, 14].includes(quantity)) {
            return "а"
        } else {return "ов"}
    }

    return(
        <div className="main-result-content-table">
            <h2>общая сводка</h2>
            <span>{ histograms.date.length ? getTotalDocCount(): " " }</span>
            <MediaQuery orientation="landscape">
                <TableLandscape/>
            </MediaQuery>
            <MediaQuery orientation="portrait">
                <TablePortrait/>
            </MediaQuery>
        </div>
    )
}