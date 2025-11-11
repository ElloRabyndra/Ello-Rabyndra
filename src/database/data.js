// Tech Stack
const techs = [
  {
    id: 1,
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id: 2,
    name: "PHP",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  {
    id: 3,
    name: "Java",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    id: 4,
    name: "Python",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    id: 5,
    name: "MySQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    id: 6,
    name: "Tailwind",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 7,
    name: "React JS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 8,
    name: "NodeJS",
    image: "/NodeJS.png",
  },
  {
    id: 9,
    name: "Express",
    image: "/Express.png",
  },
  {
    id: 10,
    name: "Firebase",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
  {
    id: 11,
    name: "Figma",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    id: 12,
    name: "Photoshop",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
  },
];

// Projects
const projects = [
  {
    id: 1,
    category: "Website",
    title: "EcoSphere",
    description:
      "An interactive educational website utilizing gamification to encourage children take simple, consistent environmental actions.",
    image: "/ecosphere.png",
    tech: ["React", "ShadCn", "NodeJS", "MySQL"],
    link: "https://echosphere-cyan.vercel.app/",
    github: "https://github.com/ElloRabyndra/EcoSphere",
  },
  {
    id: 2,
    category: "Website",
    title: "Redesign Fasilkom Unsri",
    description:
      "A project to redesign the official website for the Faculty of Computer Science at Sriwijaya University.",
    image: "/fasilkom.png",
    tech: ["React", "Tailwind", "Go", "Fiber", "MySQL"],
    link: "https://fasilkom-universitas-sriwijaya.vercel.app/",
    github: "https://github.com/ElloRabyndra/Fasilkom-Universitas-Sriwijaya",
  },
  {
    id: 3,
    category: "Website",
    title: "Thriftoria",
    description:
      "Full-stack thrift marketplace with multi-role system, shop approval workflow, real-time cart & order tracking, powered by React and Go Fiber REST API.",
    image: "/Thriftoria.png",
    tech: ["React", "ShadCn", "Go", "Fiber", "MySQL"],
    link: "https://thriftoria-team-green-v2.vercel.app/",
    github: "https://github.com/ElloRabyndra/Team_Green_Thriftoria",
  },
  {
    id: 4,
    category: "Website",
    title: "Tastico",
    description:
      "A modern, responsive restaurant website with an elegant user interface for browsing menus, placing orders, and managing user accounts.",
    image: "/tastico.png",
    tech: ["React", "Tailwind", "Go", "MySQL"],
    link: "https://tastico.vercel.app/",
    github: "https://github.com/ElloRabyndra/tastico",
  },
  {
    id: 5,
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
    id: 6,
    category: "Website, IoT",
    title: "Warehouse Dashboard",
    description:
      "An interactive and real-time web dashboard for monitoring warehouse temperature and humidity.",
    image: "/warehouse-dashboard.png",
    tech: ["React", "Tailwind", "C++", "Wokwi"],
    link: "https://warehouse-dashboard-self.vercel.app/",
    github: "https://github.com/ElloRabyndra/Warehouse-Dashboard",
  },
  {
    id: 7,
    category: "Website",
    title: "MyNotes",
    description:
      "A responsive note-taking app with authentication, CRUD features, and pinning, built using Node.js and Tailwind CSS.",
    image: "/MyNotes.png",
    tech: ["Tailwind", "NodeJS", "Express", "EJS", "MySQL"],
    link: "https://ellorabyndra.github.io/MyNotes/",
    github: "https://github.com/ElloRabyndra/MyNotes-old",
  },
  {
    id: 8,
    category: "Website",
    title: "Nim Validation",
    description:
      "A Flask-based NIM validator for Sriwijaya University, using regular grammar to check format compliance.",
    image: "/NimValidation.png",
    tech: ["Python", "Flask", "Tailwind", "Javascript"],
    link: "https://nim-validation.vercel.app/",
    github: "https://github.com/ElloRabyndra/Nim_Validation",
  },
  {
    id: 9,
    category: "Website",
    title: "MyOshi",
    description:
      "An interactive JKT48 member gallery with pagination and gacha system to discover your favorite member.",
    image: "/MyOshi.png",
    tech: ["React", "Tailwind"],
    link: "https://myoshi.vercel.app/",
    github: "https://github.com/ElloRabyndra/MyOshi",
  },
];

// Experiences
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

export { techs, projects, Experiences };
