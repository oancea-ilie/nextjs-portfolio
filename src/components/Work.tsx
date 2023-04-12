import { projects } from "@/constants/constants"
import SectionWrapper from "@/utils/SectionWrapper"
import { fadeIn, textVariant } from "@/utils/motions"
import { motion } from "framer-motion"
import { useState } from "react"
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          dolorem accusamus eum recusandae quod, nisi itaque assumenda delectus
          consectetur eaque, magni, modi fugit nostrum? Dolorem vel ex ducimus
          nulla totam hic qui itaque minus soluta! Explicabo possimus laboriosam
          reiciendis dolore?
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
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
export default SectionWrapper(Work, "")
