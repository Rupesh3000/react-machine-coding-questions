import { useNavigate, useParams } from "react-router-dom";
import { questions } from "../data/questions";

const QuestionPage = () => {
  const { id } = useParams();
  const question = questions.find((q) => q.id === id);
  const navigateHome = useNavigate();

  if (!question) {
    return <div className="p-6">Project not found</div>;
  }

  return (
    <div className="mx-auto max-w-7xl p-6">
      <button
        onClick={() => navigateHome("/")}
        className="rounded-lg border border-white/10 bg-black px-7 py-2 hover:border-white/30 cursor-pointer"
      >
        Home
      </button>
      <h1 className="text-2xl font-bold mb-4">{question.title}</h1>
      <p className="text-white/70">{question.description}</p>

      {/* Project code / UI goes here */}
      <h1>this is my Project</h1>
    </div>
  );
};

export default QuestionPage;
