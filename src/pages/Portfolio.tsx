import Navigation from '@/components/Navigation';
import TopBar from '@/components/TopBar';
import PageBanner from '@/components/PageBanner';
import PortfolioComponent from "@/components/PortfolioComponent";
import Footer from '@/components/Footer';
import React from 'react';
import ServicesTicker from '@/components/ServicesTicker';
import Contact from '@/components/Contact';
import SEO from '@/components/SEO';

interface PortfolioProps {
  onNavigate: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Our Portfolio - Successful Projects & Case Studies | Solario Tech"
        description="Explore our portfolio of successful mobile apps, web applications, and enterprise software solutions delivered to clients worldwide. See our work in action."
        keywords="portfolio, projects, case studies, mobile apps, web applications, software projects, client work, success stories"
      />
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
      <ServicesTicker />
      <Contact />
      <ServicesTicker />
      <Footer />
    </div>
  );
};

export default Portfolio;
