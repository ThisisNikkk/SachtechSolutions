import Navigation from '@/components/Navigation';
import TopBar from '@/components/TopBar';
import PageBanner from '@/components/PageBanner';
import PortfolioComponent from "@/components/PortfolioComponent";
import Footer from '@/components/Footer';
import React from 'react';
import ServicesTicker from '@/components/ServicesTicker';
import Contact from '@/components/Contact';

interface PortfolioProps {
  onNavigate: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation onNavigate={onNavigate} />
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
