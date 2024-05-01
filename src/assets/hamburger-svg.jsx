import React from "react";

const HamburgerSVG = ({darkMode}) => {
    return (
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            fill="none"
            stroke={darkMode ? "white" : "black"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="16"
            x2="16"
            y1="7"
            y2="25"
          />
          <line
            fill="none"
            stroke={darkMode ? "white" : "black"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="7"
            x2="7"
            y1="7"
            y2="25"
          />
          <line
            fill="none"
            stroke={darkMode ? "white" : "black"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="25"
            x2="25"
            y1="7"
            y2="25"
          />
        </svg>
      );
}

export default HamburgerSVG;