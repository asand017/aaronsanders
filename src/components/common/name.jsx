import { useEffect, useContext } from "react";
import { HOME_URL } from "../../utils/constants";
import { parseLetters } from "../../utils/utils";
import PageContext from "../../contexts/PageContext";
import anime from "animejs/lib/anime.es.js";

const Name = ({ name }) => {
  const { currentPage, setNextPage, dispatch } = useContext(PageContext);
  const typedTitle = parseLetters("<" + name + "/>");

  useEffect(() => {
    if (currentPage === HOME_URL) {
      anime.timeline({ duration: 75 }).add({
        targets: ".typed-container .name-letter",
        opacity: [0, 1],
        easing: "easeInCubic",
        delay: (el, i) => 100 * (i + 1),
      });
    }
  }, [currentPage]);

  const goHome = () => {
    if (currentPage !== HOME_URL) {
      setNextPage(HOME_URL);
      dispatch({
        type: "close",
        route: currentPage,
      });
    }
  };

  return (
    <div
      className="typed-container phone:text-3xl flex content-center items-center justify-center text-2xl
       hover:cursor-pointer md:text-5xl"
      onClick={() => {
        goHome();
      }}
    >
      {typedTitle.map((letter, index) => (
        <span key={index} className="name-letter dark:text-white">
          {letter}
        </span>
      ))}
    </div>
  );
};

export default Name;
