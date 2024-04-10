import { useState } from "react";
import { BASE_URL, TRANSITION_DELAY } from "../utils/constants";
import HamburgerSVG from "../assets/hamburger-svg";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";
import useScreenSize from "../hooks/useScreenSize";
import Name from "./name";
import useFetchPortfolio from "../hooks/useFetchPortfolio";
import useDarkMode from "../hooks/useDarkMode";

const Header = () => {
  const {darkMode, setDarkMode} = useDarkMode();
  const screenSize = useScreenSize();
  const {name} = useFetchPortfolio();
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
      {/* Header */}
      {screenSize?.width < 640 && (
        <>
          <div className="row-span-1 flex justify-between bg-blue-400">
            <Name name={name} />
            <button
              id="sidebar-toggle"
              className={`text-white rotate-${menuOpen ? "45" : "0"} transition duration-200 ease-in-out focus:outline-none`}
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <HamburgerSVG />
            </button>
          </div>

          <div
            id="sidebar"
            className={`duration-${TRANSITION_DELAY} fixed bottom-0 left-0 top-0 z-50 flex w-52 -translate-x-full transform flex-col place-content-between bg-gray-100 px-4 py-4 transition ease-in-out dark:bg-gray-800 ${menuOpen ? "translate-x-0" : ""}`}
          >
            <nav
              className={`duration-${TRANSITION_DELAY} flex flex-col space-y-3 pt-4 text-black transition-colors ease-in-out dark:text-white`}
            >
              <Link
                className="block"
                to={"/" + BASE_URL}
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                home
              </Link>
              <Link
                className="block"
                to={`about`}
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                about me
              </Link>
              <Link
                className="block"
                to={"projects"}
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                projects
              </Link>
              <Link
                className="block"
                to={`contact`}
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                contact me
              </Link>
            </nav>

            {/* Dark mode slider */}
            <div className="w-full justify-self-end">
              <Switch
                checked={darkMode}
                onChange={() => {
                  console.log("toggle dark mode");
                  setDarkMode(!darkMode);
                }}
              />
              <span className="text-black dark:text-white">Dark Mode</span>
            </div>
          </div>
        </>
      )}
      {screenSize?.width >= 640 && (
        <nav className={"row-span-1 flex justify-between bg-orange-400 p-1"}>
          <ul className={"flex flex-row justify-center space-x-4"}>
            <li className={"content-center"}>
              <Link to={"/" + BASE_URL}>home</Link>
            </li>
            <li className={"content-center"}>
              <Link to={`about`}>about me</Link>
            </li>
            <li className={"content-center"}>
              <Link to={"projects"}>projects</Link>
            </li>
            <li className={"content-center"}>
              <Link to={`contact`}>contact me</Link>
            </li>
          </ul>
          <Name name={name} />
        </nav>
      )}
    </>
  );
};

export default Header;
