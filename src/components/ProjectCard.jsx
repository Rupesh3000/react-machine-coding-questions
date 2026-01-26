import { Link } from "react-router-dom";

const ProjectCard = ({ id, title, description }) => {
  return (
    <Link to={`/questions/${id}`}>
      <div className="min-h-56 cursor-pointer rounded-lg border border-white/10 bg-black p-5 sm:max-w-74 w-96 hover:border-white/30">
        <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/60">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
