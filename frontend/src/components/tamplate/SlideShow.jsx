import "./SlideShow.css"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from 'react-bootstrap/Carousel'
import img1 from "./../../assents/images/Slide/img1.png"
import img2 from "./../../assents/images/Slide/img2.png"
import img3 from "./../../assents/images/Slide/img3.png"

export default props =>
    <React.Fragment>
        <aside id="carousel-show" className="slide-content">
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Coelho"
                    />
                    <Carousel.Caption>
                        <h5>Coelho da Fulana de Tal</h5>
                        <p>Coelho Coelho Coelho Coelho Coelho Coelho.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Gato"
                    />
                    <Carousel.Caption>
                        <h5>Gato da Beltrano</h5>
                        <p>Gato Gato Gato Gato Gato Gato Gato.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Raposa do Sicrano</h5>
                        <p>Raposa Raposa Raposa Raposa Raposa Raposa.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </aside>
    </React.Fragment>