import { BASE_URL, HOME_URL } from "../../utils/constants";
import Home from "./home";
import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";
import PageContext from "../../contexts/PageContext";
import { useContext } from "react";

const Body = ({ children }) => {
  const { currentPage, setCurrentPage } = useContext(PageContext);

  useEffect(() => {
    console.log("currentpage: " + currentPage);
    setCurrentPage(HOME_URL);
  }, []);

  useEffect(() => {
    console.log("currentPAge (body): " + currentPage);
  }, [currentPage])

  return (
    <div className={"grow content-center justify-center overflow-x-hidden"}>
      {currentPage !== HOME_URL ? children : <Home/>}
    </div>
  );
};

export default Body;
