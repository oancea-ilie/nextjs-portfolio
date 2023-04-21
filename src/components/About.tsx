import { motion } from "framer-motion"
import { services } from "../constants/constants"
import { fadeIn, textVariant } from "../utils/motions"
import ServiceCard from "./ServiceCard"

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
        With more than a year of experience in web development, I have a deep
        passion for creating modern, efficient websites that help businesses and
        organizations achieve their online goals. From custom coding to
        responsive design, I&apos;m dedicated to building websites that not only
        look great but also reflect your unique brand identity.
      </motion.p>
      <div className="mt-20 gap-5 grid xsm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} service={service} />
        ))}
      </div>
    </section>
  )
}

export default About
