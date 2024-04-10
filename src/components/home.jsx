import React from "react";
import useFetchPortfolio from "../hooks/useFetchPortfolio";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { titles } = useFetchPortfolio();
  const { welcomeMessage } = useFetchPortfolio();

  return (
    <div className="grid h-full grid-cols-1 grid-rows-4 p-4 md:grid-cols-2">
      <div className="row-span-2 flex h-full w-full flex-col self-start bg-red-600 md:row-span-3">
        {titles.map((title, index) => (
          <div key={index} className="w-full p-6 text-xl">
            {title}
          </div>
        ))}
      </div>
      <div className="row-span-1 h-full w-full bg-green-600 p-12 md:row-span-3">
        {welcomeMessage}
      </div>
      <div className="row-start-4 flex content-start justify-start self-start p-6 md:col-span-2">
        <button
          className="rounded-full tracking-wider border-2 border-solid border-black p-2 drop-shadow-xl hover:border-white hover:text-white transition duration-150 ease-in"
          onClick={() => {
            navigate("projects");
          }}
        >
          See Projects
        </button>
      </div>
    </div>
  );
};

export default Home;
