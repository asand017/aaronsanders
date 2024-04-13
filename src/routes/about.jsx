import { useContext, useEffect } from "react";
import useFetchPortfolio from "../hooks/useFetchPortfolio";
import PageContext from "../contexts/PageContext";
import anime from "animejs/lib/anime.es.js";
import useScreenSize from "../hooks/useScreenSize";
// import profilePic from "../assets/portfolio_pic.jpg";

export default function About({ ref }) {
  const { currentPage, setCurrentPage } = useContext(PageContext);
  const { aboutMeData } = useFetchPortfolio();
  const screenSize = useScreenSize();
  //const width = screenSize?.width;
  const imgSrc = aboutMeData?.profilePic || "assets/portfolio_pic.jpg";
  const bio = aboutMeData?.bio;

  useEffect(() => {
    console.log("current page: " + currentPage);
    //console.log(JSON.stringify(screenSize))
    // anime.timeline({duration: 1000})
    // .add({
    //   targets: ".about",
    //   opacity: 0,
    //   translateX: screenSize?.width,
    //   easing: "easeOutQuad"

    // })
  }, [currentPage, screenSize])

  return (
    <div
      ref={ref}
      className="about flex h-full w-full flex-col bg-pink-400 px-8 py-16 md:flex-row relative"
    >
      <div className="w-full md:h-1/2 bg-indigo-400 p-4 md:w-1/2 relative">
        <img src={imgSrc} />
      </div>
      <div className="w-full md:h-1/2 bg-orange-500 p-4 md:w-1/2 relative">{bio}</div>
    </div>
  );
}
