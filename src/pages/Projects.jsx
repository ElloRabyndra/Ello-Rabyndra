import Navbar from "@/components/Navbar";
import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectContent from "@/components/project/ProjectContent";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container mx-auto">
        <Navbar />
        <div className="max-w-7xl mx-auto p-4 pt-24 mb-10 min-h-screen">
          <ProjectHeader />
          <ProjectContent />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Projects;
