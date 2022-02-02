import "./Contacts.css"
import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import imgLojaPet from './../../assents/images/lojapet.png'

export default props =>
    <aside className="contact">
        <Container id="grid-container">
            <Row>
                <Col>Loja Pet</Col>
                <Col>Endereço</Col>
                <Col>Número</Col>
                <Col>loja_pet@gmail.com</Col>
            </Row>
            <Row>
                <Col>Nome do(a) Gerente</Col>
                <Col>Gerente</Col>
                <Col>Número</Col>
                <Col>E-mail</Col>
            </Row>
            <Row>
                <Col>Nome do(a) Funcionário</Col>
                <Col>Funcionário</Col>
                <Col>Número</Col>
                <Col>E-mail</Col>
            </Row>
            <Row>
                <Col>Nome do(a) Funcionário</Col>
                <Col>Funcionário</Col>
                <Col>Número</Col>
                <Col>E-mail</Col>
            </Row>
            <Row>
                <Col>Nome do(a) Funcionário</Col>
                <Col>Funcionário</Col>
                <Col>Número</Col>
                <Col>E-mail</Col>
            </Row>
            <Row>
                <Col>Nome do(a) Cão de Guarda</Col>
                <Col>Cão de Guarda</Col>
                <Col>Número</Col>
                <Col>E-mail</Col>
            </Row>
        </Container>
        <div>
            <img src={imgLojaPet} alt="Imagem da Loja Pet" id="imagem-loja-pet"/>
        </div>
    </aside>