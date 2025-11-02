import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesTicker from "@/components/ServicesTicker";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import WorkProcess from "@/components/WorkProcess";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";

const Index = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation onNavigate={onNavigate} />
      <Hero />
      <ServicesTicker />
      <AboutUs />
      <Services />
      <WorkProcess />
      <ServicesTicker />
      <WhyChooseUs />
      <ServicesTicker />
      <Portfolio />
      <Team />
      <Testimonials />
      <ServicesTicker />
      <FAQs />
      <ServicesTicker />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
