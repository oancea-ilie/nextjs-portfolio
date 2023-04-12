import Experience from "@/components/Experience"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Tech from "@/components/Tech"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Work from "@/components/Work"
import StarsCanvas from "@/components/canvas/StarsCanvas"

const Home = () => {
  return (
    <main>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Work />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </main>
  )
}

export default Home
