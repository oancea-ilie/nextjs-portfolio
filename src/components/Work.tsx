import { projects } from "@/constants/constants"
import { fadeIn, textVariant } from "@/utils/motions"
import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"

const Work = () => {
  return (
    <section className="">
      <motion.div variants={textVariant()}>
        <p className="section-header-subtext">My work</p>
        <h2 className="section-header-text">Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          As an experienced web developer, I have had the privilege of working
          on a variety of exciting projects. Here are a few examples of my
          recent work:
        </motion.p>
      </div>
      <div className="mt-20 grid  sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
export default Work
