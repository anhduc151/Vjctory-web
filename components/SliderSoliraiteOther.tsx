import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import SolitaireOtherImg1 from "../public/images/slideOther1.png";
import SolitaireOtherImg2 from "../public/images/slideOther2.png";
import SolitaireOtherImg3 from "../public/images/slideOther3.png";
import SolitaireOtherImg4 from "../public/images/slideOther4.png";
import Link from "next/link";
import { useRouter } from "next/router";

export interface SliderSoliraiteOtherProps { }

export default function SliderSoliraiteOther(props: SliderSoliraiteOtherProps) {
  const router = useRouter()
  const isGameCars = router.pathname === "/game/carspuzzle"
  const isGameCar = router.pathname === "/game/carpuzzle"
  const isGameSolitaire = router.pathname === "/game/solitaire"
  const isGameFarm = router.pathname === "/game/farmjam"

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings} className="solitaire-other-slider">
        {isGameCars
          ? null
          :
          <div className="slider-solitaire-other aos-init aos-animate" data-aos="fade-up"
            data-aos-delay="100">
            <Link href="/game/carspuzzle">
              <div className="solitaire-box1">
                <Image src={SolitaireOtherImg1} alt="solitaire other images 1" className="solitaire-other-images" />
                <div className="slider-solitaire-other-p">
                  <p className="solitaire-other-lorem">
                    Traffic Jam Cars Puzzle
                  </p>
                </div>
              </div>
            </Link>
          </div>
        }
        {
          isGameCar
            ? null
            :
            <div className="slider-solitaire-other aos-init aos-animate" data-aos="fade-up"
              data-aos-delay="100">
              <Link href="/game/carpuzzle">
                <div className="solitaire-box1">
                  <Image src={SolitaireOtherImg2} alt="solitaire other images 2" className="solitaire-other-images" />
                  <div className="slider-solitaire-other-p">
                    <p className="solitaire-other-lorem">
                      Traffic Jam Car Puzzle Match 3
                    </p>
                  </div>
                </div>
              </Link>
            </div>
        }

        {
          isGameFarm
            ? null
            :
            <div className="slider-solitaire-other aos-init aos-animate" data-aos="fade-up"
              data-aos-delay="100">
              <Link href="/game/farmjam">
                <div className="solitaire-box1">
                  <Image src={SolitaireOtherImg3} alt="solitaire other images 3" className="solitaire-other-images" />
                  <div className="slider-solitaire-other-p">
                    <p className="solitaire-other-lorem">
                      Animal Farm Jam
                    </p>
                  </div>
                </div>
              </Link>
            </div>
        }

        {
          isGameSolitaire
            ? null
            :
            <div className="slider-solitaire-other aos-init aos-animate" data-aos="fade-up"
              data-aos-delay="100">
              <Link href='/game/solitaire' className="solitaire-icon-arr">
                <div className="solitaire-box2">
                  <Image src={SolitaireOtherImg4} alt="solitaire other images 4" className="solitaire-other-images" />
                  <div className="slider-solitaire-other-p">
                    <p className="solitaire-other-lorem">
                      Solitaire Journey of Harvest
                    </p>
                  </div>
                </div>
              </Link>
            </div>
        }
      </Slider >
    </div >
  );
}
