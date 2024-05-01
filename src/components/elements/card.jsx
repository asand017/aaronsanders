import React from "react";
import { BiSolidLeftArrow } from "react-icons/bi";

export default function Card({ id, title, active, selectCallback }) {
  return (
    <div
      className={`flex w-full justify-start ${active ? "font-bold" : "font-normal"}`}
    >
      <h2
        className="text-md flex w-full p-1 hover:cursor-pointer"
        onClick={() => {
          selectCallback(id);
        }}
      >
        {title}
      </h2>
      {active && (
        <span className="flex items-center justify-center">
          <BiSolidLeftArrow />
        </span>
      )}
    </div>
  );
}
