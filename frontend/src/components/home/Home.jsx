import React from "react"
import Main from "./../tamplate/Main"
import SlideShow from "./../tamplate/SlideShow"

const props = () => (
    <div>
        <Main icon="home" title="Início" subtitle="Modelo Projeto WEB">
            <div className="display-4">Seja bem vindo</div>
            <hr />
            <p className="mb-0">Sistema de desenvolvimento para a disciplana de WEB</p>
        </Main>
        <SlideShow />
    </div>
)

export default props