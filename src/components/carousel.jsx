import React, { useState } from "react";

const Carousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPreviousSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 1));
    };
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : 0));
    };
  
    return (
      <></>
        // <div className="w-full max-w-screen-xl mx-auto flex justify-center content-center">
        //     <div className="relative snap-x flex flex-row overflow-x-scroll space-x-5">
        //         {slides.map((slide, index) => (
        //             <img key={index} src={slide} className="snap-start scroll-ml-8 w-full"/>
        //         ))}
        //     </div>
        // </div>
    );
  };

export default Carousel;