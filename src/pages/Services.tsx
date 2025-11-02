import Navigation from '@/components/Navigation';
import TopBar from '@/components/TopBar';
import PageBanner from '@/components/PageBanner';
import Footer from '@/components/Footer';
import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <PageBanner 
        title="Services" 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' }
        ]} 
      />
      <Footer />
    </div>
  );
};

export default Services;
