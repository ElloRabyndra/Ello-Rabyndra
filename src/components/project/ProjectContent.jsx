import { useState } from "react";
import AnimatedContent from "../ui/AnimatedContent";
import ProjectCard from "./ProjectCard";
import { projects } from "@/database/data";
import { Button } from "../ui/button";

const ProjectContent = () => {
  const [showAll, setShowAll] = useState(false);
  const initialProjectCount = 6;

  const displayedProjects = showAll
    ? projects
    : projects.slice(0, initialProjectCount);

  const shouldShowMoreButton =
    !showAll && projects.length > initialProjectCount;

  const shouldShowLessButton = showAll && projects.length > initialProjectCount;

  const handleToggleProjects = () => {
    setShowAll(!showAll);
  };
  return (
    <>
      <AnimatedContent
        distance={50}
        direction="vertical"
        reverse={false}
        duration={1}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0}
        delay={0.4}
      >
        <div className="mt-5 lg:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </AnimatedContent>

      {/* More Projects / Show Less Button */}
      {(shouldShowMoreButton || shouldShowLessButton) && (
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleToggleProjects}
            className="text-white gray-gradient border shadow-inner rounded-xl px-8 py-3 hover:-translate-y-1 transition-transform duration-300"
          >
            {showAll ? (
              <>
                <i className="bx bx-chevron-up text-base mr-2"></i>
                Show Less Projects
              </>
            ) : (
              <>
                <i className="bx bx-chevron-down text-base mr-2"></i>
                More Projects ({projects.length - initialProjectCount} more)
              </>
            )}
          </Button>
        </div>
      )}
    </>
  );
};

export default ProjectContent;
