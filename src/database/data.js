import NodeJS from "../assets/NodeJS.png";
import Express from "../assets/Express.png";
import dasarngodingid from "../assets/dasarngodingid.png";
import katalogBsb from "../assets/katalogBsb.png";
import gdgoc from "../assets/gdgoc.png";
import ecosphere from "../assets/ecosphere.png";
import Thriftoria from "../assets/Thriftoria.png";
import fasilkom from "../assets/fasilkom.png";
import tastico from "../assets/tastico.png";
import warehouseDashboard from "../assets/warehouseDashboard.png";
import MarketPlace from "../assets/MarketPlace.png";
import spotify from "../assets/spotify.png";
import tudo from "../assets/tudo.jpg";
import expertSystem from "../assets/expertSystem.png";
import MyNotes from "../assets/MyNotes.png";
import MyOshi from "../assets/MyOshi.png";
import NimValidation from "../assets/NimValidation.png";

// Tech Stack
const techs = [
  {
    id: 1,
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
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
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 8,
    name: "React.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 9,
    name: "NodeJS",
    image: NodeJS,
  },
  {
    id: 10,
    name: "Express",
    image: Express,
  },
  {
    id: 11,
    name: "Supabase",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
  {
    id: 12,
    name: "Firebase",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
  {
    id: 13,
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
    title: "DasarNgoding",
    description:
      "An educational programming platform for beginners focusing on fundamentals and project-based learning.",
    image: dasarngodingid,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://dasarngodingid.vercel.app/",
    github: "https://github.com/ElloRabyndra/DasarNgoding",
  },
  {
    id: 2,
    category: "Website",
    title: "Bank Sumsel Babel Digital Catalog",
    description:
      "A digital catalog web portal for banking products. Features admin panel, text editor, and authentication.",
    image: katalogBsb,
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    link: "https://bank-sumsel-babel-catalog.vercel.app/",
    github: "https://github.com/ElloRabyndra/Bank-Sumsel-Babel-Catalog",
  },
  {
    id: 3,
    category: "Website",
    title: "GDGoC Unsri Management System",
    description:
      "A management system for GDGOC Unsri for member management, event tracking with committee roles, and a leaderboard system.",
    image: gdgoc,
    tech: ["Next.js", "ShadCn", "Firebase", "React Query"],
    link: "https://gdgoc-unsri-management-system.vercel.app/",
    github: "https://github.com/ElloRabyndra/gdgoc-unsri-management-system",
  },
  {
    id: 4,
    category: "Website",
    title: "EcoSphere",
    description:
      "An interactive educational website utilizing gamification to encourage children take simple, consistent environmental actions.",
    image: ecosphere,
    tech: ["React", "ShadCn", "NodeJS", "MySQL"],
    link: "https://echosphere-cyan.vercel.app/",
    github: "https://github.com/ElloRabyndra/EcoSphere",
  },
  {
    id: 5,
    category: "Website",
    title: "Thriftoria Mart",
    description:
      "Full-stack thrift marketplace with multi-role system, shop approval workflow, real-time cart & order tracking",
    image: Thriftoria,
    tech: ["React", "ShadCn", "Go", "Fiber", "MySQL"],
    link: "https://thriftoria-team-green-v2.vercel.app/",
    github: "https://github.com/ElloRabyndra/Team_Green_Thriftoria",
  },
  {
    id: 6,
    category: "Website",
    title: "Fasilkom Unsri",
    description:
      "A project to redesign the official website for the Faculty of Computer Science at Sriwijaya University.",
    image: fasilkom,
    tech: ["React", "Tailwind", "Go", "Fiber", "MySQL"],
    link: "https://fasilkom-universitas-sriwijaya.vercel.app/",
    github: "https://github.com/ElloRabyndra/Fasilkom-Universitas-Sriwijaya",
  },
  {
    id: 7,
    category: "Website",
    title: "Digital Business Feasibility",
    description:
      "An expert system designed to analyze and evaluate business ideas to help entrepreneurs make data-driven feasibility decisions",
    image: expertSystem,
    tech: ["React", "Tailwind CSS"],
    link: "https://digital-business-feasibility-expert.vercel.app/",
    github:
      "https://github.com/ElloRabyndra/digital-business-feasibility-expert-system",
  },
  {
    id: 8,
    category: "Website",
    title: "Spotify Web Client Clone",
    description:
      "A pixel-perfect Spotify Web Player replica featuring dynamic color extraction, global audio state management, and a fully responsive interface.",
    image: spotify,
    tech: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
    link: "https://spotify-client-clone.vercel.app/",
    github: "https://github.com/ElloRabyndra/spotify-client-clone",
  },
  {
    id: 9,
    category: "Mobile",
    title: "TuDo",
    description:
      "A cross-platform task management app with smart subtask tracking, automated status updates, and deadline validation.",
    image: tudo,
    tech: ["React Native", "NativeWind", "Go", "SQLite"],
    link: "",
    github: "https://github.com/ElloRabyndra/TuDo",
  },
  {
    id: 10,
    category: "Website",
    title: "Tastico",
    description:
      "A modern, responsive restaurant website with an elegant user interface for browsing menus, placing orders, and managing user accounts.",
    image: tastico,
    tech: ["React", "Tailwind", "Go", "MySQL"],
    link: "https://tastico.vercel.app/",
    github: "https://github.com/ElloRabyndra/tastico",
  },
  {
    id: 11,
    category: "Website, IoT",
    title: "Warehouse Dashboard",
    description:
      "An interactive and real-time web dashboard for monitoring warehouse temperature and humidity.",
    image: warehouseDashboard,
    tech: ["React", "Tailwind", "C++", "Wokwi"],
    link: "https://warehouse-dashboard-self.vercel.app/",
    github: "https://github.com/ElloRabyndra/Warehouse-Dashboard",
  },
  {
    id: 12,
    category: "Website",
    title: "Marketplace Management",
    description:
      "A PHP-MySQL marketplace system with auth, role-based access, product CRUD, image upload, and responsive light/dark mode UI.",
    image: MarketPlace,
    tech: ["PHP", "Jquery", "Tailwind", "MySQL"],
    link: "",
    github: "https://github.com/ElloRabyndra/MarketPlaceManagement",
  },
  // {
  //   id: 13,
  //   category: "Website",
  //   title: "MyNotes",
  //   description:
  //     "A responsive note-taking app with authentication, CRUD features, and pinning, built using Node.js and Tailwind CSS.",
  //   image: MyNotes,
  //   tech: ["Tailwind", "NodeJS", "Express", "EJS", "MySQL"],
  //   link: "https://ellorabyndra.github.io/MyNotes/",
  //   github: "https://github.com/ElloRabyndra/MyNotes-old",
  // },
  // {
  //   id: 14,
  //   category: "Website",
  //   title: "MyOshi",
  //   description:
  //     "An interactive JKT48 member gallery with pagination and gacha system to discover your favorite member.",
  //   image: MyOshi,
  //   tech: ["React", "Tailwind"],
  //   link: "https://myoshi.vercel.app/",
  //   github: "https://github.com/ElloRabyndra/MyOshi",
  // },
  // {
  //   id: 15,
  //   category: "Website",
  //   title: "Nim Validation",
  //   description:
  //     "A Flask-based NIM validator for Sriwijaya University, using regular grammar to check format compliance.",
  //   image: NimValidation,
  //   tech: ["Python", "Flask", "Tailwind", "Javascript"],
  //   link: "https://nim-validation.vercel.app/",
  //   github: "https://github.com/ElloRabyndra/Nim_Validation",
  // },
];

// Experiences
const Experiences = [
  {
    id: 1,
    company: "Google Developer Group on Campus Unsri",
    position: "Core Team of Front End Development",
    year: "Jan 2026 - Present",
    description:
      "Led frontend development learning initiatives at GDGoC UNSRI, teaching modern web technologies including React, Tailwind CSS, and Firebase. Designed the curriculum, facilitated hands-on sessions, and mentored members through real-world projects and code reviews.",
    tech: ["Javascript", "React", "Tailwind", "Firebase"],
  },
  {
    id: 2,
    company: "Bank Sumsel Babel Palembang",
    position: "Information Technology and Information Systems Intern",
    year: "Dec 2025 - Jan 2026",
    description:
      "Built a digital catalog web portal with an integrated CMS using Next.js and Supabase (PostgreSQL). Developed the database schema, admin panel with authentication and rich text editing, and deployed on Vercel, enabling non-technical staff to manage content independently and eliminating update bottlenecks.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
  },
  {
    id: 3,
    company: "Google Developer Group on Campus Unsri",
    position: "Member of Front End Development",
    year: "Jan 2025 - Nov 2025",
    description:
      "Strengthened front-end development skills with React.js and Tailwind CSS through collaborative projects and curriculum design. Co-led training sessions and resource creation, supporting 30+ learners in a hands-on web development program.",
    tech: ["Javascript", "React", "Tailwind", "Figma"],
  },
  {
    id: 4,
    company: "Himpunan Mahasiswa Informatika Unsri",
    position: "Staff of Information Technology Development",
    year: "Feb 2024 - Dec 2024",
    description:
      "Contributed to multiple tech and academic initiatives by developing web skills, designing competitive programming problems, and leading a large-scale training program with 150+ participants. Successfully coordinated events, mentors, and judges.",
    tech: ["Javascript", "Tailwind", "Java"],
  },
  {
    id: 5,
    company: "Google Developer Student Club Unsri",
    position: "Member of Graphic Design Division",
    year: "Nov 2023 - Aug 2024",
    description:
      "Created visual content and event assets using Figma and Photoshop, supporting GDSC Unsri's branding across social media. Took creative leadership in design projects and handled camerawork for events.",
    tech: ["Figma", "Photoshop"],
  },
];

export { techs, projects, Experiences };
