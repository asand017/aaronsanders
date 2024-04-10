import React, { useEffect, useState } from "react";
import Card from "../components/card";
import Project from "../components/project";
import useFetchPortfolio from "../hooks/useFetchPortfolio";

export default function Projects({ ref }) {
  const { projectsData } = useFetchPortfolio();
  const [projects, setProjects] = useState(projectsData);

  const openProject = (id) => {
    const refreshedSelection = projects.map((project) =>
      project.id === id
        ? { ...project, defaultOpen: true }
        : { ...project, defaultOpen: false },
    );

    setProjects(refreshedSelection);
  };

  return ( // TODO: layout is showing wonky
    <div ref={ref} id="projects" className="flex flex-col h-full w-full">
      <div className="flex flex-row w-full snap-x space-x-4 flex-nowrap overflow-x-auto bg-yellow-50 p-4">
        {projects.map((project,index) => (
          <div key={index} className="flex-shrink-0 snap-center w-full md:w-1/2">
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
}
