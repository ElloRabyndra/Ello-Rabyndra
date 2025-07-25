import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

const ProjectCard = ({ project }) => {
  return (
    <Card className="pt-0 gap-2 shadow-inner overflow-hidden hover:-translate-y-1.5 transition-transform duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="aspect-video object-fit"
      />
      <CardHeader className="gap-1 mt-1">
        <p className="text-sm text-primary">{project.category}</p>
        <h1 className="text-lg font-bold">{project.title}</h1>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm font-thin">{project.description}</p>
        <div className="flex gap-2 -ml-1">
          {project.tech.map((tittle) => (
            <p
              key={tittle}
              className="w-max border text-xs sm:text-sm py-1 px-2 rounded-full shadow-inner"
            >
              {tittle}
            </p>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2 -ml-1">
        <a href={project.github} target="_blank">
          <Button className="text-white gray-gradient border flex items-center shadow-inner rounded-xl cursor-pointer">
            <i className="bx bxl-github text-base"></i>Github
          </Button>
        </a>
        {project.link && (
          <a href={project.link} target="_blank">
            <Button className="text-white gray-gradient border flex items-center shadow-inner rounded-xl cursor-pointer">
              <i className="bx bx-link-external text-base"></i> View
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
