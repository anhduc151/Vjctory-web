import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderimg1 from "../public/images/sliderhome_img1.png";
import sliderimg2 from "../public/images/sliderhome_img2.png";
import sliderimg3 from "../public/images/sliderhome_img3.png";
import Image from "next/image";
import Link from "next/link";
import { db } from "../firebase.config";
import {
  collection,
  query,
  onSnapshot,
  where
} from "firebase/firestore";
import { useRouter } from "next/router";
import { Spin, Space } from 'antd';

export interface ISliderHomeRecruitProps {
  id?: any,
  position?: any,
}

export default function SliderHomeRecruit(props: ISliderHomeRecruitProps) {
  const router = useRouter()
  const [jdList, setJdList] = useState<ISliderHomeRecruitProps[]>([]);
  const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    const q = query(collection(db, "jd"), where("isPulish", "==", true));
    onSnapshot(q, (querySnapshot) => {
      setJdList(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      setIsLoading(false)
    });
  }, [router]);

  const imgs = [sliderimg1, sliderimg2, sliderimg3]
  const slideList = jdList.map(data => ({
    urlImg: imgs[Math.floor(Math.random() * 3)],
    nameRecruit: data.position,
    id: data.id,
  }))
  const numOfslideShow = slideList.length < 3 ? 1 : 3;

  const settings = {
    infinite: true,
    speed: 250,
    slidesToShow: numOfslideShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: true,
          autoplay: true,
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "0",
          autoplay: true,
          slidesToShow: 1,
        },
      },
    ],
  };



  return (
    <>
      {isLoading
        ? (
          <div className="box_available">
            <div className="music-waves-2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="flip-animation">
              <span>L</span>
              <span>o</span>
              <span>a</span>
              <span>d</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          </div>
        )
        : (
          <div>
            {slideList.length === 0
              ?
              <div className="box_available">
                <div className="box_available_p">There are currently no vacancies available! Please comback later!!!</div>
              </div>
              :
              <Slider {...settings} className="Slider_home">
                {slideList.map((data) => (
                  <div
                    key={data.id}
                    className='slider-slide'
                  >
                    <div
                      className='sliderhomerecruit'
                    >
                      <div
                        className='sliderhomerecruit_imgs'
                      >
                        <Link href={`/recruit/${data.id}`}>
                          <Image
                            src={data.urlImg}
                            alt="slide"
                            className="sliderhomerecruit_images"
                          />
                        </Link>
                      </div>
                      <div
                        className='sliderhomerecruit_box'
                      >
                        <div className="sliderhomerecuit_box_1">
                          <Link href={`/recruit/${data.id}`}>
                            <h4 className="sliderhomerecruit_box1_h4">{data.nameRecruit}</h4>
                          </Link>
                          <Link href={`/recruit/${data.id}`}><p className="sliderhomerecruit_box1_p">Job Description</p></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            }
          </div>
        )
      }
    </>

  )
}
