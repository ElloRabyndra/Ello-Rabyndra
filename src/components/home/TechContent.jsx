import AnimatedContent from "../ui/AnimatedContent";
import TechCard from "./TechCard";

const techs = [
  {
    id: 1,
    name: "HTML",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    id: 2,
    name: "CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    name: "PHP",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  {
    id: 5,
    name: "Java",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    id: 6,
    name: "Python",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    id: 7,
    name: "MySQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    id: 8,
    name: "Tailwind",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 9,
    name: "React JS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 10,
    name: "NodeJS",
    image: "/NodeJS.png",
  },
  {
    id: 11,
    name: "Express",
    image: "/Express.png",
  },
  {
    id: 12,
    name: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];
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
