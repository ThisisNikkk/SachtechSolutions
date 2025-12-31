import Navigation from '@/components/Navigation';
import TopBar from '@/components/TopBar';
import PageBanner from '@/components/PageBanner';
import ServicesComponent from "@/components/ServiceComponent";
import Footer from '@/components/Footer';
import React from 'react';
import ServicesTicker from '@/components/ServicesTicker';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import FAQs from '@/components/FAQs';
import SEO from '@/components/SEO';

interface ServicesProps {
  onNavigate: () => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Our Services - Custom Software Development Solutions | Solario Tech"
        description="Explore our comprehensive software development services: iOS & Android app development, AI solutions, IoT, cloud computing, automation, and enterprise software solutions."
        keywords="software development services, mobile app development, iOS development, Android development, AI solutions, IoT services, cloud solutions, automation, custom software"
      />
      <TopBar />
      <Navigation onNavigate={onNavigate} />
      <PageBanner
        title="Services"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' }
        ]}
      />
      <ServicesComponent onNavigate={onNavigate} />
      <ServicesTicker />
      <WhyChooseUs />
      <ServicesTicker />
      <Contact />
      <ServicesTicker />
      <FAQs />
      <ServicesTicker />
      <Footer />
    </div>
  );
};

export default Services;
