import React from "react"
import MediaQuery from 'react-responsive'

import "./styles/Auth.css"
import InfoCompany from "./InfoCompany.jsx"
import AccountPanelInfo from "./AccountPanelInfo.jsx"


export default function Auth() {    
    return(
        <div className="account-panel-auth">
            <InfoCompany/>
            <MediaQuery orientation="landscape">
                <AccountPanelInfo/>
            </MediaQuery>
        </div>
    )
}