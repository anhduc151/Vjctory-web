import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import event1 from "../public/images/sliderabout2.png";
import event2 from "../public/images/sliderabout3.png";
import event3 from "../public/images/sliderabout4.png";
import event4 from "../public/images/sliderabout5.png";
import event5 from "../public/images/sliderabout7.png";

export interface SlidereventProps {}

export default function Sliderevent(props: SlidereventProps) {
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
      <Slider {...settings} className="slider_event">
        <div className="slider_events">
          <Image src={event1} alt="slider 1" className="slider_events_images" />
        </div>
        <div className="slider_events">
          <Image src={event2} alt="slider 2" className="slider_events_images" />
        </div>
        <div className="slider_events">
          <Image src={event3} alt="slider 3" className="slider_events_images" />
        </div>
        <div className="slider_events">
          <Image src={event4} alt="slider 4" className="slider_events_images" />
        </div>
        <div className="slider_events">
          <Image src={event5} alt="slider 5" className="slider_events_images" />
        </div>
      </Slider>
    </div>
  );
}
