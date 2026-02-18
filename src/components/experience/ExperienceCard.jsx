import { Card, CardContent, CardHeader } from "../ui/card";

const ExperienceCard = ({ experience, isLast }) => {
  return (
    <div className="relative flex items-start group">
      {/* Timeline */}
      <div className="mt-28 hidden sm:flex flex-col items-center mr-6 relative">
        <div className="w-4 h-4 gray-gradient rounded-full border-2 border-primary/40 shadow-inner z-10 group-hover:scale-125 transition-transform duration-300 timeline-dot"></div>
      </div>
      {!isLast && (
        <div
          className="mt-28 hidden sm:block w-px left-[7px] absolute top-4 h-[100%]"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.5 0 0 / 0.6), oklch(0.35 0 0 / 0.2))",
          }}
        />
      )}

      {/* Card */}
      <Card className="flex-1 mb-8 shadow-inner hover:-translate-y-1.5 hover:shadow-[inset_4px_4px_20px_#151515,inset_-4px_-4px_20px_#2b2b2b,0_0_0_1px_oklch(0.45_0_0_/_0.3)] transition-all duration-300 border">
        <CardHeader>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
            <div>
              <h3 className="text-base font-bold text-primary leading-snug">
                {experience.company}
              </h3>
              <h4 className="text-sm font-semibold mt-1 text-foreground/80">
                {experience.position}
              </h4>
            </div>
            <div className="w-max border text-xs py-1 px-3 rounded-full shadow-inner bg-muted flex items-center gap-1.5 shrink-0">
              <i className="bx bx-calendar text-xs"></i>
              <span>{experience.year}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="-mt-2 space-y-3">
          <p className="text-sm font-thin leading-relaxed text-primary">
            {experience.description}
          </p>
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div>
            <div className="flex gap-2 items-center text-xs text-muted-foreground mb-2">
              <i className="bx bx-layer text-sm"></i>
              <p className="font-medium uppercase tracking-wider">Technologies</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.tech.map((tittle) => (
                <p
                  key={tittle}
                  className="w-max border text-xs py-0.5 px-2.5 rounded-full shadow-inner text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors duration-200"
                >
                  {tittle}
                </p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperienceCard;