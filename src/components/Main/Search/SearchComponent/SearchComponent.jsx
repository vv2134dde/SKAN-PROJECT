import React from "react"

import "./styles/SearchComponent.css"
import SearchLeftSide from "./components/SearchLeftSide.jsx"
import SearchRightSide from "./components/SearchRightSide.jsx"
import SearchBottomSide from "./components/SearchBottomSide.jsx"
import SearchButton from "./components/SearchButton.jsx"


export default function SearchComponent() {
    return(
        <div className="main-search">
            <div className="main-search-content">
                <h1>Найдите необходимые данные в пару кликов.</h1>
                <p>Задайте параметры поиска.<br/>Чем больше заполните, тем точнее поиск</p>
                <div className="main-search-content-search">
                    <SearchLeftSide/>
                    <SearchRightSide/>
                    <SearchBottomSide/>
                    <SearchButton/>
                </div>
            </div>
        </div>
    )
}