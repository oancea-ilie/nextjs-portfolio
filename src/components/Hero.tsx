import { ComputersCanvas } from "./canvas"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="p-x w-full h-[80vh] mx-auto relative">
      <div className="relative">
        <div className="pl-4 max-w-7xl flex mx-auto gap-8 mt-20">
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 xs:h-40 sm:h-80 violet-gradient" />
          </div>
          <div>
            <h1 className="hero-header-text">
              Hi, I&apos;m <span className="text-[#915eff]">Oancea</span>{" "}
            </h1>
            <p className="hero-sub-text mt-2">
              This is my description as a developer{" "}
              <br className="sm:block hidden" /> Oancea Ilie developer.{" "}
            </p>
          </div>
        </div>
        <ComputersCanvas />
        <div className="absolute bottom-[-80px] w-full flex justify-center item-center">
          <a href={"#about"}>
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
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
      </div>
    </section>
  )
}
export default Hero
