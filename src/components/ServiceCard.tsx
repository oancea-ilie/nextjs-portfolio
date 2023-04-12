import { fadeIn } from "@/utils/motions"
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import Image from "next/image"

interface Props {
  index: number
  service: {
    title: string
    icon: string
  }
}

const ServiceCard = ({ index, service: { icon, title } }: Props) => {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("right", "string", 0.5 * index, 0.7)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-6 px-12 w-[240px] h-[280px] flex justify-evenly items-center flex-col">
          <Image
            src={icon}
            alt="title"
            width={64}
            height={64}
            className="object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

export default ServiceCard
