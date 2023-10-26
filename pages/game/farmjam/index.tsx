import React from "react";
import Navbar from "@/components/Navbar";
import SliderScreenShot from "@/components/Slidescreenshot";
import SliderSoliraiteOther from "@/components/SliderSoliraiteOther";
import Image from "next/image";
import Besidefooter from "@/components/Besidefooter";
import logo_ios from "../../../public/images/logo-app-ios.png";
import logo_androi from "../../../public/images/logo-app-androi.png";
import slide1 from "../../../public/images/slideFeatureJam4.png";
import slide2 from "../../../public/images/slideFeatureJam5.jpg";
import slide3 from "../../../public/images/slideFeatureJam6.png";
import slide4 from "../../../public/images/slideFeatureJam7.png";
import reskinafterimg10 from "../../../public/images/reskin_profile10.png";
import reskinafterimg11 from "../../../public/images/reskin_profile11.png";
import reskinafterimg13 from "../../../public/images/reskin_profile13.png";
import gamesthree from "../../../public/images/games_two_people.png";
import Link from "next/link";
import Layout from "@/components/LayoutSeo";
import { useRouter } from "next/router";

export interface JamFarmProps { }

export default function JamFarm(props: JamFarmProps) {
  const router = useRouter();

  return (
    <Layout title="Animal Farm Jam - Victory Game"
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
                <p>Discover Game You Will Love</p>
              </div>
              <div className="header_content_left_context">
                <p>
                  Read About Games <br /> That You Enjoy
                </p>
              </div>
              <div className="header_content_left_logoapp">
                <div className="logo_ios">
                  <Link href="https://apps.apple.com/app/id6446186498" target="_blank">
                    <Image
                      src={logo_ios}
                      alt="logo ios"
                      className="logo_mobiles"
                    />
                  </Link>
                </div>

                <div className="logo_androi">
                  <Link href="https://play.google.com/store/apps/details?id=com.vjctory.farmjam.animalfarm" target="_blank">
                    <Image
                      src={logo_androi}
                      alt="logo android"
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
                alt="logo game three"
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
              <div className="reskin_after_bottom" data-aos="flip-left">
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
              <div className="reskin_after_bottom" data-aos="flip-left">
                <h2 className="reskin_after_h2">GRANDMA</h2>
              </div>
            </div>

            <div className="reskin_after_box1">
              <Image
                src={reskinafterimg13}
                alt="reskin"
                className="reskin_after_images"
                data-aos="flip-left"
              />
              <div className="reskin_after_bottom" data-aos="flip-left">
                <h2 className="reskin_after_h2">ANDY</h2>
              </div>
            </div>
            <div className="reskin_after_text_3pic">
              <p className="reskin_after_text_p">
                Animal Farm Jam is an innovative animal parking 3d game. Immerse in the colorful countryside artworks with vibrant graphics and cute piggies. There are tons of levels and addictive challenges to keep you entertained. Swipe and move the animals out of the fences and watch the fascinating show happen. Enjoy the funniest and craziest animal game ever!</p>
            </div>
          </div>

          <div className="solitaire_features">
            <div className="features_h1">
              <h1 className="features_h1_name">Screenshot</h1>
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