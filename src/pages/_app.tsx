import "@/styles/globals.css"
import "@/styles/tailwind.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import type { AppProps } from "next/app"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
      <ToastContainer />
    </main>
  )
}
export default App
