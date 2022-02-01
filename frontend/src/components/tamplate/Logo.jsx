import "./Logo.css"
import React from "react"
import logo from "./../../assents/images/icons8-pet-64.png"

export default props =>
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="logo"/>
        </a>
    </aside>
