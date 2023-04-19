import { motion } from "framer-motion"
import { services } from "../constants/constants"
import { fadeIn, textVariant } from "../utils/motions"
import ServiceCard from "./ServiceCard"
import SectionWrapper from "@/utils/SectionWrapper"

const About = () => {
  return (
    <section className="mt-20">
      <motion.div variants={textVariant(0.1)}>
        <p className="section-header-subtext">Introduction</p>
        <h2 className="section-header-text">Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("down", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        With over an year of experience and passion for creating modern,
        efficient websites. From custom coding to responsive design, I am
        dedicated to building websites that reflect your brand and exceed your
        goals.
      </motion.p>
      <div className="mt-20 gap-5  grid  grid-auto-columns: minmax(250px, 1fr)">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} service={service} />
        ))}
      </div>
    </section>
  )
}

export default SectionWrapper(About, "about")
