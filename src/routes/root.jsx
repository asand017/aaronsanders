import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { HOME_URL, TRANSITION_DELAY } from "../utils/constants";
import Footer from "../components/common/footer";
import Header from "../components/common/header";
import Body from "../components/pages/body";
import { PageProvider } from "../contexts/PageContext";

const Root = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    navigate(HOME_URL);
  }, []);

  return (
    <PageProvider>
      <div
        className={`${darkMode ? "dark" : ""} duration-${TRANSITION_DELAY} border-8 border-slate-500 border-double flex min-h-screen flex-col bg-white p-3 transition-colors ease-in-out dark:bg-gray-800`}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Body>
          <Outlet />
        </Body>
        <Footer darkMode={darkMode} currentYear={currentYear} />
      </div>
    </PageProvider>
  );
};

export default Root;
