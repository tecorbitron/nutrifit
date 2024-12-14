import ConsultBanner from '@/components/ConsultBanner'
import ServicesConsultation from '@/components/services/ServicesConsultation'
import ServicesHeader from '@/components/services/ServicesHeader'
import React from 'react'

const Services = () => {
  return (
    <div>
      <ServicesHeader />
      <ServicesConsultation />
      <ConsultBanner />
    </div>
  )
}

export default Services