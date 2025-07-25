import { Card, CardContent, CardHeader } from "../ui/card";

const ExperienceCard = ({ experience, isLast }) => {
  return (
    <div className="relative flex items-start group">
      {/* Timeline */}
      <div className="mt-28 hidden sm:flex flex-col items-center mr-6 relative">
        <div className="w-4 h-4 gray-gradient rounded-full border-4 border-border shadow-inner z-10 group-hover:scale-110 transition-transform duration-300"></div>
      </div>
      {!isLast && (
        <div className="mt-28 hidden sm:block w-0.5 bg-border left-[7px] absolute top-4 h-[100%]"></div>
      )}

      {/* Card */}
      <Card className="flex-1 mb-8 shadow-inner hover:-translate-y-1 transition-transform duration-300 border">
        <CardHeader>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-primary">
                {experience.company}
              </h3>
              <h4 className="text-base font-semibold mt-1">
                {experience.position}
              </h4>
            </div>
            <div className="w-max border text-xs sm:text-sm py-1 px-3 rounded-full shadow-inner bg-muted">
              <i className="bx bx-calendar text-sm mr-1"></i>
              {experience.year}
            </div>
          </div>
        </CardHeader>
        <CardContent className="-mt-2">
          <p className="text-sm font-thin leading-relaxed">
            {experience.description}
          </p>
          <div className="mt-2 flex gap-2 items-center text-sm">
          <i className="bx bx-layer"></i>
          <p>Technologies</p>
          </div>
          <div className="mt-2 flex gap-2">
            {experience.tech.map((tittle) => (
              <p
                key={tittle}
                className="w-max border text-xs sm:text-sm py-1 px-2 rounded-full shadow-inner"
              >
                {tittle}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperienceCard;
