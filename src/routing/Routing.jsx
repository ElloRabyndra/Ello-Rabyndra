import { Route, Routes } from "react-router";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Experience from "@/pages/Experience";
import Contact from "@/pages/Contact";

const Routing = () => {
  return (
    <section className={`dark bg-background text-foreground shadow-bg relative`}>
      {/* Subtle dot grid background */}
      <div className="fixed inset-0 dot-grid-bg opacity-40 pointer-events-none z-0" />
      {/* Radial vignette over the grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 0%, oklch(0.2178 0 0 / 0.85) 100%)",
        }}
      />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </section>
  );
};

export default Routing;