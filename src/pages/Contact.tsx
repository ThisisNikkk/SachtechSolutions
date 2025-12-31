import Navigation from '@/components/Navigation'
import PageBanner from '@/components/PageBanner'
import TopBar from '@/components/TopBar'
import ContactComponent from '@/components/Contact'
import Map from '@/components/Map'
import React from 'react'
import ServicesTicker from '@/components/ServicesTicker'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

interface ContactProps {
  onNavigate: () => void;
}

function Contact({ onNavigate }: ContactProps) {
  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us - Get in Touch with Solario Tech"
        description="Ready to transform your business? Contact Solario Tech for custom software development, mobile apps, AI, and cloud solutions. Get your free quote today."
        keywords="contact us, get quote, software development inquiry, consultation, contact form, business inquiry"
      />
      <TopBar />
      <Navigation onNavigate={onNavigate} />
      <PageBanner
        title="Contact Us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' }
        ]}
      />
      <ContactComponent />
      <Map />
      <ServicesTicker />
      <Footer />
    </div>
  )
}

export default Contact