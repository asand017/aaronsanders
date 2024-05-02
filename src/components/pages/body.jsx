import { HOME_URL } from "../../utils/constants";
import Home from "./home";
import { useEffect } from "react";
import PageContext from "../../contexts/PageContext";
import { useContext } from "react";

const Body = ({ children }) => {
  const { currentPage, setCurrentPage } = useContext(PageContext);

  useEffect(() => {
    setCurrentPage(HOME_URL);
  }, []);

  return (
    <div className={"body-container flex grow content-center md:justify-start w-full h-full p-4 overflow-x-hidden"}>
      {currentPage !== HOME_URL ? children : <Home/>}
    </div>
  );
};

export default Body;
