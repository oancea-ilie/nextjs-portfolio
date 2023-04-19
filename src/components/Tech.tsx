import BallCanvas from "./canvas/BallCanvas"
import { technologies } from "@/constants/constants"

const Tech = () => {
  return (
    <section className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div className="w-28 h-28 cursor-grab" key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </section>
  )
}
export default Tech
