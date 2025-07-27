import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Mail } from "lucide-react";
import TextType from "../ui/TextType";
import AnimatedContent from "../ui/AnimatedContent";

const About = () => {
  return (
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
      <Card className="gap-1 transition-shadow duration-300 shadow-inner">
        <a href="/ElloCV.pdf" download="ElloRabyndra CV">
          <CardHeader className="px-4 font-bold text-lg mb-1">
            About Me
          </CardHeader>
          <CardContent className="px-4">
            I'm an Informatics Engineering student with a strong passion for
            programming and graphic design. I have experience in JavaScript
            programming languages and am currently focusing on web development.
            I bring strong teamwork, communication, adaptability, and leadership
            skills
            {/* <TextType
            text={[
              "I'm an Informatics Engineering student with a strong passion for programming and graphic design. I have experience in JavaScript programming languages and am currently focusing on web development. I bring strong teamwork, communication, adaptability, and leadership skills",
            ]}
            typingSpeed={30}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter=""
          /> */}
          </CardContent>
        </a>
        <CardFooter className="pt-2 px-4 flex items-center gap-2 font-bold">
          <Mail size={24} />
          <a href="mailto:ellorabyndra123@gmail.com">
            ellorabyndra123@gmail.com
          </a>
        </CardFooter>
      </Card>
    </AnimatedContent>
  );
};

export default About;
