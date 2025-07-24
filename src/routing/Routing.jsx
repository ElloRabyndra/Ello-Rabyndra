import { Route, Routes } from "react-router";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Experience from "@/pages/Experience";
import Contact from "@/pages/Contact";

const Routing = () => {
  return (
    <section className={`dark bg-background text-foreground shadow-bg`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </section>
  );
};

export default Routing;
