import ConsultBanner from '@/components/ConsultBanner'
import Pricing from '@/components/services/Pricing'
import ServicesConsultation from '@/components/services/ServicesConsultation'
import ServicesHeader from '@/components/services/ServicesHeader'
import React from 'react'

const Services = () => {
  return (
    <div>
      <ServicesHeader />
      <ServicesConsultation />
      <Pricing />
      <ConsultBanner />
    </div>
  )
}

export default Services