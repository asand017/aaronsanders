import { useState, useContext, useEffect } from "react";
import {
  ABOUT_URL,
  BASE_URL,
  CONTACT_URL,
  HOME_URL,
  PROJECTS_URL,
  TRANSITION_DELAY,
} from "../utils/constants";
import HamburgerSVG from "../assets/hamburger-svg";
import Switch from "@mui/material/Switch";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useScreenSize from "../hooks/useScreenSize";
import Name from "./name";
import useFetchPortfolio from "../hooks/useFetchPortfolio";
import PageContext from "../contexts/PageContext";

const Header = ({ darkMode, setDarkMode }) => {
  let location = useLocation();
  const navigate = useNavigate();
  const { currentPage, setCurrentPage, nextPage, setNextPage, state, dispatch } =
    useContext(PageContext);
  //const [nextPage, setNextPage] = useState(BASE_URL);
  const screenSize = useScreenSize();
  const { name } = useFetchPortfolio();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log("STATE CHECK: " + JSON.stringify(state));
    if (state?.route === currentPage && state?.status === "done") {
      console.log("currentPager: " + currentPage);
      console.log("state changed detected  HEADER: " + JSON.stringify(state));
      processNav(nextPage);
    }
  }, [state]);

  useEffect(() => {
    console.log("nextPage: " + JSON.stringify(nextPage));
  }, [nextPage]);

  const processNav = (route) => {
    console.log("new route: " + route);
    setCurrentPage(route);
    navigate(route);
  };

  const signalFadeOut = (nextRoute) => {
    console.log("signal fade out: " + nextRoute);
    console.log("current Page at signal: " + JSON.stringify(currentPage));
    setMenuOpen(!menuOpen);
    setNextPage(nextRoute);
    dispatch({
      type: "close",
      route: currentPage,
    });
  };

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
                  location.pathname === HOME_URL || location.pathname === "/"
                    ? isActive
                      ? "active"
                      : isPending
                        ? "pending"
                        : ""
                    : ""
                }
                //to={HOME_URL}
                onClick={() => {
                  //setCurrentPage("/");
                  signalFadeOut(HOME_URL); // TODO debug issues with home nav
                }}
              >
                home
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={ABOUT_URL}
                onClick={() => {
                  setCurrentPage(ABOUT_URL);
                  setMenuOpen(!menuOpen);
                }}
              >
                about me
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={PROJECTS_URL}
                onClick={() => {
                  setCurrentPage(PROJECTS_URL);
                  setMenuOpen(!menuOpen);
                }}
              >
                projects
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={CONTACT_URL}
                onClick={() => {
                  setCurrentPage(CONTACT_URL);
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

          {menuOpen && (
            <div
              className="fixed top-0 z-20 h-screen w-screen bg-black opacity-60"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            ></div>
          )}
        </>
      )}
      {screenSize?.width >= 640 && (
        <nav className={"flex h-14 justify-between p-1"}>
          <ul className={"flex flex-row justify-center space-x-4"}>
            <li className={"content-center"}>
              <NavLink
                to={HOME_URL}
                className={({ isActive, isPending }) =>
                  location.pathname === HOME_URL || location.pathname === "/"
                    ? isActive
                      ? "active"
                      : isPending
                        ? "pending"
                        : ""
                    : ""
                }
                onClick={() => {
                  setCurrentPage(HOME_URL);
                }}
              >
                home
              </NavLink>
            </li>
            <li className={"content-center"}>
              <NavLink
                to={ABOUT_URL}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                onClick={() => {
                  setCurrentPage(ABOUT_URL);
                }}
              >
                about me
              </NavLink>
            </li>
            <li className={"content-center"}>
              <NavLink
                to={PROJECTS_URL}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                onClick={() => {
                  setCurrentPage(PROJECTS_URL);
                }}
              >
                projects
              </NavLink>
            </li>
            <li className={"content-center"}>
              <NavLink
                to={CONTACT_URL}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                onClick={() => {
                  setCurrentPage(CONTACT_URL);
                }}
              >
                contact me
              </NavLink>
            </li>
          </ul>
          <Name name={name} />
        </nav>
      )}
    </div>
  );
};

export default Header;
