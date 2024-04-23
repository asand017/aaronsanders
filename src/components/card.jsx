import React from "react";

export default function Card({ id, title, active, selectCallback }) {
  return (
    <div
      className={`flex justify-start ${active ? "font-bold" : "font-normal"}`}
     
    >
      <h2 className="flex p-1 text-md hover:cursor-pointer" onClick={() => {
        selectCallback(id);
      }}>{title}</h2>
    </div>
  );
}
