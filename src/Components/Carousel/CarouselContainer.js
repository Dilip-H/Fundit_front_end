import React from 'react';
import "./CarouselContainer.css";
import { Carousel } from 'react-bootstrap';
import banner1 from "../../assets/carousel-1.svg";
import banner2 from "../../assets/carousel-2.svg";
import banner3 from "../../assets/carousel-3.svg";
import banner4 from "../../assets/carousel-4.svg";

function CarouselContainer() {

    return (
    <div className="carousel">   
    <Carousel fade={true} interval={3000} width="1200%"  prevLabel={null} nextLabel={null} >
     <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1} 
      alt="First slide"
    />
    <Carousel.Caption>
    <button className="button">Get Started</button>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <div className="content">
      <button className="button">Get Started</button>
      </div>
     
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption >
    <button className="button">Get Started</button>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner4} 
      alt="First slide"
    />
    <Carousel.Caption>
    <button className="button">Get Started</button>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
      </div>
    
  )
}

export default CarouselContainer;