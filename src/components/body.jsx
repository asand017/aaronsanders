import { useLocation } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import Home from "./home";

const Body = ({ children }) => {
  let location = useLocation();
  return (
    <div className={"grow content-center justify-center bg-red-300"}>
      {children}
      {/*  If the on home pag, render svg line draging animation effect attraction. I am a WORKER  */}
      {(location.pathname === "/" + BASE_URL || location.pathname === "/") && (
        <Home />
      )}
    </div>
  );
};

export default Body;
