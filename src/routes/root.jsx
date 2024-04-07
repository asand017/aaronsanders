import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import HamburgerSVG from "../assets/hamburger-svg";
import Switch from "@mui/material/Switch";
import Home from "../components/home";

export default function Root() {
  let location = useLocation();
  const screenSize = useScreenSize();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log("screen resolution: " + JSON.stringify(screenSize));
    console.log("location: " + JSON.stringify(location));
  }, []);

  return (
    <div className={`${darkMode ? 'dark' : ''} flex h-dvh flex-col bg-white dark:bg-gray-800 p-3 transition-colors ease-in-out duration-400`}>
      {screenSize?.width < 640 && (
        <>
          <div className="h-1/8 flex justify-end bg-blue-400">
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
            className={`fixed place-content-between px-4 bottom-0 left-0 top-0 z-50 flex w-52 -translate-x-full transform flex-col bg-gray-100 dark:bg-gray-800 py-4 transition duration-400 ease-in-out ${menuOpen ? "translate-x-0" : ""}`}
          >
            <nav className="flex flex-col space-y-3 pt-4 text-black dark:text-white transition-colors duration-400 ease-in-out delay-150">
              <Link
                className="block"
                to={`/`}
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
              <Switch checked={darkMode} onChange={() => {
                    console.log("toggle dark mode");
                    setDarkMode(!darkMode);
                  }}/><span className="text-black dark:text-white">Dark Mode</span>
            </div>
          </div>
        </>
      )}
      {screenSize?.width >= 640 && (
        <nav className={"h-1/8 flex justify-start bg-orange-400 p-1"}>
          <ul className={"flex flex-row justify-center space-x-4"}>
            <li className={"content-center"}>
              <Link to={`/`}>home</Link>
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
        </nav>
      )}

      {/* body content */}
      <div className={"flex-1 content-center justify-center bg-red-300"}>
        <Outlet />
        {/*  If the on home pag, render svg line draging animation effect attraction. I am a WORKER  */}
        {location.pathname === "/" && <Home/>}
      </div>

      {/* footer */}
      <nav className={"h-1/8 flex justify-center bg-yellow-200"}>
        <ul className={"flex flex-row justify-center space-x-10 md:space-x-20"}>
          <li className={"content-center"}>
            <a>linkedin</a>
          </li>
          <li className={"content-center"}>
            <a>resume</a>
          </li>
          <li className={"content-center"}>
            <a>github</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
