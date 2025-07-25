import ProjectCard from "./ProjectCard";
const projects = [
  {
    id: 1,
    category: "Website",
    title: "Thriftoria",
    description:
      "A minimalist thrift store app with auth, category-based browsing, and cart system powered by a REST API.",
    image: "/Thriftoria.png",
    tech: ["React", "Tailwind", "ShadCn"],
    link: "https://thriftoria.vercel.app/",
    github: "https://github.com/ElloRabyndra/Thriftoria",
  },
  {
    id: 2,
    category: "Website",
    title: "Marketplace Management",
    description:
      "A PHP-MySQL marketplace system with auth, role-based access, product CRUD, image upload, and responsive light/dark mode UI.",
    image: "/MarketPlace.png",
    tech: ["PHP", "Jquery", "Tailwind", "MySQL"],
    link: "",
    github: "https://github.com/ElloRabyndra/MarketPlaceManagement",
  },
  {
    id: 3,
    category: "Website",
    title: "BukuKu",
    description:
      "A collaborative book management app with auth, categories, and full CRUD, built using Node.js and MySQL.",
    image: "/BukuKu.png",
    tech: ["NodeJS", "Express", "EJS", "MySQL"],
    link: "https://ellorabyndra.github.io/BukuKu-FrontEnd/",
    github: "https://github.com/ElloRabyndra/BukuKu",
  },
  {
    id: 4,
    category: "Website",
    title: "MyNotes",
    description:
      "A responsive note-taking app with authentication, CRUD features, and pinning, built using Node.js and Tailwind CSS.",
    image: "/MyNotes.png",
    tech: ["NodeJS", "Express", "EJS", "MySQL"],
    link: "",
    github: "https://github.com/ElloRabyndra/MyNotes-old",
  },
  {
    id: 5,
    category: "Website",
    title: "Nim Validation",
    description: "A Flask-based NIM validator for Sriwijaya University, using regular grammar to check format compliance.",
    image: "/NimValidation.png",
    tech: ["Python", "Flask", "Tailwind", "Javascript"],
    link: "",
    github: "https://github.com/ElloRabyndra/Nim_Validation",
  },
  {
    id: 6,
    category: "Website",
    title: "Warehouse Monitoring",
    description:
      "An ESP32-powered IoT system for real-time warehouse monitoring with automation and Telegram alerts for safety compliance.",
    image: "/Warehouse.png",
    tech: ["C++", "Wokwi"],
    link: "",
    github: "https://github.com/ElloRabyndra/Warehouse-Monitoring",
  },
];

const ProjectContent = () => {
  return (
    <div className="mt-5 lg:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectContent;
