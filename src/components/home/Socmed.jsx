import AnimatedContent from "../ui/AnimatedContent";
const Socmed = () => {
  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={1}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.2}
      delay={0.7}
    >
      <div className="text-center mt-4 space-y-3">
        <div className="flex items-center justify-center lg:justify-start gap-2 text-3xl lg:text-4xl">
          <a
            href="https://www.linkedin.com/in/ello-rabyndra/"
            target="_blank"
            className="bx bxl-linkedin-square block border rounded-full p-2 hover:text-primary transition-colors duration-200 shadow-inner"
          ></a>
          <a
            href="https://github.com/ElloRabyndra"
            target="_blank"
            className="bx bxl-github block border rounded-full p-2 hover:text-primary transition-colors duration-200 shadow-inner"
          ></a>
          <a
            href="https://www.instagram.com/ellorabyndra/"
            target="_blank"
            className="bx bxl-instagram-alt block border rounded-full p-2 hover:text-primary transition-colors duration-200 shadow-inner"
          ></a>
          <a
            href="/ElloCV.pdf"
            download="ElloRabyndra CV"
            className="bx bx-file block border rounded-full p-2 hover:text-primary transition-colors duration-200 shadow-inner"
          ></a>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default Socmed;
