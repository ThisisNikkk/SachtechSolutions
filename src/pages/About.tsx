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
import SEO from '@/components/SEO'

interface AboutProps {
  onNavigate: () => void;
}

function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen">
      <SEO
        title="About Us - Solario Tech | Leading Software Development Company"
        description="Learn about Solario Tech's journey in delivering innovative software solutions. Meet our expert team and discover our commitment to excellence in technology."
        keywords="about us, software company, tech team, company profile, innovation, technology expertise, software development team"
      />
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