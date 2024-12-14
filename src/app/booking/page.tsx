import BookingHeader from '@/components/booking/BookingHeader'
import ConsultationForm from '@/components/booking/ConsultationForm'
import ConsultationProcess from '@/components/booking/ConsultationProcess'
import ConsultBanner from '@/components/ConsultBanner'
import FAQ from '@/components/FAQ'
import React from 'react'

const Booking = () => {
  return (
    <div>
      <BookingHeader />
      <ConsultationProcess />
      <ConsultationForm />
      <FAQ />
      <ConsultBanner />
    </div>
  )
}

export default Booking