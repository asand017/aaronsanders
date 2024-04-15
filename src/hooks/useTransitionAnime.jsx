import anime from "animejs/lib/anime.es.js";
import useScreenSize from "./useScreenSize";
// move 'enter'/'exit' anime invocation to custom hook method (pass the container class name as input to select)'

const useTransitionAnime = () => {
    const screenSize = useScreenSize();

    const fadeIn = (classes, beginCallback = () => {}, endCallback = () => {}) => {
        anime.timeline({ duration: 300 }).add({
            targets: classes,
            opacity: 1,
            easing: "easeOutSine",
            delay: 400,
            begin: (anim) => {
                beginCallback();
            },
            complete: (anim) => {
                endCallback();
            }
          });
    }

  const fadeOut = (classes, beginCallback, endCallback) => {
    anime.timeline({ duration: 150 }).add({
      targets: classes,
      opacity: 0,
      translateX: screenSize?.width,
      easing: "linear",
      begin: (anim) => {
        console.log("fadeOut begin");
        beginCallback();
      },
      complete: (anim) => {
        console.log("fadeOut done");
        endCallback();
      },
    });
  };

  return {
    fadeIn,
    fadeOut
  }
};

export default useTransitionAnime;
