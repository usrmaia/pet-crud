import "./Nav.css"
import React from "react"
import {Link} from "react-router-dom" 

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"/> Início 
            </Link>
            <Link to="/users">
                <i className="fa fa-users"/> Usuários
            </Link>
            <Link to="/contacts">
                <i className="fa fa-address-book"/> Contatos
            </Link>
        </nav>
    </aside>