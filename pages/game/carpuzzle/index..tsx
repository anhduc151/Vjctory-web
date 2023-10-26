import React from "react";
import Navbar from "@/components/Navbar";
import SliderSoliraiteOther from "@/components/SliderSoliraiteOther";
import Image from "next/image";
import Besidefooter from "@/components/Besidefooter";
import logo_ios from "../../../public/images/logo-app-ios.png";
import logo_androi from "../../../public/images/logo-app-androi.png";
import slide1 from "../../../public/images/slideFeatureReskin4.png";
import slide2 from "../../../public/images/slideFeatureReskin5.png";
import slide3 from "../../../public/images/slideFeatureReskin6.png";
import slide4 from "../../../public/images/slideFeatureReskin7.png";
import reskinafterimg1 from "../../../public/images/reskin_profile1.png";
import reskinafterimg2 from "../../../public/images/reskin_profile2.png";
import reskinafterimg3 from "../../../public/images/reskin_profile3.png";
import reskinafterimg4 from "../../../public/images/reskin_profile4.png";
import reskinafterimg5 from "../../../public/images/reskin_profile5.png";
import gamesfivepeople from "../../../public/images/games_five_people..png";
import Link from "next/link";
import SliderScreenShot from "@/components/Slidescreenshot";
import Layout from "@/components/LayoutSeo";
import { useRouter } from 'next/router';

export interface ReskinProps { }

export default function Reskin(props: ReskinProps) {
  const router = useRouter();
  return (
    <Layout title="Traffic Jam Car Puzzle Match 3 - Victory Game"
      pathname={router.pathname}
    >
      <main>
        <Navbar />
        <div className="container_reskin">
          <div className="reskin_header">
            <div
              className="reskin_header_content_left"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div className="header_content_left_title">
                <p className="header_content_left_title_p">
                  Discover Game You Will Love
                </p>
              </div>
              <div className="header_content_left_context">
                <p>
                  Read About Games <br /> That You Enjoy
                </p>
              </div>
              <div className="header_content_left_logoapp">
                <div className="logo_ios">
                  <Link href="https://apps.apple.com/vn/app/traffic-jam-car-puzzle-match-3/id1585412442" target="_blank">
                    <Image
                      src={logo_ios}
                      alt="logo appstore"
                      className="logo_mobiles"
                    />
                  </Link>
                </div>
                <div className="logo_androi">
                  <Link href="https://play.google.com/store/apps/details?id=com.gametamin.trafficpuzzlegame" target="_blank">
                    <Image
                      src={logo_androi}
                      alt="logo chplay"
                      className="logo_mobiles"
                    />
                  </Link>
                </div>
              </div>

            </div>

            <div
              className="reskin_header_content_right"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <Image
                src={gamesfivepeople}
                alt="five people images"
                className="games_traffic_imgs"
              />
            </div>
          </div>

          <div className="reskin_after">
            <div className="reskin_after_box1">
              <Image
                src={reskinafterimg1}
                alt="reskin"
                className="reskin_after_images"
                data-aos="flip-left"
              />
              <div className="reskin_after_bottom" data-aos="flip-left">
                <h2 className="reskin_after_h2">PILOT</h2>
              </div>
            </div>

            <div className="reskin_after_box1">
              <Image
                src={reskinafterimg2}
                alt="reskin"
                className="reskin_after_images"
                data-aos="flip-left"
              />
              <div className="reskin_after_bottom" data-aos="flip-left">
                <h2 className="reskin_after_h2">NURSE</h2>
              </div>
            </div>

            <div className="reskin_after_box1">
              <Image
                src={reskinafterimg3}
                alt="reskin"
                className="reskin_after_images"
                data-aos="flip-left"
              />
              <div className="reskin_after_bottom" data-aos="flip-left">
                <h2 className="reskin_after_h2">POLICE</h2>
              </div>
            </div>

            <div className="reskin_after_box1">
              <Image
                src={reskinafterimg4}
                alt="reskin"
                className="reskin_after_images"
                data-aos="flip-left"
              />
              <div className="reskin_after_bottom" data-aos="flip-left">
                <h2 className="reskin_after_h2">FIREMAN</h2>
              </div>
            </div>

            <div className="reskin_after_box1">
              <Image
                src={reskinafterimg5}
                alt="reskin"
                className="reskin_after_images"
                data-aos="flip-left"
              />
              <div className="reskin_after_bottom" data-aos="flip-left">
                <h2 className="reskin_after_h2">WOKERMAN</h2>
              </div>
            </div>

            <div className="reskin_after_text">
              <p className="reskin_after_text_p">
                Traffic Jam Car Puzzle Match 3 - The best traffic puzzle game ever! Help police officers to unblock cars from the traffic game in rush hour - Match 3 cars in a row and watch the magic happen! You will enjoy this traffic puzzle game with plenty of vehicles such as Police Car, Rainbow Bus, Town Truck, Ambulance, Helicopter, Train and Spaceship. Collect amazing boosters and daily rewards and play infinity levels!</p>
            </div>
          </div>

          <div className="solitaire_features">
            <div className="features_h1">
              <h1 className="features_h1_name">Screenshot</h1>
              {/* <h3 className="features_h3_name">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor{" "}
                <br /> do amet sint. Velit officia consequat.
              </h3> */}
            </div>

            <div className="features_slider">
              <SliderScreenShot
                image1={slide1}
                image2={slide2}
                image3={slide3}
                image4={slide4}
              />
            </div>
          </div>

          <div className="solitaire_other">
            <div className="other-h1">
              <h1 className="other_h1_name">Other Games</h1>
              {/* <h3 className="features_h3_name">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor{" "}
                <br /> do amet sint. Velit officia consequat.
              </h3> */}
            </div>

            <div className="other_slider">
              <SliderSoliraiteOther />
            </div>
          </div>
        </div>
        <Besidefooter />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: {} }
}
