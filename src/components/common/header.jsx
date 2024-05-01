import { useState, useContext, useEffect } from "react";
import {
  ABOUT_URL,
  HOME_URL,
  PROJECTS_URL,
  TRANSITION_DELAY,
} from "../../utils/constants";
import HamburgerSVG from "../../assets/hamburger-svg";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";
import useScreenSize from "../../hooks/useScreenSize";
import Name from "./name";
import useFetchPortfolio from "../../hooks/useFetchPortfolio";
import PageContext from "../../contexts/PageContext";
import { BiSolidLeftArrow } from "react-icons/bi";

const Header = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const {
    currentPage,
    setCurrentPage,
    nextPage,
    setNextPage,
    state,
    dispatch,
  } = useContext(PageContext);
  const screenSize = useScreenSize();
  const { name } = useFetchPortfolio();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (state?.route === currentPage && state?.status === "done") {
      processNav(nextPage);
    }
  }, [state]);

  const processNav = (route) => {
    setCurrentPage(route);
    navigate(route);
  };

  const signalFadeOut = (nextRoute) => {
    if (nextRoute !== currentPage) {
      setMenuOpen(!menuOpen);
      setNextPage(nextRoute);
      dispatch({
        type: "close",
        route: currentPage,
      });
    }
  };

  return (
    <div className="">
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
              <HamburgerSVG darkMode={darkMode} />
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
                className={"flex items-center justify-between"}
                onClick={() => {
                  signalFadeOut(HOME_URL);
                }}
              >
                home {currentPage === HOME_URL && <span className="flex justify-center items-center"><BiSolidLeftArrow /></span>}
              </div> 
              <div
                className={"flex items-center justify-between"}
                onClick={() => {
                  signalFadeOut(ABOUT_URL);
                }}
              >
                about me {currentPage === ABOUT_URL && <span className="flex justify-center items-center"><BiSolidLeftArrow /></span>}
              </div>
              <div
                className={"flex items-center justify-between"}
                onClick={() => {
                  signalFadeOut(PROJECTS_URL);
                }}
              >
                projects {currentPage === PROJECTS_URL && <span className="flex justify-center items-center"><BiSolidLeftArrow /></span>}
              </div>
              {/* <div
                className={""}
                onClick={() => {
                  signalFadeOut(CONTACT_URL);
                }}
              >
                contact me
              </div> */}
            </nav>

            {/* Dark mode slider */}
            <div className="w-full justify-self-end pb-8">
              <Switch
                checked={darkMode}
                onChange={() => {
                  console.log("toggle dark mode");
                  setDarkMode(!darkMode);
                }}
                color="default"
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
          <div className="flex content-center justify-center space-x-3">
            <ul
              className={
                "flex flex-row justify-center space-x-4 dark:text-white"
              }
            >
              <li className={"content-center"}>
                <div
                  className={`hover:cursor-pointer hover:font-bold ${currentPage === HOME_URL ? "overline" : ""} decoration-2`}
                  onClick={() => {
                    signalFadeOut(HOME_URL);
                  }}
                >
                  home
                </div>
              </li>
              <li className={"content-center"}>
                <div
                  className={`hover:cursor-pointer hover:font-bold ${currentPage === ABOUT_URL ? "overline" : ""} decoration-2`}
                  onClick={() => {
                    signalFadeOut(ABOUT_URL);
                  }}
                >
                  about me
                </div>
              </li>
              <li className={"content-center"}>
                <div
                  className={`hover:cursor-pointer hover:font-bold ${currentPage === PROJECTS_URL ? "overline" : ""} decoration-2`}
                  onClick={() => {
                    signalFadeOut(PROJECTS_URL);
                  }}
                >
                  projects
                </div>
              </li>
              {/* <li className={"content-center"}>
              <div
                className={"hover:cursor-pointer"}
                onClick={() => {
                  signalFadeOut(CONTACT_URL);
                }}
              >
                contact me
              </div>
            </li> */}
            </ul>
            {/* TODO: refactor checkbox to be more stylized later */}
            <div className="flex justify-center space-x-1 md:pl-4">
              <input id="light" type="checkbox" name="light" checked={!darkMode} className="accent-black" onChange={() => {setDarkMode(false);}}/>
              <label htmlFor="light" className="flex items-center dark:text-white text-xs font-thin">
                light
              </label>
            </div>
            <div className="flex justify-center space-x-1">
              <input id="dark" type="checkbox" name="dark" checked={darkMode} className="accent-white" onChange={() => {setDarkMode(true);}}/>
              <label htmlFor="dark" className="flex items-center dark:text-white text-xs font-thin">
                dark
              </label>
            </div>
          </div>
          <Name name={name} />
        </nav>
      )}
    </div>
  );
};

export default Header;
