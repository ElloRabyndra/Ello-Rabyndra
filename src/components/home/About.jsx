import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Mail } from "lucide-react";

const About = () => {
  return (
    <Card className="gap-1 transition-shadow duration-300 shadow-inner">
      <a href="/ElloCV.pdf" download="ElloRabyndra CV">
        <CardHeader className="px-4 font-bold text-lg mb-1">
          About Me
        </CardHeader>
        <CardContent className="px-4">
          I'm an Informatics Engineering student with a strong passion for
          programming and graphic design. I have experience in JavaScript
          programming languages and am currently focusing on web development. I
          bring strong teamwork, communication, adaptability, and leadership
          skills
        </CardContent>
      </a>
      <CardFooter className="pt-2 px-4 flex items-center gap-2 font-bold">
        <Mail size={24} />
        <a href="mailto:ellorabyndra123@gmail.com">ellorabyndra123@gmail.com</a>
      </CardFooter>
    </Card>
  );
};

export default About;
