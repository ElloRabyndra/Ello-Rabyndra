import AnimatedContent from "../ui/AnimatedContent";
import TechCard from "./TechCard";
import { techs } from "@/database/data";

const TechContent = () => {
  return (
    <AnimatedContent
      distance={70}
      direction="vertical"
      reverse={false}
      duration={1}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0}
      delay={0.6}
    >
      <div className="mt-5 lg:mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-0 gap-y-4 place-items-center">
        {techs.map((tech) => (
          <TechCard key={tech.id} name={tech.name} image={tech.image} />
        ))}
      </div>
    </AnimatedContent>
  );
};

export default TechContent;
