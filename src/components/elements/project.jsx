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
  classId
}) {

  return (
    // <div className="grid h-full grid-cols-8 grid-rows-6 p-2">
    <div className={`project-container${classId ? "-" + classId : ""} flex flex-col w-full h-full p-2 dark:text-white`}>
      <div className="flex flex-col p-1 relative">
        <h1 className="text-4xl flex items-end relative">
          {title}
          <span><a href={link} className="flex scale-[0.50] items-center">
            [<FaGithub />]
          </a></span>
        </h1>
        {/* Project Duration, github link */}
        <div className="col-span-full flex items-start justify-start space-x-1 px-1">
          <h3 className="text-sm font-semibold italic">{duration}</h3>
        </div>
      </div>

      <div className="grid grid-cols-subgrid col-span-full p-1">
        {/* tech stack */}
        <div className="col-span-2 flex space-x-4">
            <h2 className="font-semibold">Tech Stack: </h2>
            {tech.map((t, index) => (
                <p key={index}>{t}</p>
            ))}
        </div>

        {/* description */}
        <div className="col-span-6 p-2">
            <p className="text-left">
                {description}
            </p>
            </div>
      </div>
    </div>
  );
}
