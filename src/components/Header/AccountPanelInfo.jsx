import React from "react"

import "./styles/AccountPanelInfo.css"
import { logout } from "../../export/featchAPI"


export default function AccountPanelInfo() {
    return(
        <div className="account-panel-auth-info">
            <div className="user">
                <div>Username</div>
                <div onClick={logout}>Выйти</div>
            </div>
            <div className="avatar">
                <img src="/media/resources/tariff-begginer.svg"/>
            </div>
        </div>
    )
}