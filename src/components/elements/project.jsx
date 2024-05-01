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
        <div className="col-span-full flex items-start justify-start space-x-1 px-1">
          <h3 className="text-sm font-semibold italic">{duration}</h3>
        </div>
      </div>

      <div className="col-span-full grid grid-cols-subgrid p-1">
        {/* tech stack */}
        <div className="col-span-2 flex space-x-4">
          <h2 className="font-semibold">Tech Stack: </h2>
          {tech.map((t, index) => (
            <p key={index}>{t}</p>
          ))}
        </div>

        {/* description */}
        <div className="col-span-6 p-2">
          <p className="text-left">{description}</p>
        </div>
      </div>
    </div>
  );
}
