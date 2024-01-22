import React from "react"
import { Route, Routes } from "react-router-dom"

import "./styles/Main.css"
import Home from "./Home/Home.jsx"
import Login from "./Login/Login.jsx"
import Search from "./Search/Search.jsx"

export default function Main() {
    return(
        <main>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/login" element={ <Login/> } />
                <Route path="/search" element={ <Search/> } />
            </Routes>
        </main>
    )
}