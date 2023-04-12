import { useState } from "react"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/motions"
import Tilt from "react-parallax-tilt"
import Image from "next/image"

type Tags = {
  name: string
  color: string
}
interface Props {
  index: number
  project: {
    name: string
    description: string
    tags: Tags[]
    image: string
    source_code_link: string
  }
}
const ProjectCard = ({ project, index }: Props) => {
  const [state, setState] = useState<boolean>(false)

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        scale={1}
        className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={project.image}
            alt={project.name}
            className="w-full object-cover rounded-2xl"
            fill
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(project.source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src="/assets/github.png"
                alt="github"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {project.description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <p className={`text-[14px] ${tag.color}`} key={tag.name}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
export default ProjectCard
