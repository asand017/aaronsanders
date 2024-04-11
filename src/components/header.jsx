import { useState } from "react";
import { BASE_URL, TRANSITION_DELAY } from "../utils/constants";
import HamburgerSVG from "../assets/hamburger-svg";
import Switch from "@mui/material/Switch";
import { NavLink, useLocation } from "react-router-dom";
import useScreenSize from "../hooks/useScreenSize";
import Name from "./name";
import useFetchPortfolio from "../hooks/useFetchPortfolio";

const Header = ({ darkMode, setDarkMode }) => {
  let location = useLocation();
  const screenSize = useScreenSize();
  const { name } = useFetchPortfolio();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      {/* Header */}
      {screenSize?.width < 640 && (
        <>
          <div className="flex h-14 justify-between">
            <Name name={name} />
            <button
              id="sidebar-toggle"
              className={`text-white rotate-${menuOpen ? "45" : "0"} transition duration-200 ease-in-out focus:outline-none`}
              onClick={() => {
                console.log("menuOpen: " + menuOpen);
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
              <NavLink
                className={({ isActive, isPending }) =>
                  location.pathname === "/" + BASE_URL ||
                  location.pathname === "/"
                    ? isActive
                      ? "active"
                      : isPending
                        ? "pending"
                        : ""
                    : ""
                }
                to={"/" + BASE_URL}
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                home
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={`about`}
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                about me
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={"projects"}
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                projects
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={`contact`}
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                contact me
              </NavLink>
            </nav>


            {/* Dark mode slider */}
            <div className="w-full justify-self-end pb-16">
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

          {menuOpen && <div className="w-screen h-screen fixed top-0 z-20 bg-black opacity-60" onClick={() => {
            setMenuOpen(!menuOpen);
          }}></div>}
        </>
      )}
      {screenSize?.width >= 640 && (
        <nav className={"flex h-14 justify-between p-1"}>
          <ul className={"flex flex-row justify-center space-x-4"}>
            <li className={"content-center"}>
              <NavLink to={"/" + BASE_URL} className={({ isActive, isPending }) =>
                  location.pathname === "/" + BASE_URL ||
                  location.pathname === "/"
                    ? isActive
                      ? "active"
                      : isPending
                        ? "pending"
                        : ""
                    : ""
                }>home</NavLink>
            </li>
            <li className={"content-center"}>
              <NavLink to={`about`} className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }>about me</NavLink>
            </li>
            <li className={"content-center"}>
              <NavLink to={"projects"} className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }>projects</NavLink>
            </li>
            <li className={"content-center"}>
              <NavLink to={`contact`} className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }>contact me</NavLink>
            </li>
          </ul>
          <Name name={name} />
        </nav>
      )}
    </div>
  );
};

export default Header;
