import React from "react"

import "./styles/WhyUs.css"
import WhyUsSlide from "./WhyUsSlide.jsx"


export default function WhyUs() {
    return(
        <div className="whyus">
            <div className="whyus-title">
                <h2>почему именно мы</h2>
            </div>
            <div className="whyus-slides">
                    <WhyUsSlide/>
            </div>
        </div>
    )
}