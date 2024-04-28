import React from "react";
import { BiSolidLeftArrow } from "react-icons/bi";

export default function Card({ id, title, active, selectCallback }) {
  return (
    <div
      className={`flex justify-start w-full ${active ? "font-bold" : "font-normal"}`}
     
    >
      <h2 className="flex p-1 text-md hover:cursor-pointer w-full" onClick={() => {
        selectCallback(id);
      }}>{title}</h2>{active && <span className="flex justify-center items-center"><BiSolidLeftArrow /></span>}
    </div>
  );
}
