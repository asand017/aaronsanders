import React, { useEffect, useState } from "react";
import Card from "../components/card";
import Carousel from "../components/carousel";
import jsonData from "../portfolio_data.json";
import Project from "../components/project";

export default function Projects({ref}) {
  const [projects, setProjects] = useState(jsonData?.projects);

  const openProject = (id) => {
    const refreshedSelection = projects.map((project) =>
      project.id === id
        ? { ...project, defaultOpen: true }
        : { ...project, defaultOpen: false },
    );

    setProjects(refreshedSelection);
  };

  return (
    <div ref={ref} className="grid h-full grid-rows-8">
      <div className="row-span-1 flex flex-row space-x-4 bg-yellow-50 p-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            title={project.title}
            active={project?.defaultOpen}
            selectCallback={() => openProject(project.id)}
          />
        ))}
      </div>
      <div className="row-span-7 bg-yellow-500">
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
