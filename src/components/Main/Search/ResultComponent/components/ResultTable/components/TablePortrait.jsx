import React from "react"
import { useSelector } from "react-redux"

import "./styles/TablePortrait.css"
import TableHeadline from "./TableHeadline.jsx"


export default function TablePortrait() {
    const [tableCount, setTableCount] = React.useState(0)
    const histograms = useSelector(state => state.histograms)

    function slide(e) {
        if (histograms.date.length) {
            if (e.target.dataset.chevron == "left"){
                if (tableCount > 0){setTableCount(tableCount - 1)}
            } else {
                if (tableCount < histograms.date.length - 1){setTableCount(tableCount + 1)}
            }
        }
    }

    return(
        <div className="main-result-content-table-chevron">
            <div className={ tableCount == 0 || !histograms.date.length ?"chevron chevron-left" :"chevron chevron-left chevron-active-left"}  onClick={slide} data-chevron="left"/>
            <div className="main-result-content-table-container-portrait">
                <TableHeadline/>
                <div className="main-result-content-table-container-portrait-content">
                    { histograms.date.length ?
                    <>
                    <span>{histograms.date[tableCount]}</span>
                    <span>{histograms.all[tableCount]}</span>
                    <span>{histograms.risks[tableCount]}</span>
                    </>:
                    <div className="main-result-content-table-container-portrait-content-loading loading"/>
                    }
                </div>
            </div>
            <div className={ tableCount == histograms.date.length - 1 || !histograms.date.length ?"chevron chevron-right" :"chevron chevron-right chevron-active-right"} onClick={slide} data-chevron="right"/>
        </div>
    )
}