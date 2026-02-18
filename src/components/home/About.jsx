import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Mail, Download } from "lucide-react";
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
      <Card className="gap-1 transition-all duration-300 shadow-inner hover:shadow-[inset_4px_4px_20px_#151515,inset_-4px_-4px_20px_#2b2b2b,0_0_0_1px_oklch(0.45_0_0_/_0.3)] relative overflow-hidden group">
        {/* Subtle top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <CardHeader className="px-4 font-bold text-base mb-1 flex flex-row items-center gap-2">
          <span className="w-1.5 h-5 rounded-full gray-gradient inline-block shrink-0" style={{ background: 'linear-gradient(to bottom, var(--muted-foreground), var(--foreground))', WebkitBackgroundClip: 'unset', WebkitTextFillColor: 'unset', backgroundClip: 'unset', color: 'unset' }} />
          <span>About Me</span>
        </CardHeader>

        <CardContent className="px-4 text-sm leading-relaxed text-muted-foreground">
          I&apos;m an Informatics Engineering student with a strong passion for
          programming and graphic design. I have experience in JavaScript
          programming languages and am currently focusing on web development.
          I bring strong teamwork, communication, adaptability, and leadership
          skills.
        </CardContent>

        <CardFooter className="pt-2 px-4 flex items-center justify-between">
          <a
            href="mailto:ellorabyndra123@gmail.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group/mail"
          >
            <Mail size={16} className="group-hover/mail:scale-110 transition-transform duration-200" />
            <span className="truncate">ellorabyndra123@gmail.com</span>
          </a>
          <a
            href="/ElloCV.pdf"
            download="ElloRabyndra CV"
            className="flex items-center gap-1.5 text-xs border rounded-lg px-3 py-1.5 shadow-inner text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
          >
            <Download size={13} />
            <span>CV</span>
          </a>
        </CardFooter>
      </Card>
    </AnimatedContent>
  );
};

export default About;