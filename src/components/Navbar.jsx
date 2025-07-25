import { NavLink } from "react-router";
import { Card } from "./ui/card";
import { House, FolderKanban, BriefcaseBusiness, Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-center">
      <Card className="gap-0 rounded-4xl px-8 py-4 w-max bg-card/60 backdrop-blur-xs shadow-inner">
        <ul className="flex justify-center gap-6">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `flex items-center gap-2 pb-1 border-b-2 transition-colors duration-200 ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-auto border-transparent"
                }`
              }
            >
              <House size={28} />
              <span className="hidden md:inline">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/projects"}
              className={({ isActive }) =>
                `flex items-center gap-2 pb-1 border-b-2 transition-colors duration-200 ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-auto border-transparent"
                }`
              }
            >
              <FolderKanban size={28} />
              <span className="hidden md:inline">Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/experience"}
              className={({ isActive }) =>
                `flex items-center gap-2 pb-1 border-b-2 transition-colors duration-200 ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-auto border-transparent"
                }`
              }
            >
              <BriefcaseBusiness size={28} />
              <span className="hidden md:inline">Experience</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `flex items-center gap-2 pb-1 border-b-2 transition-colors duration-200 ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-auto border-transparent"
                }`
              }
            >
              <Phone size={28} />
              <span className="hidden md:inline">Contact</span>
            </NavLink>
          </li>
        </ul>
      </Card>
    </nav>
  );
};

export default Navbar;
