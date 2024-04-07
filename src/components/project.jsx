import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import Carousel from "./carousel";

export default function Project({
  title,
  duration,
  link,
  tech,
  description,
  imageUrls,
}) {

  return (
    <div className="grid h-full grid-cols-8 grid-rows-6 p-2">
      <div className="col-span-full grid grid-cols-subgrid bg-zinc-500 p-1 relative">
        <h1 className="col-span-full text-4xl flex items-end relative">
          {title}
          <span><a href={link} className="flex scale-[0.50] items-center">
            [<FaGithub />]
          </a></span>
        </h1>
        {/* Project Duration, github link */}
        <div className="col-span-full flex items-start justify-start space-x-1 bg-red-400 px-1">
          <h3 className="text-sm font-semibold italic">{duration}</h3>
        </div>
      </div>

      <div className="row-span-2 grid grid-cols-subgrid col-span-full bg-green-600 p-1">
        {/* tech stack */}
        <div className="col-span-2 bg-teal-400 p-2">
            <h2 className="underline font-semibold">Tech Stack</h2>
            {tech.map((t, index) => (
                <p key={index}>{t}</p>
            ))}
        </div>

        {/* description */}
        <div className="col-span-6 p-2 bg-blue-400">
            <p className="text-left">
                {description}
            </p>
            </div>
      </div>

      {/* Image gallery */}
      <div className="col-span-full row-span-5 bg-pink-300 p-3 flex justify-center">
        <Carousel slides={imageUrls}/>
      </div>
    </div>
  );
}
