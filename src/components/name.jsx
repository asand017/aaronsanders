import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { parseLetters } from "../utils/utils";
import anime from "animejs/lib/anime.es.js";

const Name = ({ name }) => {
  const navigate = useNavigate();
  const typedTitle = parseLetters("<" + name + "/>");
  const steps = typedTitle.length;

  useEffect(() => {
    anime
      .timeline({ loop: true})//duration: 500 })
      .add({
        targets: ".typed-container .name-letter",
        opacity: [0, 1],
        easing: "easeInCubic",
        duration: 50,
        delay: (el, i) => 100 * (i + 1),
      });
  }, []);

  return (
    <div
      className="typed-container flex justify-center items-center content-center text-xl
       md:text-5xl hover:cursor-pointer"
      onClick={() => {
        navigate("/" + BASE_URL);
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
