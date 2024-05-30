import React from 'react';
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
      id: 1,
      title: "Movie genre classification ML model",
      description: "Project 1 description",
      image: "/images/projects/placeholder_ml_movies.png",
      tag: ["All", "Machine Learning"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Prosthesis pigmentation regression ML model",
      description: "Project 2 description",
      image: "/images/projects/placeholder_ml_prosthesis.png",
      tag: ["All", "Machine Learning"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Java|Spring Boot back-end game library app",
      description: "Project 3 description",
      image: "/images/projects/placeholder_backend_app.png",
      tag: ["All", "Back-end"],
      gitUrl: "/",
      previewUrl: "/",
    }
];

const ProjectsSection = () => {
    return (
      <>
        <h2 className="text-white text-3xl font-bold my-8">My Projects</h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <button className="rounded-full border-2 border-gray-500 px-6 py-3 text-xl cursor-pointer">All</button>
          <button className="rounded-full border-2 border-gray-500 px-6 py-3 text-xl cursor-pointer">Machine Learning</button>
          <button className="rounded-full border-2 border-gray-500 px-6 py-3 text-xl cursor-pointer">Back-end</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </>
    );
}

export default ProjectsSection;
