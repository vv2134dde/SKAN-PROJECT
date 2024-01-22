import React from "react"

import "./syles/Home.css"
import HomeTitle from "./components/HomeTitle.jsx"
import WhyUs from "./components/WhyUs.jsx"
import DecorativeBackground1 from "./components/DecorativeBackground1.jsx"
import HomeTariff from "./components/HomeTariff.jsx"


export default function Home() {
    return(
        <div className="home">
            <HomeTitle/>
            <WhyUs/>
            <DecorativeBackground1/>
            <HomeTariff/>
        </div>
    )
}