import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import anime from "animejs/lib/anime.es.js";

const Name = ({ name }) => {
  const navigate = useNavigate();
  const typedTitle = ("<" + name + "/>").split("");
  const steps = typedTitle.length;

  useEffect(() => {
    //console.log(typedTitle);
    anime
      .timeline({ loop: true})//duration: 500 })
      .add({
        targets: ".typed-container .letter",
        opacity: [0, 1],
        easing: "easeInCubic",
        duration: 50,
        delay: (el, i) => 100 * (i + 1),
      });
  }, []);

  return (
    <div
      className="typed-container flex justify-center items-center content-center text-3xl hover:cursor-pointer"
      onClick={() => {
        navigate("/" + BASE_URL);
      }}
    >
      {/* <div
        className="typing-text overflow-hidden whitespace-nowrap animate-typing flex items-center justify-center px-2 text-2xl hover:cursor-pointer"
        onClick={() => {
          navigate("/" + BASE_URL);
        }}
      >
        {"<" + name + "/>"}
      </div> */}
      {typedTitle.map((letter, index) => (
        <span key={index} className="letter">
          {letter}
        </span>
      ))}
    </div>
  );
};

export default Name;
