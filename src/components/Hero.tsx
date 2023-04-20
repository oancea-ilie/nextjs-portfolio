import { ComputersCanvas } from "./canvas"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <>
      <section className="h-[60vh] sm:h-[80vh] mx-auto relative flex flex-col xl:flex-row items-center max-w-7xl justify-between p-x">
        <div className="flex-1 flex gap-8 mt-10 xl:mt-0">
          <div className="flex flex-col justify-start items-center">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 h-28 lg:h-52 violet-gradient" />
          </div>
          <div>
            <h1 className="hero-header-text">
              Hi, I&apos;m <span className="text-[#915eff]">Oancea</span>{" "}
            </h1>
            <p className="hero-sub-text mt-2">
              A skilled web developer showcasing <br />
              my work with modern, creative design.
            </p>
          </div>
        </div>
        <ComputersCanvas />
      </section>
      <div className="flex justify-center mt-[50px] sm:mt-[0px]">
        <a href={"#about"}>
          <div className="w-[35px] h-[64px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </a>
      </div>
    </>
  )
}
export default Hero
