import React from "react"

import "./styles/HomeTariff.css"
import SlideTariff from "./SlideTariff.jsx"


export default function HomeTariff() {
    return(
        <div className="home-tariff">
            <h2>наши тарифы</h2>
            <div className="home-tariff-slider">
                <SlideTariff/>
            </div>
        </div>
    )
}