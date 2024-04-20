import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoDocumentAttachOutline } from "react-icons/io5";
import useFetchPortfolio from "../../hooks/useFetchPortfolio";
import { useNavigate } from "react-router-dom";

const Footer = ({ darkMode, currentYear }) => {
  const { linkedin, github } = useFetchPortfolio();
  const navigate = useNavigate();

  return (
    <nav className={"row-span-1 flex place-content-between p-1 mt-2"}>
      <div className="flex items-center justify-start text-xs md:text-sm dark:text-white">
        <p>&copy;{currentYear} Aaron Sanders. All rights reserved.</p>
      </div>

      <ul className={"flex flex-row justify-center space-x-2 md:space-x-5"}>
        <li className={"content-center"}>
          <a href={linkedin}>
            <FaLinkedin color={darkMode ? "white" : ""} />
          </a>
        </li>
        {/*  TODO: fix pdfViewer */}
        {/* <li className={"content-center"}>
            <a onClick={() => {
                navigate("resume");
            }}>
              <IoDocumentAttachOutline color={darkMode ? "white" : ""} />
            </a>
          </li> */}
        <li className={"content-center"}>
          <a href={github}>
            <FaGithub color={darkMode ? "white" : ""} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
