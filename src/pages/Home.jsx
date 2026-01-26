import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import { projectMetaData } from "../Projects/projectMetaData.js";


const Home = () => {
  return (
    <div className="w-full bg-black">
      <div className="mx-auto max-w-7xl p-6 flex gap-5 flex-wrap justify-center sm:justify-start">
        {projectMetaData.map((q, idx) => {
          return (
            <ProjectCard
              key={idx}
              id={q.id}
              title={q.title}
              description={q.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
