import React, { useEffect } from "react";

export default function Project({ title }) {
  useEffect(() => {
    console.log(title);
  }, []);

  return (
    <div className="grid h-full grid-cols-8 grid-rows-6">
      <div className="col-span-full grid grid-cols-subgrid bg-zinc-500 ">
        <h1 className="col-span-2 text-5xl">{title}</h1>
        {/* Project Duration, github link */}
        <div className="col-span-2 bg-purple-200">
          INSERT DURATION AND GITHUB LINK
        </div>
      </div>

      <div className="col-span-full row-span-2 bg-green-600">
        {/* tech stack */}
        <div>TECH STACK</div>

        {/* description */}
        <div>DESCRIPTINON</div>
      </div>

      {/* Image gallery */}
      <div className="row-span-5 col-span-full bg-pink-300">IMAGE GALERRY</div>
    </div>
  );
}
