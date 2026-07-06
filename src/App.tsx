import { usePageAnimations } from "./hooks/usePageAnimations";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import IntroSection from "./components/sections/IntroSection";
import WhyChoose from "./components/sections/WhyChoose";
import WhyUsCards from "./components/sections/WhyUsCards";
import AboutUs from "./components/sections/AboutUs";
import ServicesSection from "./components/sections/ServicesSection";
import HowItWorks from "./components/sections/HowItWorks";
import Reviews from "./components/sections/Reviews";
import Gallery from "./components/sections/Gallery";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";

function App() {
  usePageAnimations();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <WhyChoose />
        <WhyUsCards />
        <AboutUs />
        <ServicesSection />
        <HowItWorks />
        <Reviews />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
