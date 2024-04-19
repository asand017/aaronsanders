import { useContext, useEffect } from "react";
import useFetchPortfolio from "../hooks/useFetchPortfolio";
import PageContext from "../contexts/PageContext";
import anime from "animejs/lib/anime.es.js";
import useScreenSize from "../hooks/useScreenSize";
import useTransitionAnime from "../hooks/useTransitionAnime";
import { ABOUT_URL } from "../utils/constants";
// import profilePic from "../assets/portfolio_pic.jpg";

export default function About({ ref }) {
  const { currentPage, setCurrentPage, state, dispatch } = useContext(PageContext);
  const { fadeIn, fadeOut } = useTransitionAnime();
  const { aboutMeData } = useFetchPortfolio();
  const screenSize = useScreenSize();
  const imgSrc = aboutMeData?.profilePic || "assets/portfolio_pic.jpg";
  const bio = aboutMeData?.bio;

  // useEffect(() => {
  //   console.log("current page: " + currentPage);
  //   fadeIn(".about-container")
  // }, [currentPage, screenSize]);

  
  useEffect(() => {
    console.log("ABOUT page");
    fadeIn(
      ".about-container",
      () => {
        dispatch({
          type: "open",
          route: ABOUT_URL,
        });
      },
      () => {},
    );
  }, []);

  useEffect(() => {
    // console.log("state in projects aftert signal: " + JSON.stringify(state));
    // console.log("currentPage: " + currentPage);
    if (
      (currentPage !== ABOUT_URL && currentPage !== "/") ||
      state?.status === "closing"
    ) {
      // console.log("current page: " + currentPage);
      fadeOut(
        ".about-container",
        () => {},
        () => {
          console.log("dispatching");
          dispatch({
            type: "closed",
            route: ABOUT_URL,
          });
        },
      );
    }
  }, [currentPage, state]);


  return (
    <div
      ref={ref}
      className="about-container relative flex h-full w-full flex-col bg-pink-400 px-8 py-16 opacity-0 md:flex-row"
    >
      <div className="relative w-full bg-indigo-400 p-4 md:h-1/2 md:w-1/2">
        <img src={imgSrc} />
      </div>
      <div className="relative w-full bg-orange-500 p-4 md:h-1/2 md:w-1/2">
        {bio}
      </div>
    </div>
  );
}
