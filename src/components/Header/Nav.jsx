import React from "react"

import "./styles/Nav.css"
import { navList } from "../../export/lists"


export default function Nav() {
    return(
        <nav>
            <ol>
                { navList.map((object) => 
                    <li key={object.id} onClick={() => location.replace(location.origin + object.link)}>{object.name}</li>
                )}
            </ol>
        </nav>
    )
}