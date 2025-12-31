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
import SEO from "@/components/SEO";

const Index = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Solario Tech - Leading Software Development & Technology Solutions Company"
        description="Transform your business with cutting-edge software development, mobile app development, AI, IoT, and cloud solutions from Solario Tech. Innovation meets excellence."
        keywords="software development company, mobile app development, web development, AI solutions, IoT, cloud computing, digital transformation, technology consulting, custom software"
      />
      <TopBar />
      <Navigation onNavigate={onNavigate} />
      <Hero onNavigate={onNavigate} />
      <ServicesTicker />
      <AboutUs onNavigate={onNavigate} />
      <Services onNavigate={onNavigate} />
      <WorkProcess />
      <ServicesTicker />
      <WhyChooseUs onNavigate={onNavigate} />
      <ServicesTicker />
      <Portfolio onNavigate={onNavigate} />
      <Team onNavigate={onNavigate} />
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
