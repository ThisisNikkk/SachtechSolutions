import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesTicker from "@/components/ServicesTicker";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import WorkProcess from "@/components/WorkProcess";
import WhyChooseUs from "@/components/WhyChooseUs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <Hero />
      <ServicesTicker />
      <AboutUs />
      <Services />
      <WorkProcess />
      <ServicesTicker />
      <WhyChooseUs />
      <ServicesTicker />
    </div>
  );
};

export default Index;
