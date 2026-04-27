import AboutSection from "@/components/AboutSection"
import CtaSection from "@/components/CtaSection"
import Hero from "@/components/Hero"
import OurServices from "@/components/OurServices"
import Testimonials from "@/components/Testimonials"


function page() {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <OurServices/>
      <Testimonials/>
      <CtaSection/>
    </div>
  )
}
export default page