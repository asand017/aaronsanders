import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import useScreenSize from "../hooks/useScreenSize";
import HamburgerSVG from "../assets/hamburger-svg";
import Switch from "@mui/material/Switch";
import Home from "../components/home";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { BASE_URL, TRANSITION_DELAY } from "../utils/constants";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Name from "..//components/name";
import '../FadeTransition.css';

export default function Root() {
  let location = useLocation();
  const screenSize = useScreenSize();
  const currentYear = new Date().getFullYear();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const nodeRef = useRef(null);
  const homeRef = useRef(null);
  const name = "Aaron Sanders";

  useEffect(() => {
    console.log("screen resolution: " + JSON.stringify(screenSize));
    console.log("location: " + JSON.stringify(location));
  }, []);

  return (
    <div
      className={`${darkMode ? "dark" : ""} duration-${TRANSITION_DELAY} grid min-h-screen grid-rows-12 bg-white p-3 transition-colors ease-in-out dark:bg-gray-800`}
    >
      {/* Header */}
      {screenSize?.width < 640 && (
        <>
          <div className="row-span-1 flex justify-between bg-blue-400">
            <Name name={name}/>
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
          <Name name={name}/>
        </nav>
      )}

      {/* body content */}
      <div className={"row-span-10 content-center justify-center bg-red-300"}>
       
        {/* <CSSTransition
          nodeRef={nodeRef}
          className="fade"
          timeout={500}
          onEnter={() => {
            console.log("enterererer");
          }}
          onExit={() => {
            console.log("exit");
          }}
        >
          <Outlet ref={nodeRef} />
        </CSSTransition> */}
        <Outlet/>

        {/* <Outlet /> */}
        {/*  If the on home pag, render svg line draging animation effect attraction. I am a WORKER  */}
        {(location.pathname === "/" + BASE_URL ||
          location.pathname === "/") && ( <Home/>
          // <CSSTransition
          //   nodeRef={homeRef}
          //   className="fade"
          //   timeout={500}
          //   onEnter={() => {
          //     console.log("enterererer home");
          //   }}
          //   onExit={() => {
          //     console.log("exit home");
          //   }}
          // >
          //   <Home ref={homeRef} />
          // </CSSTransition>
        )}
      </div>

      {/* footer */}
      <nav className={"row-span-1 flex place-content-between  p-1"}>
        <div className="flex items-center justify-start text-xs md:text-sm dark:text-white">
          <p>&copy;{currentYear} Aaron Sanders. All rights reserved.</p>
        </div>

        <ul className={"flex flex-row justify-center space-x-2 md:space-x-5"}>
          <li className={"content-center"}>
            <a href="#">
              <FaLinkedin color={darkMode ? "white" : ""} />
            </a>
          </li>
          <li className={"content-center"}>
            <a href="#">
              <IoDocumentAttachOutline color={darkMode ? "white" : ""} />
            </a>
          </li>
          <li className={"content-center"}>
            <a href="#">
              <FaGithub color={darkMode ? "white" : ""} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
