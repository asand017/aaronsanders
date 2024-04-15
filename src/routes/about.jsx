import { useContext, useEffect } from "react";
import useFetchPortfolio from "../hooks/useFetchPortfolio";
import PageContext from "../contexts/PageContext";
import anime from "animejs/lib/anime.es.js";
import useScreenSize from "../hooks/useScreenSize";
import useTransitionAnime from "../hooks/useTransitionAnime";
// import profilePic from "../assets/portfolio_pic.jpg";

export default function About({ ref }) {
  const { currentPage, setCurrentPage } = useContext(PageContext);
  const { fadeIn } = useTransitionAnime();
  const { aboutMeData } = useFetchPortfolio();
  const screenSize = useScreenSize();
  const imgSrc = aboutMeData?.profilePic || "assets/portfolio_pic.jpg";
  const bio = aboutMeData?.bio;

  useEffect(() => {
    console.log("current page: " + currentPage);
    fadeIn(".about-container")
  }, [currentPage, screenSize]);

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
