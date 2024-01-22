import React from "react"
import MediaQuery from "react-responsive"

import "./styles/SlideTariff.css"
import { tariffList } from "../../../../export/lists"


export default function SlideTariff() {
    return(
        <>
        { 
        tariffList.map((tariff) => 
            <div 
            className="slide-tariff" 
            key={tariff.id} 
            style={ localStorage.getItem("accessToken") && tariff.picked ? tariff.pickedStyle : {} }
            >
                <div 
                className="tariff-title" 
                style={tariff.titleStyle}
                >
                    <div className="tariff-title-content">
                        <h3>{tariff.title}</h3>
                        <p>{tariff.titleDescription}</p>
                    </div>
                </div>
                <div 
                className="tarrif-content"
                >
                    <MediaQuery orientation="landscape">
                        <p className= { localStorage.getItem("accessToken") && tariff.picked ? "current-tariff" : "current-tariff hidden" }>
                            Текущий тариф
                        </p> 
                    </MediaQuery>
                    <h3>{tariff.price} ₽<s>{tariff.oldPrice} ₽</s></h3>
                    <p className={ tariff.installmentPlanPrice ? "": "hidden" }>
                        или { tariff.installmentPlanPrice } ₽/мес. при рассрочке на 24 мес.
                    </p>
                    <div className="tariff-includes">
                        <h4>В тариф входит:</h4>
                        <ul>
                            {tariff.tariffIncludes.map((tariffInclude, id) =>  <li key={id}><p>{tariffInclude}</p></li>)}
                        </ul>
                    </div>
                </div>
                { localStorage.getItem("accessToken") && tariff.picked ? 
                <button className="tariff-button picked-tariff-button"> Перейти в личный кабинет</button> : 
                <button className="tariff-button">Подробнее</button> }
            </div>)
        }
        </>
    )
}