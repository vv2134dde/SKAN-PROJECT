import React from "react"

import "./styles/ResultComponent.css"
import ResultTable from "./components/ResultTable/ResultTable.jsx"
import ResultPublication from "./components/ResultPublication/ResultPublication.jsx"


export default function ResultComponent() {

    return(
        <>
        <div className="main-result">
            <div className="main-result-content">
                <div className="main-result-content-title">
                    <h1><span>Ищем</span>. Скоро будут результаты</h1>
                    <p>Поиск может занять некоторое время, <span>просим сохранять терпение.</span></p>
                    <div className="main-result-content-img"/>
                </div>
                <ResultTable/>
                <ResultPublication/>
            </div>
        </div>
        </>
    )
}