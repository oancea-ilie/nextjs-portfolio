import SectionWrapper from "@/utils/SectionWrapper"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { slideIn } from "@/utils/motions"
import EarthCanvas from "./canvas/EarthCanvas"

type Contact = {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [form, setForm] = useState<Contact>({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState<boolean>(false)

  const formRef = useRef(null)

  const handleChange = (e: any) => {}

  const handleSubmit = (e: any) => {}

  return (
    <section className="xl:flex-row xl:mt-12 flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className="section-header-subtext">Get in touch</p>
        <h3 className="section-header-text">Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit font-bold shadow-md text-white shadow-primary rounded-xl"
          >
            {loading ? "Sending.." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] cursor-grab"
      >
        <EarthCanvas />
      </motion.div>
    </section>
  )
}
export default SectionWrapper(Contact, "contact")
