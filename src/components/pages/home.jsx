import React, { useEffect, useContext } from "react";
import useFetchPortfolio from "../../hooks/useFetchPortfolio";
import { useNavigate } from "react-router-dom";
import { parseLetters } from "../../utils/utils";
import PageContext from "../../contexts/PageContext";
import anime from "animejs/lib/anime.es.js";
import { HOME_URL, PROJECTS_URL } from "../../utils/constants";
import useTransitionAnime from "../../hooks/useTransitionAnime";

const Home = () => {
  const { currentPage, setCurrentPage, state, dispatch } =
    useContext(PageContext);
  const { fadeIn, fadeOut } = useTransitionAnime();
  const navigate = useNavigate();
  const { titles } = useFetchPortfolio();
  const { welcomeMessage } = useFetchPortfolio();

  useEffect(() => {
    anime.timeline({ duration: 1000 }).add({
      targets: ".title .letter",
      rotateY: [-90, 0],
      duration: 2500,
      delay: (el, i) => 45 * i,
    });
  }, []);

  useEffect(() => {
    fadeIn(
      ".home-container",
      () => {
        dispatch({
          type: "open",
          route: HOME_URL,
        });
      },
      () => {
        dispatch({
          type: "opened",
          route: HOME_URL,
        });
      },
    );
  }, []);

  useEffect(() => {
    console.log("current page: " + JSON.stringify(currentPage));
  }, [currentPage]);

  useEffect(() => {
    if (
      (currentPage !== HOME_URL && currentPage !== "/") ||
      state?.status === "closing"
    ) {
      console.log("current page (closing home page): " + currentPage);
      fadeOut(
        ".home-container",
        () => {},
        () => {
          console.log("dispatching");
          dispatch({
            type: "closed",
            route: HOME_URL,
          });
        },
      );
    }
  }, [currentPage, state]);

  return (
    // <div className="home-container relative grid h-full grid-cols-1 grid-rows-4 p-4 opacity-0 md:grid-cols-2">
    <div className="home-container relative flex flex-col h-full p-4 opacity-0">
      <div className="row-span-2 flex h-full w-full flex-col md:row-span-3">
        {titles.map((title, index) => {
          const parsed = parseLetters(title);
          //console.log("parsed: " + parsed);
          const animated = parsed.map((letter, index) => {
            console.log("letter: " + letter);
            return(
            <span key={index} className="letter inline-block origin-center">
              {letter === " " ? <span>&nbsp;</span> : letter}
            </span>);
        });
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
      <div className="row-span-1 h-full w-full p-6 md:row-span-3">
        {welcomeMessage}
      </div>
      <div className="row-start-4 flex content-start justify-start self-start p-6 md:col-span-2">
        <button
          className="project-button rounded-full border-2 border-solid border-black border-opacity-50 px-4 py-2 tracking-wider drop-shadow-xl transition duration-150 ease-in hover:cursor-pointer"
          onClick={() => {
            fadeOut(
              ".home-container",
              () => {},
              () => {
                setCurrentPage(PROJECTS_URL);
                navigate(PROJECTS_URL);
              },
            );
          }}
        >
          See Projects
        </button>
      </div>
    </div>
  );
};

export default Home;
