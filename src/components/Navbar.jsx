import { NavLink } from "react-router";
import { Card } from "./ui/card";
import { House, FolderKanban, BriefcaseBusiness, Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-center">
      <Card className="gap-0 rounded-4xl px-8 py-4 w-max bg-card/60 backdrop-blur-sm shadow-inner border-border/60">
        <ul className="flex justify-center gap-6">
          {[
            { to: "/", icon: <House size={22} />, label: "Home" },
            { to: "/projects", icon: <FolderKanban size={22} />, label: "Projects" },
            { to: "/experience", icon: <BriefcaseBusiness size={22} />, label: "Experience" },
            { to: "/contact", icon: <Phone size={22} />, label: "Contact" },
          ].map(({ to, icon, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-2 pb-1 border-b-2 transition-all duration-200 relative ${
                    isActive
                      ? "text-primary border-primary nav-active-glow"
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  }`
                }
              >
                {icon}
                <span className="hidden md:inline text-sm font-medium">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </Card>
    </nav>
  );
};

export default Navbar;