import React from "react"

import "./styles/PortaitHeader.css"
import Nav from "./Nav.jsx"
import Unauth from "./Unauth.jsx"
import AccountPanelInfo from "./AccountPanelInfo.jsx"


export default function PortaitHeader({ setPortaitHeader }) {
    const closePortaitHeader = React.useCallback(() => {
        setPortaitHeader(false)
    }, [closePortaitHeader])

    return(        
        <div className="portait-header">
            <div className="portait-header-header">
                <div className="logo logo-alt" style={{cursor: "pointer"}} onClick={() => location.replace(location.origin)}/>
                <button className="close-portait-header" onClick={closePortaitHeader}/>
            </div>
            <div className="portait-header-content">
                <Nav/>
            </div>
            <div className="portait-header-account">
                { localStorage.getItem("accessToken") ? <AccountPanelInfo/> : <Unauth/> }
            </div>
        </div>
    )
}