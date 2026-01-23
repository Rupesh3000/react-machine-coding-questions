import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-full lg:h-screen lg:bg-black lg:text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
