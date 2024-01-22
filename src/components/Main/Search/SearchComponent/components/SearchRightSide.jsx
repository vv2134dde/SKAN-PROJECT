import React from "react"
import { useDispatch, useSelector } from "react-redux"

import "./styles/SearchRightSide.css"
import { setSearchRequest } from "../../../../../store/objectSearchRequestSlice"


export default function SearchRightSide() {
    const dispatch = useDispatch()
    const setFlag = (obj) => dispatch(setSearchRequest(obj))

    const searchCheckBox = [
        {
            id: 1,
            label: "Признак максимальной полноты",
            name: "maxFullness"
        },
        {
            id: 2,
            label: "Упоминания в бизнес-контексте",
            name: "inBusinessNews"
        },
        {
            id: 3,
            label: "Главная роль в публикации",
            name: "onlyMainRole"
        },
        {
            id: 4,
            label: "Публикации только с риск-факторами",
            name: "onlyWithRiskFactors"
        },
        {
            id: 5,
            label: "Включать технические новости рынков",
            name: "excludeTechNews"
        },
        {
            id: 6,
            label: "Включать анонсы и календари",
            name: "excludeAnnouncements"
        },
        {
            id: 7,
            label: "Включать сводки новостей",
            name: "excludeDigests"
        },
    ]

    function changeFlag(e) {
        setFlag({target: e.target.name, value: e.target.checked})
    }

    return(
        <div className="main-search-content-search-rightside">
            { searchCheckBox.map((obj) =>
            <p key={obj.id}>
                <input id={`serch-checkbox-${obj.id}`} className="serch-rightside-checkbox"  type="checkbox" name={obj.name} onClick={changeFlag}/>
                <label htmlFor={`serch-checkbox-${obj.id}`}>{obj.label}</label>
            </p>
            )}
        </div>
    )
}