import React from "react"

import "../styles/styles.css"
import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"
import Main from "./Main/Main.jsx"
import { logout } from "../export/featchAPI"


export default function App() {
    const timeNow = new Date(Date.now())
    const expire = new Date(localStorage.expire)

    React.useEffect(()=>{
        if (timeNow > expire) {
            logout()
        }
    }, [])

    return (
        <>
        <Header/>
        <Main/>
        <Footer/>
        </>
    )
};