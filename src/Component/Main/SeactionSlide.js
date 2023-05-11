import React from "react";
import Carousel from "react-bootstrap/Carousel";
import FirstImage from "../../Image/980x551 (1).jpg";
import SecondImage from "../../Image/980x551 (2).jpg";
import ThirdImage from "../../Image/980x551 (3).jpg";
import FourthImage from "../../Image/980x551 (4).jpg";
import FiveImage from "../../Image/980x551 (6).jpg";
import SixImage from "../../Image/980x551 (7).jpg";
import SevenImage from "../../Image/980x551 (8).jpg";
import EightImage from "../../Image/980x551 (9).jpg";
import NineImage from "../../Image/980x551 (10).jpg";

function SeactionSlide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 p-5" src={FirstImage} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 p-5"
          src={SecondImage}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 p-5" src={ThirdImage} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SeactionSlide;
