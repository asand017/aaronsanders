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
    console.log("STATE CHECK (header navigate): " + JSON.stringify(state));
    console.log("current page (header navigate): " + currentPage);
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
    console.log("signal fade out (next route): " + nextRoute);
    console.log("signal fade out (current route): " + JSON.stringify(currentPage));
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
              <div
                className={""}
                onClick={() => {
                  //setCurrentPage("/");
                  signalFadeOut(HOME_URL); // TODO debug issues with home nav
                }}
              >
                home
              </div>
              <div
                className={""}
                onClick={() => {
                  //setCurrentPage(ABOUT_URL);
                  signalFadeOut(ABOUT_URL);
                }}
              >
                about me
              </div>
              <div
                className={""}
              >
                projects
              </div>
              <div
                className={""}
              >
                contact me
              </div>
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
              <div
                className={""
                }
                onClick={() => {
                  setCurrentPage(HOME_URL);
                }}
              >
                home
              </div>
            </li>
            <li className={"content-center"}>
              <div
                className={""
                }
                onClick={() => {
                  setCurrentPage(ABOUT_URL);
                }}
              >
                about me
              </div>
            </li>
            <li className={"content-center"}>
              <div
                className={""
                }
                onClick={() => {
                  setCurrentPage(PROJECTS_URL);
                }}
              >
                projects
              </div>
            </li>
            <li className={"content-center"}>
              <div
                className={""
                }
                onClick={() => {
                  setCurrentPage(CONTACT_URL);
                }}
              >
                contact me
              </div>
            </li>
          </ul>
          <Name name={name} />
        </nav>
      )}
    </div>
  );
};

export default Header;
