import { Card, CardContent, CardHeader } from "../ui/card";
import ExperienceCard from "./ExperienceCard";

const Experiences = [
  {
    id: 1,
    company: "Google Developer Student Club Unsri",
    position: "Member of Graphic Design Division",
    year: "Nov 2023 - Aug 2024",
    description:
      "Created visual content and event assets using Figma and Photoshop, supporting GDSC Unsri's branding across social media. Took creative leadership in design projects and handled camerawork for events.",
    tech: ["Figma", "Photoshop"],
  },
  {
    id: 2,
    company: "Himpunan Mahasiswa Informatika Unsri",
    position: "Staff of Information Technology Development",
    year: "Feb 2024 - Dec 2024",
    description:
      "Contributed to multiple tech and academic initiatives by developing web skills, designing competitive programming problems, and leading a large-scale training program with 150+ participants. Successfully coordinated events, mentors, and judges.",
    tech: ["Javascript", "Tailwind", "Java"],
  },
  {
    id: 3,
    company: "Google Developer Group on Campus Unsri",
    position: "Member of Front End Development",
    year: "Jan 2025 - Present",
    description:
      "Strengthened front-end development skills with React.js and Tailwind CSS through collaborative projects and curriculum design. Co-led training sessions and resource creation, supporting 30+ learners in a hands-on web development program.",
    tech: ["Javascript", "React", "Tailwind", "Figma"],
  },
];

const ExperienceContent = () => {
  return (
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
  );
};

export default ExperienceContent;
