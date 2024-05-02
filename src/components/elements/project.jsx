import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Project({
  title,
  duration,
  link,
  tech,
  description,
  imageUrls,
  classId,
}) {
  return (
    <div
      className={`project-container${classId ? "-" + classId : ""} flex h-full w-full flex-col p-2 dark:text-white`}
    >
      <div className="relative flex flex-col p-1">
        <h1 className="relative flex items-end text-4xl">
          {title}
          <span>
            <a href={link} className="flex scale-[0.50] items-center">
              [<FaGithub />]
            </a>
          </span>
        </h1>
        {/* Project Duration, github link */}
        <div className="flex items-start justify-start space-x-1 px-1">
          <h3 className="text-sm font-semibold italic">{duration}</h3>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-1">
        {/* tech stack */}
        <div className="flex flex-wrap space-x-4">
          <h2 className="font-semibold text-sm">Tech Stack: </h2>
          <div className="flex flex-wrap space-x-2">
            {tech.map((t, index) => (
              <p key={index} className="italic">{t}</p>
            ))}
          </div>
        </div>
        
        {/* description */}
        <div className="flex py-2 border-t-2">
          <p className="text-left font-thin">{description}</p>
        </div>
      </div>
    </div>
  );
}
