import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesTicker from "@/components/ServicesTicker";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <Hero />
      <ServicesTicker />
    </div>
  );
};

export default Index;
