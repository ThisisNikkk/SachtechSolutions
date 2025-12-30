import AboutComponent from '@/components/AboutComponent'
import FAQs from '@/components/FAQs'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import PageBanner from '@/components/PageBanner'
import ServicesTicker from '@/components/ServicesTicker'
import TeamComponent from '@/components/TeamComponent'
import TopBar from '@/components/TopBar'
import WhyChooseUs from '@/components/WhyChooseUs'
import WorkProcess from '@/components/WorkProcess'
import React from 'react'

interface AboutProps {
  onNavigate: () => void;
}

function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation onNavigate={onNavigate} />
      <PageBanner
        title="About Us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
        ]}
      />
      <AboutComponent />
      <WorkProcess />
      <ServicesTicker />
      <WhyChooseUs />
      <ServicesTicker />
      <FAQs />
      <ServicesTicker />
      <Footer />
    </div>
  )
}

export default About