import { Card } from "../ui/card";

const TechCard = ({ name, image }) => {
  return (
    <div className="flex flex-col gap-2 items-center group">
      <div className="p-2 border rounded-xl shadow-inner hover:-translate-y-2.5 transition-all duration-300 relative overflow-hidden tech-card-wrap hover:border-primary/30">
        <Card className="shadow-inner p-2 w-20 h-20 flex justify-center items-center relative z-10">
          <img
            src={`${image}`}
            alt={name}
            className="w-3/4 transition-transform duration-300 group-hover:scale-110"
          />
        </Card>
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200 font-medium">
        {name}
      </p>
    </div>
  );
};

export default TechCard;