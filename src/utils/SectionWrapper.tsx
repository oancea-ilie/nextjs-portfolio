import { Component, FC, useState } from "react"
import { motion } from "framer-motion"
import { staggerContainer } from "./motions"

const SectionWrapper = (Component: FC, idName: string) => {
  const HOC = () => {
    return (
      <motion.section
        variants={staggerContainer(Component)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="p-xy max-w-7xl mx-auto relative z-0"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    )
  }
  return HOC
}
export default SectionWrapper
