import React from "react";
import Carousel from "react-bootstrap/Carousel";

// * image imports for the carousel
import Custom1 from "../../resources/images/previous builds/RGB_fans_black_&_red_tower.jpg";
import Custom2 from "../../resources/images/previous builds/pink_fans_black_tower.jpg";
import Custom3 from "../../resources/images/previous builds/pink_fans_black_&_RGB_tower.jpg";
import Custom4 from "../../resources/images/previous builds/white_fan_water_cooled_2.jpg";
import Custom5 from "../../resources/images/previous builds/green_&_blue_fans_black_tower.jpg";
import Custom6 from "../../resources/images/previous builds/RGB_fans_black_&_red_tower_2.jpg";
import Custom7 from "../../resources/images/previous builds/RGB_fans_figurine_tower.jpg";
import Custom8 from "../../resources/images/previous builds/white_fan_water_cooled.jpg";
import Custom9 from "../../resources/images/previous builds/low_profile_tower.jpg";

// * stylesheet
import "../../styles/static elements/Carousel.css";

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={Custom1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Custom2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Custom3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Custom4} alt="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Custom5} alt="Fifth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Custom6} alt="Sixth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Custom7} alt="Seventh slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Custom8} alt="Eighth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Custom9} alt="Nineth slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
