import React from "react";

export default function Card({ id, title, active, selectCallback }) {
  return (
    <div
      className={`w-128 flex h-12 items-center justify-center rounded ${active ? "border-dotted" : "border-none"} border-2 border-sky-500 bg-slate-200 hover:cursor-pointer hover:outline-1 hover:outline-pink-500`}
      onClick={() => {
        selectCallback(id);
      }}
    >
      <h2 className="flex justify-center p-1 text-center text-sm">{title}</h2>
    </div>
  );
}
