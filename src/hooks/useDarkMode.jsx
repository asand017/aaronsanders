import {useState} from "react";

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    return {
        darkMode,
        setDarkMode
    }
}

export default useDarkMode;