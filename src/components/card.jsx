import React, { useEffect, useState } from "react";

export default function Card({ id, title, active, selectCallback }) {
  useEffect(() => {
    console.log("props changed: ", { id, title, active });
  }, [id, title, active]);

  return (
    <div
      className={
        `flex h-full w-full content-center justify-center rounded ${active ? 'blur-none' : 'blur-sm'} bg-slate-200 hover:outline `
      }
      onClick={() => {
        console.log("clikcaokdow");
        selectCallback(id);
      }}
    >
      <h2 className="flex justify-center">{title}</h2>
    </div>
  );
}
