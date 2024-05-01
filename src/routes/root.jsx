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
        className={`${darkMode ? "dark" : ""} duration-${TRANSITION_DELAY} font-mono border-2 border-slate-800 border-solid flex min-h-svh flex-col bg-white transition-colors p-6 ease-in-out dark:bg-gray-800`}
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
