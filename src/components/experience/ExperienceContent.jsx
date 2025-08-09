import AnimatedContent from "../ui/AnimatedContent";
import ExperienceCard from "./ExperienceCard";
import { Experiences } from "@/database/data";

const ExperienceContent = () => {
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
      <div className="mt-6 lg:mt-12 max-w-4xl mx-auto">
        <div className="relative">
          {Experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isLast={index === Experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </AnimatedContent>
  );
};

export default ExperienceContent;
