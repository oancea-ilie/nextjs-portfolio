import Experience from "@/components/Experience"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Tech from "@/components/Tech"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Work from "@/components/Work"
import StarsCanvas from "@/components/canvas/StarsCanvas"
import SectionWrapper from "@/utils/SectionWrapper"

const Home = () => {
  return (
    <main>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <SectionWrapper idName="about">
          <About />
        </SectionWrapper>
        <SectionWrapper idName="work">
          <Experience />
        </SectionWrapper>
        <SectionWrapper idName="">
          <Tech />
        </SectionWrapper>
        <SectionWrapper idName="">
          <Work />
        </SectionWrapper>
        <div className="relative z-0">
          <SectionWrapper idName="contact">
            <Contact />
          </SectionWrapper>
          <StarsCanvas />
        </div>
      </div>
    </main>
  )
}

export default Home
