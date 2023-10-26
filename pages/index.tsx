import Navbar from "@/components/Navbar";
import Image from "next/image";
import line from "../public/images/Line .png";
import outgames1 from "../public/images/outgames-img1.png";
import outgames2 from "../public/images/outgames-img2.png";
import outgames3 from "../public/images/outgames-img3.png";
import outgames4 from "../public/images/outgames-img4.png";
import SliderHomeRecruit from "@/components/Sliderhomerecruit";
import allboximg1 from "../public/images/home_news_img1.png";
import allboximg2 from "../public/images/home_news_img2.png";
import allboximg3 from "../public/images/home_news_img3.png";
import allboximg4 from "../public/images/home_news_img4.png";
import allboximg5 from "../public/images/home_news_img5.png";
import allboximg6 from "../public/images/home_news_img6.png";
import Besidefooter from "@/components/Besidefooter";
import homemother1 from "../public/images/home_headings_img1.png";
import homemother2 from "../public/images/home_headings_img2.png";
import homemother3 from "../public/images/home_headings_img3.png";
import homemother4 from "../public/images/home_headings_img4.png";
import homeheadingbanner1 from "../public/images/home_headings_banner1.png";
import homeheadingbanner2 from "../public/images/home_headings_banner2.png";
import homeheadingbanner3 from "../public/images/home_headings_banner3.png";
import homeheadingbanner4 from "../public/images/home_headings_banner4.png";
import { useEffect, useState } from "react";
import homeaboutus from "../public/images/home_aboutus_background.png";
import Link from "next/link";
import Layout from "@/components/LayoutSeo";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const backgroundImages = [
    {
      index: 1,
      title: "Traffic Jam Cars Puzzle",
      img: homemother1,
      banner: homeheadingbanner1,
    },
    {
      index: 2,
      title: "Traffic Jam Car Puzzle Match 3",
      img: homemother2,
      banner: homeheadingbanner2,
    },
    {
      index: 3,
      title: "Solitaire Journey of Harveste",
      img: homemother3,
      banner: homeheadingbanner3,
    },
    {
      index: 4,
      title: "Animal Farm Jam",
      img: homemother4,
      banner: homeheadingbanner4,
    },
  ];

  const changeSlide = () => {
    setCurrentImageIndex((Index) => (Index + 1) % backgroundImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide();
    }, 6000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImageIndex]);

  const handleSlideChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <Layout title="Victory Game Studios"
    pathname={router.pathname}
    >
      <main>
        <Navbar />
        <div className="home_headings">
          <Image
            key={backgroundImages[currentImageIndex].index}
            src={backgroundImages[currentImageIndex].banner}
            alt="home_headings"
            className="home_headings_imgs"
          />
          <div className="home_familys">
            <div
              className="home_headings_mother"
              // data-aos="fade-up"
              // data-aos-delay="200"
            >
              {backgroundImages.map((data, index) => (
                <div
                  className={`home-headings_mother1 ${
                    index === currentImageIndex ? "active" : "close"
                  }`}
                  key={index}
                  onClick={() => handleSlideChange(index)}
                >
                  <Image
                    src={data.img}
                    alt={data.title}
                    className="home_headings_mother1_imgs"
                  />
                  <p className="home_headings_mother1_p">{data.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="home_outgames">
          <div className="home_outgames_heading">
            <h2 className="home_outsgames_h2">Our Game</h2>
            <Image src={line} alt="" className="home_outgames_line" />
          </div>

          <div className="home_outgames_ends">
            <div className="home_outgames_ends1">
              <Link
                href="/game/carspuzzle"
                className="home_outgames_box1"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image
                  src={outgames1}
                  alt="Traffic Jam Cars Puzzle"
                  className="home_outgames_ends_images"
                />
                <div className="box1_child">
                  <h2 className="box1_h2">Traffic Jam Cars Puzzle</h2>
                  <p className="box1_p">
                    The unique puzzle game features vivid cartoon designs and
                    exciting sound effects
                  </p>
                </div>
              </Link>

              <Link
                href="game/carpuzzle"
                className="home_outgames_box1"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image
                  src={outgames2}
                  alt="Traffic Jam Car Puzzle Match 3"
                  className="home_outgames_ends_images"
                />
                <div className="box1_child">
                  <h2 className="box1_h2">Traffic Jam Car Puzzle Match 3</h2>
                  <p className="box1_p">
                    Innovative puzzle game with bright colors & cute characters
                  </p>
                </div>
              </Link>
            </div>

            <div className="home_outgames_ends2">
              <Link
                href="game/solitaire"
                className="home_outgames_box1"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image
                  src={outgames3}
                  alt="Solitaire Journey of Harvest"
                  className="home_outgames_ends_images"
                />
                <div className="box1_child">
                  <h2 className="box1_h2">Solitaire Journey of Harvest</h2>
                  <p className="box1_p">
                    The super addictive and relaxing harvest solitaire game
                  </p>
                </div>
              </Link>

              <Link
                href="game/farmjam"
                className="home_outgames_box1"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image
                  src={outgames4}
                  alt="Animal Farm Jam"
                  className="home_outgames_ends_images"
                />
                <div className="box1_child">
                  <h2 className="box1_h2">Animal Farm Jam</h2>
                  <p className="box1_p">
                    A wonderful game that combines the puzzle of traffic jams
                    with adorable animals
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div
            className="home_whatnews_buttons"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Link href="/game">
              <button className="outgames_buttons">View More</button>
            </Link>
          </div>
        </div>

        {/* <div className="about_container">
          <div className="home_aboutus" data-aos="fade-up" data-aos-delay="100">
            <Link href="/aboutus">
              <div className="home_aboutus_backgrounds">
                <div className="home_aboutus_right">
                  <Image
                    src={homeaboutus}
                    alt="About us"
                    className="home_about_rights_images"
                  />
                </div>
                <div className="home_aboutus_left">
                  <h2 className="home_aboutus_left_h2">About us </h2>
                  <p className="home_aboutus_left_p">
                    We embrace a culture of creativity and courage, pushing
                    boundaries to create the best gaming experience.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div> */}

        <div className="home_recruit">
          <div className="home_recruit_headings">
            <div className="home_outgames_heading">
              <h2 className="home_outsgames_h2">Recruit</h2>
              <Image src={line} alt="" className="home_outgames_line" />
            </div>
          </div>

          <div
            className="home_recruit_slider"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <SliderHomeRecruit />
          </div>
        </div>

        <div className="home_whatnews">
          <div className="home_whatnews_headings">
            <div className="home_outgames_heading">
              <h2 className="home_outsgames_h2">What new?</h2>
              <Image src={line} alt="" className="home_outgames_line" />
            </div>
          </div>

          <div className="home_whatnews_allbox">
            <Link
              href="game/carpuzzle"
              className="home_whatnew_box1_flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Image src={allboximg1} alt="" className="home_whatnews_box1" />
              <div className="home_whatnews_form1">
                <Image
                  src={allboximg4}
                  alt="Traffic Jam Cars Puzzle"
                  className="home_whatnews_img_icons1"
                />
                <div className="home_whatnews_box1_content">
                  <h3 className="home_whatnews_box1_content_h2">
                    Traffic Jam Car Puzzle Match 3
                  </h3>
                  {/* <p className="home_whatnews_box1_content_p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p> */}
                </div>
              </div>
            </Link>

            <div className="home_whatnews_flex2">
              <Link
                href="/game/carspuzzle"
                className="home_whatnews_box2_flex"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image src={allboximg2} alt="" className="home_whatnews_box2" />
                <div className="home_whatnews_form2">
                  <Image
                    src={allboximg5}
                    alt="Traffic Jam Cars Puzzle"
                    className="home_whatnews_img_icons2"
                  />
                  <div className="home_whatnews_box1_content1">
                    <h3 className="home_whatnews_box2_content_h2">
                      Traffic Jam Cars Puzzle
                    </h3>
                    {/* <p className="home_whatnews_box2_content_p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p> */}
                  </div>
                </div>
              </Link>

              <Link
                href="game/farmjam"
                className="home_whatnews_box3_flex"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image src={allboximg3} alt="" className="home_whatnews_box2" />
                <div className="home_whatnews_form3">
                  <Image
                    src={allboximg6}
                    alt="Traffic Jam Cars Puzzle"
                    className="home_whatnews_img_icons2"
                  />
                  <div className="home_whatnews_box1_content1">
                    <h3 className="home_whatnews_box2_content_h2">
                      Animal Farm Jam 3D
                    </h3>
                    {/* <p className="home_whatnews_box2_content_p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p> */}
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div
            className="home_whatnews_buttons"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Link href="/game">
              <button className="outgames_buttons">View More</button>
            </Link>
          </div>
        </div>

        <div className="home_footer">
          <Besidefooter />
        </div>
      </main>
    </Layout>
  );
}


export async function getServerSideProps() {
  return { props: {} }
}