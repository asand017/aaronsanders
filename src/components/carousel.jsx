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
    //   <div className="columns-2">
    //     {/* <div className="flex items-center justify-center h-64 overflow-hidden">
    //       {slides.map((slide, index) => (
    //         <div
    //           key={index}
    //           className={`w-full h-full transition-transform duration-500 transform ${
    //             index === currentIndex ? 'translate-x-1/2' : 'translate-x-full'
    //           }`}
    //         >
              
    //           <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
    //         </div>
    //       ))}
    //     </div>
    //     <button className="absolute top-0 left-0 mt-24 ml-4 px-3 py-1 bg-gray-800 text-white rounded" onClick={goToPreviousSlide}>
    //       Previous
    //     </button>
    //     <button className="absolute top-0 right-0 mt-24 mr-4 px-3 py-1 bg-gray-800 text-white rounded" onClick={goToNextSlide}>
    //       Next
    //     </button> */}
    //     {slides.map((slide, index) => (
    //         <img key={index} src={slide.image} alt={slide.alt} className="object-left-top w-full object-none" />
    //       ))}
    //   </div>

        <div className="grid grid-cols-4 gap-4">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
            <div>06</div>
        </div>
    );
  };

export default Carousel;