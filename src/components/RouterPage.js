import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutPage from "./AboutPage";



function RouterPage() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
  );
}

export default RouterPage;