import AnimatedContent from "../ui/AnimatedContent";
import ProjectCard from "./ProjectCard";
import { projects } from "@/database/data";

const ProjectContent = () => {
  return (
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
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </AnimatedContent>
  );
};

export default ProjectContent;
