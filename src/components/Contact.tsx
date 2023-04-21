import { useState } from "react"
import { motion } from "framer-motion"
import { slideIn } from "@/utils/motions"
import EarthCanvas from "./canvas/EarthCanvas"
import { useFormik } from "formik"
import * as yup from "yup"
import emailjs from "@emailjs/browser"
import { validEnv } from "@/utils/validEnv"
import { toast } from "react-toastify"

const Contact = () => {
  const { adminEmail, publicKey, serviceID, templateID } = validEnv()

  const [loading, setLoading] = useState<boolean>(false)

  const {
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(3, "To short")
        .max(12, "To long")
        .required("Required"),
      email: yup.string().email("Invalid email address").required("Required"),
      message: yup
        .string()
        .min(3, "To short")
        .max(300, "To long")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setLoading(true)
      try {
        await emailjs.send(
          serviceID,
          templateID,
          {
            from_name: values.name,
            from_email: values.email,
            to_name: "Oancea Ilie",
            to_email: adminEmail,
            message: values.message,
          },
          publicKey
        )

        toast.success("Message send successfully!", { autoClose: 3000 })
        resetForm()
      } catch (error) {
        toast.error("Something bad happen..", { autoClose: 3000 })
        throw error
      } finally {
        setLoading(false)
      }
    },
  })

  return (
    <section className="xl:flex-row xl:mt-12 flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-black-100 p-8 rounded-2xl"
      >
        <p className="section-header-subtext">Get in touch</p>
        <h3 className="section-header-text">Contact.</h3>
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <p className="block text-red-500 h-5 font-thin text-[14px]">
              {(touched.name && errors.name) || ""}
            </p>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <p className="block text-red-500 h-5 font-thin text-[14px]">
              {(touched.email && errors.email) || ""}
            </p>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              style={{ resize: "none" }}
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <p className="block text-red-500 h-5 font-thin text-[14px]">
              {(touched.message && errors.message) || ""}
            </p>
          </label>
          <button
            type="submit"
            disabled={loading}
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
