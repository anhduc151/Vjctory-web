import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Besidefooter from "@/components/Besidefooter";
import gamescontrollers from "../../public/images/games_controller.png";
import gamesthree from "../../public/images/games_three_people.png";
import gamespeopledogs from "../../public/images/games_people_dogs.png";
import gamesfivepeople from "../../public/images/games_five_people..png";
import gametwopeople from "../../public/images/games_two_people.png";
import gamesappstore from "../../public/images/logo-app-ios.png";
import gameschplay from "../../public/images/logo-app-androi.png";
import Layout from "@/components/LayoutSeo";
import { useRouter } from "next/router";

export interface AboutUsProps {}

export default function AboutUs(props: AboutUsProps) {
  const router = useRouter();

  const handleButtonClick = (url: string) => {
    router.push(url);
  };

  const [text, setText] = useState("");

  useEffect(() => {
    let isMounted = true;
    let currentIndex = 0;
    const words = [" is my life", "Tamin ..."];
    const animateText = () => {
      if (isMounted) {
        const word = words[currentIndex];
        let currentWord = "";

        const typingInterval = setInterval(() => {
          if (currentWord.length === word.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
              if (isMounted) {
                const deletingInterval = setInterval(() => {
                  if (currentWord.length === 0) {
                    clearInterval(deletingInterval);
                    currentIndex = (currentIndex + 1) % words.length;
                    animateText();
                  } else {
                    currentWord = currentWord.slice(0, -1);
                    setText(currentWord);
                  }
                }, 50);
              }
            }, 1000);
          } else {
            currentWord = word.slice(0, currentWord.length + 1);
            setText(currentWord);
          }
        }, 50);
      }
    };

    animateText();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Layout title="Games - Victory Game"
    pathname={router.pathname}
    >
      <main>
        <Navbar />
        <div
          className="games_controllers"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Image
            src={gamescontrollers}
            alt="controllers"
            className="games_controllers_images"
          />
          <h1 className="games_controllers_h1">Game{text}</h1>
        </div>

        <div className="game_traffic">
          <div className="traffic_colum1">
            <div
              className="traffic_content_1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="traffic_content_title_1">
                Traffic Jam Car Puzzle Match 3
              </div>
              <p className="traffic_content_context_1">
                Innovative puzzle game with bright colors & cute characters
              </p>
              <div className="games_buttons_downloards">
                <Link href="https://apps.apple.com/vn/app/traffic-jam-car-puzzle-match-3/id1585412442" target="_blank">
                  <Image
                    src={gamesappstore}
                    alt="icons appstore"
                    className="games_buttons_icons_images"
                  />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.gametamin.trafficpuzzlegame" target="_blank">
                  <Image
                    src={gameschplay}
                    alt="icons chplay"
                    className="games_buttons_icons_images"
                  />
                </Link>
              </div>

              <button
                onClick={() => handleButtonClick("/game/carpuzzle")}
                className="outgames_buttons"
              >
                View More
              </button>
            </div>
            <div className="traffic_figure_1">
              <Link href="/game/carpuzzle">
                <Image
                  src={gamesfivepeople}
                  alt="carpuzzle"
                  className="games_traffic_imgs"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
              </Link>
            </div>
          </div>

          <div className="traffic_colum2">
            <div className="traffic_figure_2">
              <Link href="/game/carspuzzle">
                <Image
                  src={gamespeopledogs}
                  alt="dogs"
                  className="games_traffic_imgs"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
              </Link>
            </div>
            <div
              className="traffic_content_2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="traffic_content_title_1">
                Traffic Jam Cars Puzzle
              </div>
              <p className="traffic_content_context_2">
                The unique puzzle game features vivid cartoon designs and
                exciting sound effects
              </p>

              <div className="games_buttons_downloards1">
                <Link href="https://apps.apple.com/vn/app/traffic-jam-cars-puzzle-2022/id1600852359" target="_blank">
                  <Image
                    src={gamesappstore}
                    alt="icons appstore"
                    className="games_buttons_icons_images1"
                  />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.gametamin.trafficjamcarspuzzle" target="_blank">
                  <Image
                    src={gameschplay}
                    alt="icons chplay"
                    className="games_buttons_icons_images"
                  />
                </Link>
              </div>
              <div>
                <button
                  onClick={() => handleButtonClick("/game/carspuzzle")}
                  className="outgames_buttons"
                >
                  View More
                </button>
              </div>
            </div>
          </div>

          <div className="traffic_colum3">
            <div
              className="traffic_content_1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="traffic_content_title_1">
                Solitaire Journey of Harvest
              </div>
              <p className="traffic_content_context_1">
                The super addictive and relaxing harvest solitaire game
              </p>
              <div className="games_buttons_downloards">
                <Link href="https://apps.apple.com/vn/app/solitaire-journey-of-harvest/id1638054336" target="_blank">
                  <Image
                    src={gamesappstore}
                    alt="icons appstore"
                    className="games_buttons_icons_images"
                  />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.gametamin.solitaire.harvest.tripeaks.farm" target="_blank">
                  <Image
                    src={gameschplay}
                    alt="icons chplay"
                    className="games_buttons_icons_images"
                  />
                </Link>
              </div>

              <button
                onClick={() => handleButtonClick("/game/solitaire")}
                className="outgames_buttons"
              >
                View More
              </button>
            </div>
            <div className="traffic_figure_3">
              <Link href="/game/solitaire">
                <Image
                  src={gamesthree}
                  alt="fireman"
                  className="games_traffic_imgs"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
              </Link>
            </div>
          </div>

          <div className="traffic_colum4">
            <div className="traffic_figure_1">
              <Link href="/game/farmjam">
                <Image
                  src={gametwopeople}
                  alt="two people images"
                  className="games_traffic_imgs"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
              </Link>
            </div>
            <div
              className="traffic_content_2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="traffic_content_title_1">Animal Farm Jam</div>
              <p className="traffic_content_context_2">
                A wonderful game that combines the puzzle of traffic jams with
                adorable animals
              </p>

              <div className="games_buttons_downloards1">
                <Link href="https://apps.apple.com/app/id6446186498" target="_blank">
                  <Image
                    src={gamesappstore}
                    alt="icons appstore"
                    className="games_buttons_icons_images1"
                  />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.vjctory.farmjam.animalfarm" target="_blank">
                  <Image
                    src={gameschplay}
                    alt="icons chplay"
                    className="games_buttons_icons_images"
                  />
                </Link>
              </div>
              <div>
                <button
                  onClick={() => handleButtonClick("/game/farmjam")}
                  className="outgames_buttons"
                >
                  View More
                </button>
              </div>
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
