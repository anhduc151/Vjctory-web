import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { StaticImageData } from "next/image";

export interface SlidersoliraiteProps {
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  image4: StaticImageData;
}

export default function SliderScreenShot(props: SlidersoliraiteProps) {
  const { image1, image2, image3, image4 } = props;
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings} className="slider-soliraite-features1">
        <div
          className="slider_soliraite_features aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="slider_soliraite_features_img">
            <Image
              src={image1}
              alt="images backgrounds 1"
              className="slider_solitaireimgs"
            />
          </div>
        </div>

        <div
          className="slider_soliraite_features aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="slider_soliraite_features_img">
            <Image
              src={image2}
              alt="images backgrounds 1"
              className="slider_solitaireimgs"
            />
          </div>
        </div>

        <div
          className="slider_soliraite_features aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="slider_soliraite_features_img">
            <Image
              src={image3}
              alt="images backgrounds 1"
              className="slider_solitaireimgs"
            />
          </div>
        </div>
        <div
          className="slider_soliraite_features aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="slider_soliraite_features_img">
            <Image
              src={image4}
              alt="images backgrounds 1"
              className="slider_solitaireimgs"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}
