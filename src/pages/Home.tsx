import { Hero } from "../components/sections/Hero"
import { About } from "../components/sections/About"
import { Work } from "../components/sections/Work"
import { Testimonials } from "../components/sections/Testimonials"
import { Contact } from "../components/sections/Contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Testimonials />
      <Contact />
    </>
  )
}