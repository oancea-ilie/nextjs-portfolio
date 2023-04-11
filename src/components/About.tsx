import { motion } from "framer-motion"
import { services } from "../constants/constants"
import { fadeIn, textVariant } from "../utils/motions"
import ServiceCard from "./ServiceCard"
import SectionWrapper from "@/utils/SectionWrapper"

const About = () => {
  return (
    <section>
      <motion.div variants={textVariant(0.1)}>
        <p className="section-header-subtext">Introduction</p>
        <h2 className="section-header-text">Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("down", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
        incidunt tempore, eveniet sint, odio assumenda impedit mollitia adipisci
        recusandae, repudiandae vero! Assumenda, vero tempore? Non dignissimos
        ullam tempore eveniet fugiat?
      </motion.p>
      <div className="mt-20 gap-5 mx-auto flex flex-wrap">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} service={service} />
        ))}
      </div>
    </section>
  )
}

export default SectionWrapper(About, "about")
