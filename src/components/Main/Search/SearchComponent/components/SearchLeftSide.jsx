import React from "react"
import { useDispatch } from "react-redux"

import "./styles/SearchLeftSide.css"
import SearchLeftSideINN from "./components/SearchLeftSideINN.jsx"
import { setSearchRequest } from "../../../../../store/objectSearchRequestSlice"


export default function SearchLeftSide() {
    const dispatch = useDispatch()
    const setRequest = (obj) => dispatch(setSearchRequest(obj))

    function inputAdjustment(value) {
        return value.replace(/\D/g, "")
    }

    function limitChange(e) {
        const target = e.target
        let value = inputAdjustment(target.value)
        setRequest({target: "limit", value: ""})

        if (value > parseInt(target.dataset.limit)) {
            value = target.dataset.limit
        }
        
        if (value) {
            setRequest({target: "limit", value: value})
        }

        target.value = value
    }

    function tonalityChange(e) {
        e.target.blur()
        setRequest({target: "tonality", value: e.target.value})
    }

    return(
        <div className="main-search-content-search-leftside">
            <SearchLeftSideINN inputAdjustment={inputAdjustment}/>
            <div className="main-search-content-search-leftside-container">
                <p>Тональность</p>
                <div>
                <select 
                    className="main-search-content-search-input select"
                    onChange={tonalityChange}
                >
                    <option value="any">Любая</option>
                    <option value="positive">Позитивная</option>
                    <option value="negative">Негативная</option>
                </select>
                <p className="inn-error hidden">Введите корректные данные</p>
                </div>
            </div>
            <div className="main-search-content-search-leftside-container">
                <p>Количество документов в выдаче<span>*</span></p>
                <div>
                <input
                    className="main-search-content-search-input" 
                    type="text" 
                    placeholder="От 1 до 1000"
                    maxLength="4"
                    onChange={limitChange}
                    data-limit="1000"
                />
                <p className="inn-error hidden">Введите корректные данные</p>
                </div>
            </div>
        </div>
    )
}