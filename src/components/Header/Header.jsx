import React from "react"
import MediaQuery from 'react-responsive'

import "./styles/Header.css"
import Nav from "./Nav.jsx"
import Unauth from "./Unauth.jsx"
import Auth from "./Auth.jsx"
import PortaitHeader from "./PortaitHeader.jsx"


export default function Header() {
    const [portaitHeader, setPortaitHeader] = React.useState(false)

    return(
        <header>
            <MediaQuery orientation="portrait">
                { portaitHeader ? <PortaitHeader setPortaitHeader={setPortaitHeader}/> : ""}
            </MediaQuery>
            <div className="header-content">
                <div className="logo-container">
                    <div className="logo" style={{cursor: "pointer"}} onClick={() => location.replace(location.origin)}/>
                </div>
                <MediaQuery orientation="landscape">
                    <Nav/>
                    { !localStorage.getItem("accessToken") ? <Unauth/> : "" }
                </MediaQuery>
                { localStorage.getItem("accessToken") ? <Auth/> : "" }
                <MediaQuery orientation="portrait">
                    { !localStorage.getItem("accessToken") ? <div/> : "" }
                    <button className="open-portait-header" onClick={()=> setPortaitHeader(true)}></button>
                </MediaQuery>
            </div>
        </header>
    )
}