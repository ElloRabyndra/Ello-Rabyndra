import Navbar from "@/components/Navbar";
import ExperienceHeader from "@/components/experience/ExperienceHeader";
import Footer from "@/components/Footer";
import ExperienceContent from "@/components/experience/ExperienceContent";

const Experience = () => {
  return (
    <section id="Experience">
      <div className="container mx-auto">
        <Navbar />
        <div className="p-4 max-w-7xl mx-auto pt-24  min-h-screen">
          <ExperienceHeader />
          <ExperienceContent />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Experience;
