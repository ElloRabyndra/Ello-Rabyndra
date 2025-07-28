import AnimatedContent from "../ui/AnimatedContent";

const HeaderHome = () => {
  return (
    <>
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={1}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={0.3}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center lg:text-left">
          <span className="gray-gradient">Ello Raby</span>ndra
        </h1>
      </AnimatedContent>
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={1}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={0.4}
      >
        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-center lg:text-left">
          Web Developer
        </h2>
      </AnimatedContent>
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={1}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={0.5}
      >
        <p className="mt-2 text-sm sm:text-base lg:text-lg font-thin text-center lg:text-left">
          Crafting <span className="font-bold gray-gradient">code</span> and{" "}
          <span className="font-bold gray-gradient">visuals</span> with purpose
        </p>
      </AnimatedContent>
    </>
  );
};

export default HeaderHome;
