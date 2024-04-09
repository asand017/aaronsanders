import { useEffect } from "react";
import jsonData from "../portfolio_data.json";
const useFetchPortfolio = () => {
    const name = jsonData?.name;
    const titles = jsonData?.job_titles;
    const welcomeMessage = jsonData?.welcome_message;
    const aboutMeData = jsonData?.page_data?.about_me;
    const contactData = jsonData?.page_data?.contact;
    const projectsData = jsonData?.page_data?.projects;

    useEffect(() => {
        //console.log("project data: " + JSON.stringify(projectsData));
    }, [])

    return {
        name,
        titles,
        welcomeMessage,
        aboutMeData,
        contactData,
        projectsData
    }
}

export default useFetchPortfolio;