import Navigation from '@/components/Navigation'
import PageBanner from '@/components/PageBanner'
import TopBar from '@/components/TopBar'
import ContactComponent from '@/components/Contact'
import React from 'react'

function Contact({ onNavigate }) {
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
    </div>
  )
}

export default Contact