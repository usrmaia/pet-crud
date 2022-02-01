import "./Logo.css"
import React from "react"
import Logo from "./../../assents/images/icons8-pet-64.png"
import { Link } from "react-router-dom"

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={Logo} alt="logo"/>
        </Link>
    </aside>
