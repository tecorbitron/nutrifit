import AboutTitleSection from '@/components/home/AboutTitleSection'
import ConsultBanner from '@/components/ConsultBanner'
import React from 'react'
import AboutServices from '@/components/about/AboutServices'
import CoreValues from '@/components/about/CoreValues'
import OurClients from '@/components/about/OurClients'
import OurTeam from '@/components/about/OurTeam'
import Holistic from '@/components/about/Holistic'

const About = () => {
  return (
    <div>
      <AboutTitleSection />
      <AboutServices />
      <Holistic />
      <OurTeam />
      <CoreValues />
      <OurClients />
      <ConsultBanner />
    </div>
  )
}

export default About