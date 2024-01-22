import React from "react"

import "./styles/Unauth.css"


export default function Unauth() {
    return(
        <>
        <div className="account-panel-unauth">
            <button className="account-panel-unauth-button-reg">Зарегистрироваться</button>
            <a href="/login">
                <button className="account-panel-unauth-button-login">
                    Войти
                </button>
            </a>
        </div>
        </>
    )
}