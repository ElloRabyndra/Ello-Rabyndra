import AnimatedContent from "../ui/AnimatedContent";
const TechHeader = () => {
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
      delay={0.3}
    >
      <div className="text-center mt-4">
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold">
          <span className="gray-gradient">Technologies</span> I use
        </h1>
      </div>
    </AnimatedContent>
  );
};

export default TechHeader;
