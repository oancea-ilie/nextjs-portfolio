import { Component } from "react"
import { motion } from "framer-motion"
import { staggerContainer } from "./motions"
type Children = JSX.Element

interface Props {
  children: Children
  idName: string
}
const SectionWrapper = ({ idName, children }: Props) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="p-xy max-w-7xl mx-auto relative z-0"
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      {children}
    </motion.section>
  )
}
export default SectionWrapper
