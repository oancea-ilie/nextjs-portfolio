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
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const [loading, setLoading] = useState<string>("")

  const formRef = useRef(null)

  const handleChange = (e: any, type: "name" | "email" | "message") => {
    if (type === "name") {
      setName(e.target.value)
    }
    if (type === "email") {
      setEmail(e.target.value)
    }
    if (type === "message") {
      setMessage(e.target.value)
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("name", name)
    console.log("email", email)
    console.log("message", message)
  }

  return (
    <section className="xl:flex-row xl:mt-12 flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-black-100 p-8 rounded-2xl"
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
              value={name}
              onChange={(e) => handleChange(e, "name")}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => handleChange(e, "email")}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              style={{ resize: "none" }}
              value={message}
              onChange={(e) => handleChange(e, "message")}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit font-bold shadow-md text-white shadow-primary rounded-xl
            hover:bg-primary duration-200"
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
export default Contact
