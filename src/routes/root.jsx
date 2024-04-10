import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Home from "../components/home";
import { BASE_URL, TRANSITION_DELAY } from "../utils/constants";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useScreenSize from "../hooks/useScreenSize";
import '../FadeTransition.css';
import Footer from "../components/footer";
import Header from "../components/header";

const Root = () => {
  let location = useLocation();
  const screenSize = useScreenSize();
  const currentYear = new Date().getFullYear();
  // const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const nodeRef = useRef(null);
  const homeRef = useRef(null);

  useEffect(() => {
    console.log("screen resolution: " + JSON.stringify(screenSize));
    console.log("location: " + JSON.stringify(location));
  }, []);

  return (
    <div
      className={`${darkMode ? "dark" : ""} duration-${TRANSITION_DELAY} flex min-h-screen flex-col justify-between bg-white p-3 transition-colors ease-in-out dark:bg-gray-800`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

      {/* body content */}
      <div className={"grow content-center justify-center bg-red-300"}>
       
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

      <Footer darkMode={darkMode} currentYear={currentYear}/>
    </div>
  );
}

export default Root;