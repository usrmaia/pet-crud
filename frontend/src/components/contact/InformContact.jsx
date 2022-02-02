import React from "react"
import Contacts from "../tamplate/Contacts"
import Header from "../tamplate/Header"

const props = () => (
    <div>
        <Header icon="address-book" title="Contatos" subtitle="Loja Pet - Fundada desde 2000"/>
        <Contacts />
    </div>
)

export default props