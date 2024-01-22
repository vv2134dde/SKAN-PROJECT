import React from "react"

import "./styles/HomeTitle.css"
import { Link } from "react-router-dom"


export default function HomeTitle() {
    return(
        <div className="home-title">
            <div className="home-title-content">
                <h1>сервис по поиску публикаций<br/>о компании<br/>по его ИНН</h1>
                <p>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                <Link to="/search"><button className={ localStorage.getItem("accessToken") ? "": "hidden" }>Запросить данные</button></Link>
            </div>
        </div>
    )
}