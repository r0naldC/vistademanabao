import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "./resources/images/imagen10.webp";
import slide2 from "./resources/images/imagen11.webp";
import slide3 from "./resources/images/imagen12.webp";

import "./Carousel.css";

export default function CustomCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          src={slide1}
          alt="First slide"
          style={{"width": "100%"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={slide2}
          alt="Second slide"
          loading="lazy"
          style={{"width": "100%"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={slide3}
          alt="Third slide"
          loading="lazy"
          style={{"width": "100%"}}
        />
      </Carousel.Item>
    </Carousel>
  );
}
