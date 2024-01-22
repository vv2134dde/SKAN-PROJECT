import React from "react"
import { useDispatch } from "react-redux"

import { setSearchRequest } from "../../../../../../store/objectSearchRequestSlice"


export default function SearchLeftSideINN(props) {
    const dispatch = useDispatch()
    const setINN = (obj) => dispatch(setSearchRequest(obj))
    const innErrorText = React.createRef()
    const innSpan = React.createRef()
    const inputInn = React.createRef()

    function changeValue(e) {
        setINN({target: "INN", value: ""})
        const value = props.inputAdjustment(e.target.value)
        mask(value)
    }

    function inputInnBlur(e) {
        validateINN(e.target.value)
    }

    function mask(value) {
        const regular = value.match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})/)
        value = regular.slice(1, 5).join(" ").trim()
        inputInn.current.value = value
        if (value.length == 13) {validateINN(value)}
    }

    function validateINN(value) {
        const INN = value.replace(/\s/g, "").split("")
        const validateNumder = (INN.slice(0, 9).map((x, id) => parseInt(x) * coef[id]).reduce((sum, a) => sum + a, 0) % 11).toString()

        if (INN.length == 10 && validateNumder[validateNumder.length - 1] == INN.slice(-1)) {
            inputInn.current.classList.remove("invalid")
            innSpan.current.classList.remove("invalid")
            innErrorText.current.classList.add("hidden")
            setINN({target: "INN", value: value})
        } else {
            inputInn.current.classList.add("invalid")
            innSpan.current.classList.add("invalid")
            innErrorText.current.classList.remove("hidden")
        }
    }

    return(
        <div className="main-search-content-search-leftside-container">
            <p>ИНН компании<span ref={innSpan}>*</span></p>
            <div>
                <input 
                    className="main-search-content-search-input inn-input" 
                    type="text"
                    placeholder="10 цифр"
                    maxLength="13"
                    onChange={changeValue}
                    onBlur={inputInnBlur}
                    data-mask="INN"
                    ref={inputInn}
                />
                <p className="inn-error hidden" ref={innErrorText}>Введите корректные данные</p>
            </div>
        </div>
    )
}
