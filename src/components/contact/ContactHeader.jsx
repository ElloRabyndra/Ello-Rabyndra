import AnimatedContent from "../ui/AnimatedContent";

const ContactHeader = () => {
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
          Get in <span className="gray-gradient">Touch</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground">
          Feel free to reach out for collaborations, project inquiries, or just
          to say hello!
        </p>
      </div>
    </AnimatedContent>
  );
};

export default ContactHeader;
