import React, { useEffect, useState, useContext } from "react";
import Card from "../components/card";
import Project from "../components/project";
import PageContext from "../contexts/PageContext";
import useFetchPortfolio from "../hooks/useFetchPortfolio";
import anime from "animejs/lib/anime.es.js";
import { PROJECTS_URL } from "../utils/constants";
import useScreenSize from "../hooks/useScreenSize";

const Projects = ({ ref }) => {
  const { projectsData } = useFetchPortfolio();
  const screenSize = useScreenSize();
  const { currentPage, setCurrentPage } = useContext(PageContext);
  const [projects, setProjects] = useState(projectsData);

  useEffect(() => {
    anime.timeline({ duration: 300 }).add({
      targets: ".projects-container",
      opacity: 1,
      easing: "easeOutSine",
      delay: 400,
    });
  }, []);

  useEffect(() => {
    if (currentPage != PROJECTS_URL) {
      console.log("current page: " + currentPage);
      anime.timeline({ duration: 150 }).add({
        targets: ".projects-container",
        opacity: 0,
        translateX: screenSize?.width,
        easing: "linear",
        complete: (anim) => {
          console.log("fadeOut done");
          //navigate(PROJECTS_URL);
        },
      });
    }
  }, [currentPage]);

  const openProject = (id) => {
    const refreshedSelection = projects.map((project) =>
      project.id === id
        ? { ...project, defaultOpen: true }
        : { ...project, defaultOpen: false },
    );

    setProjects(refreshedSelection);
  };

  return (
    // TODO: layout is showing wonky
    <div
      ref={ref}
      id="projects"
      className="projects-container flex h-full w-full flex-col opacity-0"
    >
      <div className="flex w-full snap-x flex-row flex-nowrap space-x-4 overflow-x-auto bg-yellow-50 p-4">
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
      <div className="bg-yellow-500">
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
