import React from "react";
import { useSelector } from "react-redux"

import "./styles/TableLandscape.css"
import TableHeadline from "./TableHeadline.jsx"


export default function TableLandscape() {
    let mouseDown = false

    const histograms = useSelector(state => state.histograms)

    const chevronLeftRef = React.createRef()
    const chevronRightRef = React.createRef()
    const tableContainerRef = React.createRef()
    const tableRef = React.createRef()

    async function carousel(e) {
        const maxLeft = tableContainerRef.current.offsetWidth - tableRef.current.offsetWidth
        if(maxLeft >= 0) {
            return
        }
        window.addEventListener("click", setMouseDown)
        window.addEventListener("mouseout", setMouseDown)
        let offset = 1
        mouseDown = true
        const interval = setInterval(()=> {
            if (e.target.dataset.chevron == "right"){
                if (parseInt(tableRef.current.style.left.replace("px", "")) > maxLeft){
                    tableRef.current.style.left = `${parseInt(tableRef.current.style.left.replace("px", "")) - offset}px`
                } else {
                    tableRef.current.style.left = maxLeft-20+"px"
                    e.target.classList.remove("chevron-active-right")
                }
                if (!chevronLeftRef.current.classList.contains("chevron-active-left")) {chevronLeftRef.current.classList.add("chevron-active-left")}
            }
            if (e.target.dataset.chevron == "left"){
                if (parseInt(tableRef.current.style.left.replace("px", "")) < -1 && e.target.dataset.chevron == "left"){
                    tableRef.current.style.left = `${parseInt(tableRef.current.style.left.replace("px", "")) + offset}px`
                } else {
                    tableRef.current.style.left = "20px"
                    e.target.classList.remove("chevron-active-left")
                }
                if (!chevronRightRef.current.classList.contains("chevron-active-right")) {chevronRightRef.current.classList.add("chevron-active-right")}
            }
            if (offset < 20) {offset *= 1.3}
            if (!mouseDown) {
                window.removeEventListener("click", setMouseDown)
                window.removeEventListener("mouseout", setMouseDown)
                clearInterval(interval)
            }
        }, 20)
    }

    function setMouseDown() {
        mouseDown=false
    }

    React.useEffect(() => {
        document.getElementById("histograms-table").style.left = "0px"
    }, [])

    return(
        <div className="main-result-content-table-chevron">
            <div className="chevron chevron-left" ref={chevronLeftRef} onMouseDown={carousel} data-chevron="left"/>
            <div className="main-result-content-table-container">
                <TableHeadline/>
                <div className={ histograms.date.length ? "main-result-content-table-container-content": "main-result-content-table-container-content flex-center-center"} ref={tableContainerRef}>
                    <table id="histograms-table" ref={tableRef}>
                        { histograms.date.length ? 
                            <tbody>
                                <tr>{ histograms.date.map((date, id) => <td key={"date-"+id}>{date}</td>)}</tr>
                                <tr>{ histograms.all.map((elem, id) => <td key={"elem-"+id}>{elem}</td>)}</tr>
                                <tr>{ histograms.risks.map((risk, id) => <td key={"risk-"+id}>{risk}</td>)}</tr>
                            </tbody>:
                            <tbody className="main-result-content-table-container-content-load">
                                <tr><td className="loading"/></tr>
                                <tr><td>Загружаем данные</td></tr>
                            </tbody>
                        }
                    </table>
                </div>
            </div>
            <div className="chevron chevron-right chevron-active-right" ref={chevronRightRef} onMouseDown={carousel} data-chevron="right"/>
        </div>
    )
}