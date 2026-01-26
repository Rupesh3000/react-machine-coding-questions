import { useNavigate, useParams } from "react-router-dom";
import { projectMetaData } from "../Projects/projectMetaData.js";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projectMetaData.find((q) => q.id === id);
  const navigateHome = useNavigate();

  if (!project) {
    return <div className="p-6">Project not found</div>;
  }

  const ProjectComponent = project.component;
  return (
    <div className="mx-auto max-w-7xl p-6">
      <button
        onClick={() => navigateHome("/")}
        className="rounded-lg border border-white/10 bg-black px-7 py-2 hover:border-white/30 cursor-pointer"
      >
        Home
      </button>

      {/* Project code / UI goes here */}
      <ProjectComponent />
    </div>
  );
};

export default ProjectPage;
