import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

const ProjectCard = ({ project }) => {
  return (
    <Card className="pt-0 gap-2 shadow-inner overflow-hidden hover:-translate-y-2 transition-all duration-300  group w-full">
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-black/50 text-white/80 border border-white/10 backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      <CardHeader className="gap-1 mt-1">
        <h1 className="text-lg font-bold group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h1>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm font-thin leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tittle) => (
            <p
              key={tittle}
              className="w-max border text-xs py-0.5 px-2.5 rounded-full shadow-inner text-muted-foreground"
            >
              {tittle}
            </p>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <a href={project.github} target="_blank">
          <Button className="text-white gray-gradient border flex items-center shadow-inner rounded-xl cursor-pointer hover:-translate-y-0.5 transition-transform duration-200">
            <i className="bx bxl-github text-base"></i>Github
          </Button>
        </a>
        {project.link && (
          <a href={project.link} target="_blank">
            <Button className="text-white gray-gradient border flex items-center shadow-inner rounded-xl cursor-pointer hover:-translate-y-0.5 transition-transform duration-200">
              <i className="bx bx-link-external text-base"></i> View
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
