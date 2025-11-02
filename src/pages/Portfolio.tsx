import Navigation from '@/components/Navigation';
import TopBar from '@/components/TopBar';
import PageBanner from '@/components/PageBanner';
import PortfolioComponent from "@/components/PortfolioComponent";
import Footer from '@/components/Footer';
import React from 'react';
import ServicesTicker from '@/components/ServicesTicker';
import Contact from '@/components/Contact';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <PageBanner 
        title="Portfolio" 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio' }
        ]} 
      />
      <PortfolioComponent />
      <ServicesTicker/>
      <Contact/>
      <ServicesTicker/>
      <Footer />
    </div>
  );
};

export default Portfolio;
