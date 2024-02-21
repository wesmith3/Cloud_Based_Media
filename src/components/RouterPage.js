import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Projects from "./Projects"
import AboutPage from "./AboutPage"
import Contact from "./Contact"
import Services from "./Services"
import Portfolio from "./Portfolio"


function RouterPage() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
  )
}

export default RouterPage