import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import AboutPage from "./AboutPage";
import Portfolio from "./Portfolio";


function RouterPage() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Projects/>} />

      </Routes>
  );
}

export default RouterPage;