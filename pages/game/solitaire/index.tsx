import React from "react";
import Navbar from "@/components/Navbar";
import SliderScreenShot from "@/components/Slidescreenshot";
import SliderSoliraiteOther from "@/components/SliderSoliraiteOther";
import Image from "next/image";
import Besidefooter from "@/components/Besidefooter";
import logo_ios from "../../../public/images/logo-app-ios.png";
import logo_androi from "../../../public/images/logo-app-androi.png";
import slide1 from "../../../public/images/slideFeatureSolitaire1.png";
import slide2 from "../../../public/images/slideFeatureSolitaire2.png";
import slide3 from "../../../public/images/slideFeatureSolitaire3.png";
import reskinafterimg10 from "../../../public/images/reskin_profile10.png";
import reskinafterimg11 from "../../../public/images/reskin_profile11.png";
import reskinafterimg12 from "../../../public/images/reskin_profile12.png";
import gamesthree from "../../../public/images/games_three_people.png";
import Link from "next/link";
import Layout from "@/components/LayoutSeo";
import { useRouter } from "next/router";

export interface SolitaireProps { }

export default function Solitaire(props: SolitaireProps) {

  const router = useRouter()
  return (
    <Layout title="Solitaire Journey of Harvest - Victory Game"
      pathname={router.pathname}
    >
      <main>
        <Navbar />
        <div className="container_reskin">
          <div className="reskin_header">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className="reskin_header_content_left"
            >
              <div className="header_content_left_title">
                <p>Discover Game You Will Love</p>
              </div>
              <div className="header_content_left_context">
                <p>
                  Read About Games <br /> That You Enjoy
                </p>
              </div>
              <div className="header_content_left_logoapp">
                <div className="logo_ios">
                  <Link href="https://apps.apple.com/vn/app/solitaire-journey-of-harvest/id1638054336" target="_blank">
                    <Image
                      src={logo_ios}
                      alt="logo appstore"
                      className="logo_mobiles"
                    />
                  </Link>
                </div>
                <div className="logo_androi">
                  <Link href="https://play.google.com/store/apps/details?id=com.gametamin.solitaire.harvest.tripeaks.farm" target="_blank">
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
                src={gamesthree}
                alt="games three"
                className="games_traffic_imgs"
              />
            </div>
          </div>

          <div className="solitaire_after">
            <div className="reskin_after_box1">
              <Image
                src={reskinafterimg10}
                alt="reskin"
                className="reskin_after_images"
                data-aos="flip-left"
              />
              <div data-aos="flip-left" className="reskin_after_bottom">
                <h2 className="reskin_after_h2">DOG</h2>
              </div>
            </div>

            <div className="reskin_after_box1">
              <Image
                src={reskinafterimg11}
                alt="reskin"
                className="reskin_after_images"
                data-aos="flip-left"
              />
              <div data-aos="flip-left" className="reskin_after_bottom">
                <h2 className="reskin_after_h2">GRANDMA</h2>
              </div>
            </div>

            <div className="reskin_after_box1">
              <Image
                src={reskinafterimg12}
                alt="reskin"
                className="reskin_after_images"
                data-aos="flip-left"
              />
              <div className="reskin_after_bottom" data-aos="flip-left">
                <h2 className="reskin_after_h2">GIRL</h2>
              </div>
            </div>
            <div className="reskin_after_text_3pic">
                <p className="reskin_after_text_p">
                  Welcome to Solitaire Journey of Harvest - The excellent TriPeaks card game! A relaxing harvest solitaire game with exciting adventures. Explore the game with vivid graphics and cute companions! The solitaire game features fantastic gameplay: A delightful TriPeaks world that is full of daily harvest surprises! Blow up your childhood memories with beautiful sceneries of the countryside. Play the captivating and wonderful farm game with your family and enjoy!</p>
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
                image3={slide1}
                image4={slide3}
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
