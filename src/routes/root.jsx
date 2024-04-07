import {
  Outlet,
  Link,
  useLoaderData,
  Form,
} from "react-router-dom";
import { useEffect, useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import HamburgerSVG from "../assets/hamburger-svg";

export default function Root() {
  const [menuOpen, setMenuOpen] = useState(false);
  const screenSize = useScreenSize();
  const [rotateHamburger, setRotateHamburger] = useState(false);

  useEffect(() => {
    console.log("screen resolution: " + JSON.stringify(screenSize));
  }, []);

  useEffect(() => {
    console.log("rotate: " + rotateHamburger);
    setRotateHamburger(!setRotateHamburger);
  }, [menuOpen]);

  return (
    <div className="">
      <div className={"flex h-dvh flex-col p-3"}>
        {screenSize?.width < 640 && (
          <>
            <div className="h-1/8 flex justify-end bg-blue-400">
              <button
                id="sidebar-toggle"
                className={`text-white rotate-${menuOpen ? '45' : '0'} focus:outline-none transition duration-200 ease-in-out`}
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                <HamburgerSVG/>
              </button>
            </div>

            <div
              id="sidebar"
              className={`fixed bottom-0 left-0 top-0 z-50 w-64 -translate-x-full transform bg-gray-800 py-4 transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : ""}`}
            >
              <nav className="text-white">
                <Link
                  className="block px-4 py-2"
                  to={`/`}
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                >
                  home
                </Link>
                <Link
                  className="block px-4 py-2"
                  to={`about`}
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                >
                  about me
                </Link>
                <Link
                  className="block px-4 py-2"
                  to={"projects"}
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                >
                  projects
                </Link>
                <Link
                  className="block px-4 py-2"
                  to={`contact`}
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                >
                  contact me
                </Link>
              </nav>
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
        </div>

        {/* footer */}
        <nav className={"h-1/8 flex justify-center bg-green-500"}>
          <ul className={"flex flex-row justify-center space-x-20"}>
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
    </div>
  );
}
