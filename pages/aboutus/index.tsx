import Navbar from "@/components/Navbar";
import numeral from "numeral";
import Image from "next/image";
import React from "react";
import box1img1 from "../../public/images/infor-box1-img1.png";
import box1img2 from "../../public/images/infor-box1-img2.png";
import box1img3 from "../../public/images/infor-box1-img3.png";
import box1img4 from "../../public/images/infor-box1-img41.png";
import box1img5 from "../../public/images/infor-box1-img5.png";
import box3img1 from "../../public/images/box3-img1.webp";
import box3yellow from "../../public/images/box3-yellow.png";
import box3blue from "../../public/images/box3-blue.webp";
import box3purple from "../../public/images/box3-purple.webp";
import box3orange from "../../public/images/box3-orange.webp";
import box3pink from "../../public/images/box3-pink.webp";
import box2child2img1 from "../../public/images/box2-child2-img1.png";
import box2child2img2 from "../../public/images/box2-child2-img2.png";
import { useEffect, useRef } from "react";
import abouthoverimg1 from "../../public/images/about_hover_img1.png";
import abouthoverimg2 from "../../public/images/about_hover_img2.png";
import abouthoverimg3 from "../../public/images/about_hover_img3.png";
import abouthoverimg4 from "../../public/images/about_hover_img4.png";
import abouthoverimg5 from "../../public/images/about_hover_img5.png";
import abouthoverimg6 from "../../public/images/about_hover_img6.png";
import Sliderevent from "@/components/Sliderevent";
import Besidefooter from "@/components/Besidefooter";
import aboutusheadingsimgs from "../../public/images/slide-about-xxx.png";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "@/components/LayoutSeo";

export interface AboutUsProps {

}

export default function AboutUs(props: AboutUsProps) {
  const inforGamesRef = useRef<HTMLHeadingElement>(null);
  const inforLanguagesRef = useRef<HTMLHeadingElement>(null);


  const router = useRouter()
  useEffect(() => {
    const inforGamesElement = inforGamesRef.current;
    const inforLanguagesElement = inforLanguagesRef.current;

    let startGames = 0;
    let startLanguages = 0;
    const endGames = 5;
    const endLanguages = 104;
    const duration = 1500;

    const animateValue = (
      element: HTMLHeadingElement,
      start: number,
      end: number,
      duration: number
    ) => {
      let current = start;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range)) / 1;

      const timer = setInterval(() => {
        current += increment;
        element.textContent = numeral(current).format("0,0");

        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (inforGamesElement) {
            animateValue(inforGamesElement, startGames, endGames, duration);
          }
          if (inforLanguagesElement) {
            animateValue(
              inforLanguagesElement,
              startLanguages,
              endLanguages,
              duration
            );
          }
        }
      },
      { threshold: 0.5 }
    );

    if (inforGamesElement) {
      observer.observe(inforGamesElement);
    }
    if (inforLanguagesElement) {
      observer.observe(inforLanguagesElement);
    }

    return () => {
      if (inforGamesElement) {
        observer.unobserve(inforGamesElement);
      }
      if (inforLanguagesElement) {
        observer.unobserve(inforLanguagesElement);
      }
    };
  }, []);

  return (
    <Layout title="About Us - Victory Game"
      pathname={router.pathname}
    >
      <main>
        <Navbar />
        <div
          className="aboutus_headings_images_background"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Image
            src={aboutusheadingsimgs}
            alt="images background"
            className="aboutus_headings_background_imgs"
          />
        </div>
        <div className="infor">
          <div className="infor_number">
            <div className="infor_games">
              <h2 className="infor_games_h2" ref={inforGamesRef}></h2>
              <p className="infor_games_p">GAMES</p>
            </div>

            <div className="infor_languages">
              <h2 className="infor_languages_h2" ref={inforLanguagesRef}></h2>
              <p className="infor_languages_p">LANGUAGES</p>
            </div>
          </div>

          <div className="infor_outgames">
            <div
              className="infor_outgames_coloumn1 aos-init aos-animate"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <div className="infor_column1_box1">
                <div className="infor-box1-header">
                  <h5 className="infor_box1_header_h5">5</h5>
                  <h4 className="infor_box1_header_h4">OUR GAMES</h4>
                </div>

                <div className="infor_box1-images">
                  <div className="infor_box1_images_left">
                    <Link href="/game/carspuzzle">
                      <Image
                        src={box1img1}
                        alt="trafficbasic"
                        className="infor_box1_imgs"
                      />
                    </Link>
                    <Link href="/game/carpuzzle">
                      <Image
                        src={box1img2}
                        alt="trafficnew"
                        className="infor_box1_imgs"
                      />
                    </Link>
                    <Link href="/game/solitaire">
                      <Image
                        src={box1img3}
                        alt="solitaire"
                        className="infor_box1_imgs"
                      />
                    </Link>
                  </div>

                  <div className="infor_box1_images_right">
                    <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.gametamin.parkingjam3d">
                      <Image
                        src={box1img4}
                        alt="parkingjam"
                        className="infor_box1_imgs"
                      />
                    </Link>
                    <Link href="/game/farmjam">
                      <Image
                        src={box1img5}
                        alt="animal farm jam"
                        className="infor_box1_imgs"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="infor_outgames_coloumn2">
              <div className="infor_column1_box2">
                <div
                  className="infor_box2_child1 aos-init aos-animate"
                  data-aos="zoom-out"
                  data-aos-delay="300"
                >
                  <div className="infor_box2_header">
                    <h4 className="infor_box2_child1_h4">24-hours</h4>
                    <h5 className="infor_box2_child1_h5">OPERATOR ACCESS</h5>
                  </div>

                  <div className="infor_box2_p">
                    <p>
                      24/7 access ensures operators businesses runs smoothly all
                      year long.
                    </p>
                  </div>
                </div>

                <div
                  className="infor_box2_child2 aos-init aos-animate"
                  data-aos="zoom-out"
                  data-aos-delay="400"
                >
                  <div className="infor_box2_child2_header">
                    <h5 className="infor_box2_header_h5">2</h5>
                    <h4 className="infor_box2_header_h4">
                      PLATFORM OPTIMIZED AND SUPPORTED
                    </h4>
                  </div>

                  <div className="infor_box2_images">
                    <Link href="https://play.google.com/store/apps/dev?id=4982936477508721359&hl=en&gl=US" target="_blank">
                      <Image
                        src={box2child2img1}
                        alt="images reskins"
                        className="infor_box2_child2_img"
                      />
                    </Link>
                    <Link href="https://apps.apple.com/us/developer/rollbox-studios/id1321276884" target="_blank">
                      <Image
                        src={box2child2img2}
                        alt="images basic"
                        className="infor_box2_child2_img"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="infor_outgames_coloumn3">
              <div
                className="infor_column1_box3 aos-init aos-animate"
                data-aos="zoom-out"
                data-aos-delay="500"
              >
                <div className="infor_box3_header">
                  <h5 className="infor_box3_header_h5">500K</h5>
                  <h4 className="infor_box3_header_h4">
                    CUSTOMERS AROUND THE WORLD
                  </h4>
                </div>

                <div className="infor_box3_circle1">
                  <Image
                    src={box3img1}
                    alt="images circle"
                    className="infor_box3_images"
                  />
                </div>

                <div className="infor_box3_child1">
                  <div className="child1_yellow">
                    <div className="infor_box3_color">
                      <Image
                        src={box3yellow}
                        alt="images yellow"
                        className="infor_box3_child1_img"
                      />
                      <p className="infor_box3_child1_p">JAPAN</p>
                    </div>
                    <p className="infor_box3_child1_phantram">25%</p>
                  </div>

                  <div className="child_blue">
                    <div className="infor_box3_color">
                      <Image
                        src={box3blue}
                        alt="images blue"
                        className="infor_box3_child1_img"
                      />
                      <p className="infor_box3_child1_p">KOREA</p>
                    </div>
                    <p className="infor_box3_child1_phantram">15%</p>
                  </div>

                  <div className="child_purple">
                    <div className="infor_box3_color">
                      <Image
                        src={box3purple}
                        alt="images purple"
                        className="infor_box3_child1_img"
                      />
                      <p className="infor_box3_child1_p">INDONESIA</p>
                    </div>
                    <p className="infor_box3_child1_phantram">10%</p>
                  </div>

                  <div className="child_oranges">
                    <div className="infor_box3_color">
                      <Image
                        src={box3orange}
                        alt="images indonesia"
                        className="infor_box3_child1_img"
                      />
                      <p className="infor_box3_child1_p">THAILAND</p>
                    </div>
                    <p className="infor_box3_child1_phantram">25%</p>
                  </div>

                  <div className="child_pink">
                    <div className="infor_box3_color">
                      <Image
                        src={box3pink}
                        alt="images thailand"
                        className="infor_box3_child1_img"
                      />
                      <p className="infor_box3_child1_p">VIETNAM</p>
                    </div>
                    <p className="infor_box3_child1_phantram">30%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about_outmission">
          <div
            className="out_mission_form"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="about_outmission_headings">
              <h2 className="about_outmission_headings_h2">OUR MISSION</h2>
            </div>
            <div className="about_outmission_headings_p">
              <p>
                Our mission is to bring the best value to users of all ages with
                different styles, at any time, and anywhere. Convenience,
                flexibility, and fun are what we aim for.
              </p>

              <p>
                Our aim is to become a globally integrated enterprise with
                sustainable development in the gaming industry. In the next 5
                years, the main goal is to reach the top 30 largest mobile
                gaming companies in the world.
              </p>
            </div>
          </div>

          <div className="about_outmission_infor">
            <div
              className="about_outmission_infor_box1"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="outmission_infor_box1_icons">
                <i className="bx bxs-user"></i>
              </div>

              <div className="outmission_infor_box1_p">
                <p>
                  In Victory, human, which is the core value of the company, is
                  centralized in all activities from inside to outside. As our
                  slogan is “ Great products are made by great people”,
                  Victoryers share the mutual passion, enthusiasm, and
                  willingness to adapt to changes on the path to achieving our
                  dream.
                </p>
              </div>
            </div>

            <div
              className="about_outmission_infor_box2"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="outmission_infor_box1_icons">
                <i className="bx bx-brightness"></i>
              </div>

              <div className="outmission_infor_box1_p">
                <p>
                  Victory is an expert in the gaming industry, demonstrated by
                  our product - Traffic Jam Cars Puzzle, which has more than
                  500,000 downloads on Google Play with an average rating of
                  4.6. At present, it is ranked in the top 100 highest-grossing
                  mobile games in 53 countries around the world.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about_hover" data-aos="fade-up" data-aos-delay="200">
          <div className="about_hover_box1">
            <div
              className="about_hover_img1"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <div className="about_hover_img1_body">
                <div className="about_hover_img_text">
                  <h1 className="about_hover_img_text_h1">stunning</h1>
                  <h1 className="about_hover_img_text_h1_1">design</h1>
                  {/* <p className="about_hover_img_text_p">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p> */}
                </div>
              </div>
              <Image
                src={abouthoverimg1}
                alt="images design"
                className="about_hover_images"
              />
            </div>

            <div
              className="about_hover_img2"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <div className="about_hover_img1_body">
                <div className="about_hover_img_text">
                  <h1 className="about_hover_img_text_h1">spectacular</h1>
                  <h1 className="about_hover_img_text_h1_2">team</h1>
                  {/* <p className="about_hover_img_text_p">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p> */}
                </div>
              </div>
              <Image
                src={abouthoverimg2}
                alt="images team"
                className="about_hover_images"
              />
            </div>

            <div
              className="about_hover_img3"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <div className="about_hover_img1_body">
                <div className="about_hover_img_text">
                  <h1 className="about_hover_img_text_h1">rigorous</h1>
                  <h1 className="about_hover_img_text_h1_3">code</h1>
                  {/* <p className="about_hover_img_text_p">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p> */}
                </div>
              </div>
              <Image
                src={abouthoverimg3}
                alt="code images"
                className="about_hover_images"
              />
            </div>
          </div>

          <div className="about_hover_box2">
            <div
              className="about_hover_img4"
              data-aos="zoom-out"
              data-aos-delay="400"
            >
              <div className="about_hover_img1_body">
                <div className="about_hover_img_text">
                  <h1 className="about_hover_img_text_h1">elegant</h1>
                  <h1 className="about_hover_img_text_h1_4">music</h1>
                  {/* <p className="about_hover_img_text_p">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p> */}
                </div>
              </div>
              <Image
                src={abouthoverimg4}
                alt="images music"
                className="about_hover_images"
              />
            </div>

            <div
              className="about_hover_img5"
              data-aos="zoom-out"
              data-aos-delay="500"
            >
              <div className="about_hover_img1_body">
                <div className="about_hover_img_text">
                  <h1 className="about_hover_img_text_h1">24/7</h1>
                  <h1 className="about_hover_img_text_h1_5">support</h1>
                  {/* <p className="about_hover_img_text_p">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p> */}
                </div>
              </div>
              <Image
                src={abouthoverimg5}
                alt="images support"
                className="about_hover_images"
              />
            </div>

            <div
              className="about_hover_img6"
              data-aos="zoom-out"
              data-aos-delay="600"
            >
              <div className="about_hover_img1_body">
                <div className="about_hover_img_text">
                  <h1 className="about_hover_img_text_h1">broad</h1>
                  <h1 className="about_hover_img_text_h1_6">market</h1>
                  {/* <p className="about_hover_img_text_p">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p> */}
                </div>
              </div>
              <Image
                src={abouthoverimg6}
                alt="images hover"
                className="about_hover_images"
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="features_h1">
            <h1 className="features_h1_name">Company's Events</h1>
            <h3 className="features_h3_name">
              Where passion meets excitement, and memories are made.
            </h3>
          </div>
        </div>

        <div className="slider_event" data-aos="fade-up" data-aos-delay="200">
          <Sliderevent />
        </div>

        <div className="home_footer">
          <Besidefooter />
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: {} }
}


