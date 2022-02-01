import React from "react"
import Main from "./../tamplate/Main"
import SlideShow from "./../tamplate/SlideShow"

const props = () => (
    <div>
        <Main icon="home" title="Início" subtitle="Loja Pet">
            <div className="display-4">Seja Bem-Vindo</div>
            <hr />
            <p className="mb-0">Sistema de Gerenciamento da Loja Pet</p>
        </Main>
        <SlideShow />
    </div>
)

export default props