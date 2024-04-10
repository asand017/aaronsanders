import jsonData from "../portfolio_data.json";

const useFetchPortfolio = () => {
  const name = jsonData?.name;
  const titles = jsonData?.job_titles;
  const resume = jsonData?.links?.resume;
  const linkedin = jsonData?.links?.linkedinProfileUrl;
  const github = jsonData?.links?.githubUrl;
  const welcomeMessage = jsonData?.welcome_message;
  const aboutMeData = jsonData?.page_data?.about_me;
  const contactData = jsonData?.page_data?.contact;
  const projectsData = jsonData?.page_data?.projects;

  return {
    name,
    titles,
    resume,
    linkedin,
    github,
    welcomeMessage,
    aboutMeData,
    contactData,
    projectsData,
  };
};

export default useFetchPortfolio;
