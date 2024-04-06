import React from "react";
import Card from "../components/card";
import Carousel from "../components/carousel";

export default function Projects() {
  const slides = [
    { image: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", alt: "Slide 1" },
    { image: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", alt: "Slide 2" },
    { image: "https://i.imgur.com/LGpnTxc.png", alt: "Slide 3" },
  ];

  return (
    // <div class="bg-amber-500 snap-mandatory snap-x relative w-full overflow-hidden flex flex-no-wrap scroll-smooth">
    // <div class="relative w-full h-screen overflow-x-hidden">
    //     <div class="absolute inset-0 flex flex-nowrap"  style={{pointerEvents: "none"}}>
    //         {/* <!-- Card 1 --> */}
    //        <Card/>

    //         {/* <!-- Card 2 --> */}
    //         <Card/>

    //         {/* <!-- Add more cards as needed -->  */}
    //         <Card/>

    //         <Card/>

    //         <Card/>
    //     </div>
    //     <div class="absolute inset-0 overflow-x-auto" style={{pointerEvents: "auto"}}>

    //     </div>
    // </div>

    <div className="container mx-auto my-8">
      <Carousel slides={slides} />
    </div>
  );
}
