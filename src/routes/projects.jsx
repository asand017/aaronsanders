import React, { useEffect, useState, useContext } from "react";
import Card from "../components/card";
import Project from "../components/project";
import PageContext from "../contexts/PageContext";
import useFetchPortfolio from "../hooks/useFetchPortfolio";
import anime from "animejs/lib/anime.es.js";
import { PROJECTS_URL } from "../utils/constants";
import useScreenSize from "../hooks/useScreenSize";
import useTransitionAnime from "../hooks/useTransitionAnime";

const Projects = ({ ref }) => {
  const { projectsData } = useFetchPortfolio();
  const { fadeIn, fadeOut } = useTransitionAnime();
  const { currentPage, setCurrentPage, state, dispatch } = useContext(PageContext);
  const [projects, setProjects] = useState(projectsData);

  useEffect(() => {
    fadeIn(
      ".projects-container",
      () => {
        dispatch({
          type: "open",
          route: PROJECTS_URL,
        });
      },
      () => {},
    );
  }, []);

  useEffect(() => {
    // console.log("state in projects aftert signal: " + JSON.stringify(state));
    // console.log("currentPage: " + currentPage);
    if (
      (currentPage !== PROJECTS_URL && currentPage !== "/") ||
      state?.status === "closing"
    ) {
      // console.log("current page: " + currentPage);
      fadeOut(
        ".projects-container",
        () => {},
        () => {
          console.log("dispatching");
          dispatch({
            type: "closed",
            route: PROJECTS_URL,
          });
        },
      );
    }
  }, [currentPage, state]);

  const openProject = (id) => {
    const refreshedSelection = projects.map((project) =>
      project.id === id
        ? { ...project, defaultOpen: true }
        : { ...project, defaultOpen: false },
    );

    setProjects(refreshedSelection);
  };

  return (

    <div
      ref={ref}
      id="projects"
      className="projects-container h-full w-full opacity-0 grid grid-cols-12"
    >
      {/* <div className="flex w-full snap-x flex-row flex-nowrap space-x-4 overflow-x-auto bg-yellow-50 p-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 snap-center md:w-1/2"
          >
            <Card
              id={project.id}
              title={project.title}
              active={project?.defaultOpen}
              selectCallback={() => openProject(project.id)}
            />
          </div>
        ))}
      </div> */}
      <div className="col-span-3 flex flex-col w-full bg-yellow-50 p-4">
        <div className="text-2xl underline underline-offset-6">Projects</div>
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 snap-center md:w-1/2"
          >
            <Card
              id={project.id}
              title={project.title}
              active={project?.defaultOpen}
              selectCallback={() => openProject(project.id)}
            />
          </div>
        ))}
      </div>
      <div className="col-span-9 max-h-72">
        {projects.map(
          (project) =>
            project?.defaultOpen && (
              <Project
                key={project.id}
                title={project.title}
                duration={project.duration}
                link={project.repoLink}
                tech={project.techStack}
                description={project.description}
                imageUrls={project.images}
              />
            ),
        )}
      </div>
    </div>
  );
};

export default Projects;
