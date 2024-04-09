import React from "react";
import Button from '@mui/material/Button';

const Home = () => {
  const titles = [
    "SOFTWARE DEVELOPER",
    "FULL STACK DEVELOPER",
    "PROBLEM SOLVER",
    "WORKER",
  ];

  return (
    <div className="grid h-full grid-cols-1 md:grid-cols-2 grid-rows-4 p-4">
      <div className="row-span-2 md:row-span-3 flex h-full w-full flex-col self-start bg-red-600">
        {titles.map((title, index) => (
          <div key={index} className="w-full text-lg p-6">
            {title}
          </div>
        ))}
      </div>
      <div className="row-span-1 md:row-span-3 h-full w-full bg-green-600 p-12">
        Welcome to my porfolio
      </div>
      <div className="md:col-span-2 row-start-4 flex content-start justify-start self-start p-6">
      <Button variant="outlined">See Projects</Button>
      </div>
    </div>
  );
};

export default Home;
