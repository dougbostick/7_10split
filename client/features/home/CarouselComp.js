import Carousel, { CarouselItem } from 'react-bootstrap/Carousel';
import React from 'react';

const CarouselComp = () => {
  return (
    <div>
      <Carousel className="caro">
        <img
          src="/images/loginIMG.jpg"
          style={{ height: '150px', width: 'auto' }}
        />
        <CarouselItem interval={1500}>
          <Carousel.Caption>
            <h3>First Caption</h3>
          </Carousel.Caption>
        </CarouselItem>
        <Carousel.Item interval={1500}>
          <Carousel.Caption>
            <h3>Second Caption</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
