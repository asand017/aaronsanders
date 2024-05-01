import React, { useEffect, useState, useContext } from "react";
import Card from "../components/elements/card";
import Project from "../components/elements/project";
import PageContext from "../contexts/PageContext";
import useFetchPortfolio from "../hooks/useFetchPortfolio";
import { PROJECTS_URL } from "../utils/constants";
import useTransitionAnime from "../hooks/useTransitionAnime";

const Projects = () => {
  const { projectsData } = useFetchPortfolio();
  const { fadeIn, fadeOut } = useTransitionAnime();
  const { currentPage, state, dispatch } =
    useContext(PageContext);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    initProjects();
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
    if (
      (currentPage !== PROJECTS_URL && currentPage !== "/") ||
      state?.status === "closing"
    ) {
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

  useEffect(() => {}, [projects]);

  const initProjects = () => {
    const initProjects = projectsData.map((project, index) => {
      return index === 0
        ? { ...project, open: true, id: index, status: "open" }
        : { ...project, open: false, id: index, status: "closed" };
    });
    setProjects(initProjects);
  };

  const openProject = (id) => {
    const refreshedSelection = projects.map((project) => {
      return project.id === id
        ? { ...project, open: true, status: "open" }
        : { ...project, open: false, status: "closed" };
    });
    setProjects(refreshedSelection);
  };

  return (
    <div className="projects-container self-start md:self-center grid h-full w-full grid-cols-12 space-y-4 opacity-0 md:space-y-0 md:px-8">
      <div className="col-span-12 flex w-full flex-col rounded-md bg-slate-100 p-4 h-full md:col-span-3">
        <div className="underline-offset-6 text-2xl underline">Projects</div>
        {projects.map((project, index) => (
          <div key={index} className="w-full flex-shrink-0 snap-center">
            <Card
              id={project.id}
              title={project.title}
              active={project?.open}
              selectCallback={() => openProject(project.id)}
            />
          </div>
        ))}
      </div>
      <div className="col-span-12 max-h-72 md:col-span-9">
        {" "}
        {/* TODO: add vertical line divider between project list and project description divs */}
        {projects.map(
          (project) =>
            project?.open && (
              <Project
                key={project.id}
                title={project.title}
                duration={project.duration}
                link={project.repoLink}
                tech={project.techStack}
                description={project.description}
                imageUrls={project.images}
                classId={project.id}
              />
            ),
        )}
      </div>
    </div>
  );
};

export default Projects;
