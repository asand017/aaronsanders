import React, { useEffect, useContext } from "react";
import useFetchPortfolio from "../../hooks/useFetchPortfolio";
import { useNavigate } from "react-router-dom";
import { parseLetters } from "../../utils/utils";
import PageContext from "../../contexts/PageContext";
import anime from "animejs/lib/anime.es.js";
import { PROJECTS_URL } from "../../utils/constants";
import useScreenSize from "../../hooks/useScreenSize";

const Home = () => {
  const { currentPage, setCurrentPage } = useContext(PageContext);
  const navigate = useNavigate();
  const screenSize = useScreenSize();
  const { titles } = useFetchPortfolio();
  const { welcomeMessage } = useFetchPortfolio();

  useEffect(() => {
    anime
      .timeline({ duration: 1000 })
      .add({
        targets: ".home-container",
        opacity: 1,
        easing: "easeOutSine",
        delay: 200,
      })
      .add({
        targets: ".title .letter",
        rotateY: [-90, 0],
        duration: 2500,
        delay: (el, i) => 45 * i,
      })
  }, []);

  useEffect(() => {
    console.log("current page: " + currentPage);
  }, [currentPage]);

  const fadeOut = () => {

    anime.timeline({ duration: 150 }).add({
      targets: ".home-container",
      opacity: 0,
      translateX: screenSize?.width,
      easing: "linear",
      complete: (anim) => {
        console.log("fadeOut done");
        navigate(PROJECTS_URL);
      },
    });
  };

  return (
    <div className="home-container opacity-0 relative grid h-full grid-cols-1 grid-rows-4 p-4 md:grid-cols-2">
      <div className="row-span-2 flex h-full w-full flex-col self-start bg-red-600 md:row-span-3">
        {titles.map((title, index) => {
          const parsed = parseLetters(title);
          const animated = parsed.map((letter, index) => (
            <span key={index} className="letter inline-block origin-center">
              {letter}
            </span>
          ));
          return (
            <div
              key={index}
              className="title relative inline-block w-full overflow-hidden p-6 text-xl"
            >
              {animated}
            </div>
          );
        })}
      </div>
      <div className="row-span-1 h-full w-full bg-green-600 p-6 md:row-span-3">
        {welcomeMessage}
      </div>
      <div className="row-start-4 flex content-start justify-start self-start p-6 md:col-span-2">
        <button
          className="project-button rounded-full border-2 border-solid border-black border-opacity-50 px-4 py-2 tracking-wider drop-shadow-xl transition duration-150 ease-in hover:border-white hover:text-white"
          onClick={() => {
            setCurrentPage(PROJECTS_URL);
            fadeOut();
          }}
        >
          See Projects
        </button>
      </div>
    </div>
  );
};

export default Home;
