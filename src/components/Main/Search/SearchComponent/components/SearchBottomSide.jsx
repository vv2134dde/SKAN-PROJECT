import React from "react"
import { useDispatch } from "react-redux"

import "./styles/SearchBottomSide.css"
import { setSearchRequest } from "../../../../../store/objectSearchRequestSlice"


export default function SearchBottomSide() {
    const date = new Date(Date.now())
    const dateNow = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

    const dateStartRef = React.createRef()
    const dateEndRef = React.createRef()
    const dateErrorRef = React.createRef()
    const dateSpanRef = React.createRef()

    const [ dateStartMax, setDateStartMax ] = React.useState(dateNow)

    const dispatch = useDispatch()
    const setDate = (obj) => dispatch(setSearchRequest(obj))

    function dateChange(e) {
        e.target.type = "text"
        if (e.target.value && e.target.value <= e.target.max) {
            dateValidation(e.target, true)
            if (e.target.placeholder === "Дата конца") {
                setDateStartMax(e.target.value)
                if (e.target.value < dateStartRef.current.value){
                    dateStartRef.current.value = ""
                    setDateStartMax(dateNow)
                    dateValidation(e.target, false)
                } else {setDate({target: "dateEnd", value: e.target.value + "T23:59:59+03:00"})}
            } else {setDate({target: "dateStart", value: e.target.value + "T00:00:00+03:00"})}
        } else {
            dateValidation(e.target, false)
        }
    }

    function dateValidation(target, valid) {
        if (valid) {
            target.classList.remove("invalid")
            dateSpanRef.current.classList.remove("invalid")
            dateErrorRef.current.classList.add("hidden")
        } else {
            target.value = ""
            target.classList.add("invalid")
            dateSpanRef.current.classList.add("invalid")
            dateErrorRef.current.classList.remove("hidden")
        }
    }

    return(
        <div className="main-search-content-search-bottom">
            <p>Диапазон поиска<span ref={dateSpanRef}>*</span></p>
            <div className="main-search-content-search-input-date-searchrange">
                <input 
                className="main-search-content-search-input date-start"
                type="text"
                placeholder="Дата начала"
                max={dateStartMax}
                ref={dateStartRef}
                onFocus={e => e.target.type = "date"}
                onBlur={dateChange}
                onChange={() => setDate({target: "dateStart", value: ""})}
                />
                <input
                className="main-search-content-search-input date-finish"
                type="text"
                placeholder="Дата конца"
                max={dateNow}
                ref={dateEndRef}
                onFocus={e => e.target.type = "date"}
                onBlur={dateChange}
                onChange={() => setDate({target: "dateEnd", value: ""})}
                />
            </div>
            <p className="date-error hidden" ref={dateErrorRef}>Введите корректные данные</p>
        </div>
    )
}