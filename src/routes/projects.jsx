import React, { useEffect, useState } from "react";
import Card from "../components/card";
import Carousel from "../components/carousel";
import jsonData from "../portfolio_data.json";
import Project from "../components/project";

export default function Projects() {
    const [projects, setProjects] = useState(jsonData?.projects);
//   const [selectedProject, setSelectedProject] = useState(1);
//   const slides = [
//     {
//       image:
//         "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
//       alt: "Slide 1",
//     },
//     {
//       image:
//         "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//       alt: "Slide 2",
//     },
//     { image: "https://i.imgur.com/LGpnTxc.png", alt: "Slide 3" },
//   ];

  const openProject = (id) => {

    const refreshedSelection = projects.map((project) => 
      project.id === id
        ? { ...project, defaultOpen: true }
        : { ...project, defaultOpen: false },
    );
    // fetchOpenProjectData();
    setProjects(refreshedSelection);
  };

  useEffect(() => {
    // console.log("updated projects:" + JSON.stringify(projects));
  }, [projects]);

  return (
    <div className="grid h-full grid-rows-8">
      <div className="row-span-1 grid grid-cols-5 gap-2 bg-yellow-50 p-4">
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
        {projects.map((project) => (
            project?.defaultOpen && <Project
                key={project.id}
                title={project.title}
            />
        ))}
      </div>
    </div>
  );
}
