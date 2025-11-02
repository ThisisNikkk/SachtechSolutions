import Navigation from '@/components/Navigation'
import PageBanner from '@/components/PageBanner'
import TopBar from '@/components/TopBar'
import ContactComponent from '@/components/Contact'
import Map from '@/components/Map'
import React from 'react'
import ServicesTicker from '@/components/ServicesTicker'
import Footer from '@/components/Footer'

interface ContactProps {
  onNavigate: () => void;
}

function Contact({ onNavigate }: ContactProps) {
  return (
    <div className="min-h-screen">
       <TopBar/>
       <Navigation onNavigate={onNavigate}/>
       <PageBanner
        title="Contact Us" 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' }
        ]} 
      />
      <ContactComponent/>
      <Map />
      <ServicesTicker/>
      <Footer/>
    </div>
  )
}

export default Contact