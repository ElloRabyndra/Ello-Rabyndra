import { Card } from "../ui/card"

const TechCard = ({name, image}) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="p-2 border rounded-xl shadow-inner hover:-translate-y-2 transition-all duration-200">
        <Card className="shadow-inner p-2 w-20 h-20 flex justify-center items-center">
          <img src={`${image}`} alt={name} className="w-3/4" />
        </Card>
      </div>
      <p className="text-sm sm:text-base">{name}</p>
    </div>
  )
}

export default TechCard