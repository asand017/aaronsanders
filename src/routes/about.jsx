import { useContext, useEffect } from "react";
import useFetchPortfolio from "../hooks/useFetchPortfolio";
import PageContext from "../contexts/PageContext";
import useTransitionAnime from "../hooks/useTransitionAnime";
import { ABOUT_URL } from "../utils/constants";
import profilePic from "../assets/portfolio_pic.jpg";

export default function About() {
  const { currentPage, state, dispatch } = useContext(PageContext);
  const { fadeIn, fadeOut } = useTransitionAnime();
  const { aboutMeData } = useFetchPortfolio();
  const imgSrc = aboutMeData?.profilePic || profilePic;
  const bio = aboutMeData?.bio;
  
  useEffect(() => {
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
    if (
      (currentPage !== ABOUT_URL && currentPage !== "/") ||
      state?.status === "closing"
    ) {
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
      className="about-container relative flex flex-col h-full self-start md:justify-self-center md:self-center w-full px-8 pt-10 md:pt-0 opacity-0 md:flex-row md:space-x-3"
    >
      <div className="w-full md:w-2/5 z-0 flex content-center items-center justify-center rounded-full -translate-x-8 md:translate-x-0">
        <img className="w-full h-auto p-2 rounded-full" src={imgSrc} />
      </div>
      <div className="rounded-md bg-slate-100  md:dark:text-white md:bg-transparent md:flex md:text-lg md:justify-center md:h-auto md:items-center md:content-center p-4 w-4/5 md:w-1/2 z-10 md:translate-y-0 -translate-y-24 translate-x-20 md:translate-x-0">
        {bio}
      </div>
    </div>
  );
}
