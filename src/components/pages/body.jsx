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
    <div className={"body-container flex grow content-center justify-center w-full h-full py-8 overflow-x-hidden overflow-y-auto"}>
      {currentPage !== HOME_URL ? children : <Home/>}
    </div>
  );
};

export default Body;
