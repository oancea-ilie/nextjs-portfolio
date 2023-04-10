import { VerticalTimeline } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import { experiences } from "@/constants/constants"
import { textVariant } from "@/utils/motions"
import SectionWrapper from "@/utils/SectionWrapper"
import ExperienceCard from "./ExperienceCard"
import "react-vertical-timeline-component/style.min.css"

const Experience = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className="section-header-subtext">What I have done so far</p>
        <h2 className="section-header-text">Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}
export default SectionWrapper(Experience, "work")
