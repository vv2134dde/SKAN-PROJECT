import React from "react"

import "./styles/Footer.css"


export default function Footer() {
    return(
        <footer>
            <div className="footer-content">
                <div className="logo logo-alt portrait-logo-footer"/>
                <div>
                    <div>
                        <p>г<span>. Москва</span>, Цветной б-р, 40</p>
                        <p>+7 495 771 21 11</p>
                        <p>info@skan.ru</p>
                        <p>Copyright. 2022</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}