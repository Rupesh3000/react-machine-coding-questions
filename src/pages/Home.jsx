import React from "react";
import QuestionCard from "../components/QuestionCard";
import { questions } from "../data/questions.js";

const Home = () => {
  return (
    <div className="w-full bg-black">
      <div className="mx-auto max-w-7xl p-6 flex gap-5 flex-wrap justify-center sm:justify-start">
        {questions.map((q, idx) => {
          return (
            <QuestionCard
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
