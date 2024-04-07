import React, { useEffect, useState } from "react";

export default function Card({ id, title, active, selectCallback }) {
  // useEffect(() => {
  //   console.log("props changed: ", { id, title, active });
  // }, [id, title, active]);

  return (
    <div
      className={`flex h-full w-full basis-auto items-center justify-center rounded ${active ? "blur-none" : "blur-sm"} bg-slate-200 hover:cursor-pointer hover:outline`}
      onClick={() => {
        console.log("clikcaokdow");
        selectCallback(id);
      }}
    >
      <h2 className="flex justify-center p-1 text-center text-sm">{title}</h2>
    </div>
  );
}
