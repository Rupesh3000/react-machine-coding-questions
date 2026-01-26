import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import QuestionPage from "./pages/ProjectPage";

function App() {
  return (
    <div className="w-full h-screen bg-black text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions/:id" element={<QuestionPage />} />
      </Routes>
    </div>
  );
}

export default App;
