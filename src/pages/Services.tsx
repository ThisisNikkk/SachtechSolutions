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

const Services: React.FC = ({ onNavigate }:any) => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation onNavigate={onNavigate} />
      <PageBanner 
        title="Services" 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' }
        ]} 
      />
      <ServicesComponent />
      <ServicesTicker/>
      <WhyChooseUs />
      <ServicesTicker />
      <Contact/>
      <ServicesTicker/>
      <FAQs/>
      <ServicesTicker/>
      <Footer />
    </div>
  );
};

export default Services;
