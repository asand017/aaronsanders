import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { HOME_URL } from "../utils/constants";
import { parseLetters } from "../utils/utils";
import PageContext from "../contexts/PageContext";
import anime from "animejs/lib/anime.es.js";

const Name = ({ name }) => {
  const { currentPage, setCurrentPage } = useContext(PageContext);
  const navigate = useNavigate();
  const typedTitle = parseLetters("<" + name + "/>");

  useEffect(() => {
    anime
      .timeline({ duration: 75 })
      .add({
        targets: ".typed-container .name-letter",
        opacity: [0, 1],
        easing: "easeInCubic",
        delay: (el, i) => 100 * (i + 1),
      });
  }, []);

  return (
    <div
      className="typed-container flex justify-center items-center content-center text-xl
       md:text-5xl hover:cursor-pointer"
      onClick={() => {
        setCurrentPage(HOME_URL);
        navigate(HOME_URL);
      }}
    >
      {typedTitle.map((letter, index) => (
        <span key={index} className="name-letter">
          {letter}
        </span>
      ))}
    </div>
  );
};

export default Name;
