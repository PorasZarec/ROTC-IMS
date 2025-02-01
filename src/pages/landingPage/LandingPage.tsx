import { useEffect } from "react"
import AboutSection from "./components/about/AboutSection"
import Navbar from "./components/navbar/Navbar"
import "../../styles/variables.scss"
import Footer from "./components/footer/Footer"
import ContactSection from "./components/contact/ContactSection"
import ServiceSection from "./components/service/ServiceSection"

import ScrollReveal from 'scrollreveal';

import { initializeAnimations } from "../../styles/animation"

const LandingPage = () => {
  useEffect(() => {
    initializeAnimations();
    return () => {
        // Clean up ScrollReveal instances
        ScrollReveal().destroy();
    };
  }, []);

  return (
    <div className="landingPageContainer">
        <Navbar />
        <AboutSection />
        <ServiceSection />
        <ContactSection />
        <Footer />
    </div>
  )
}
  
export default LandingPage
