import Image from 'next/image'
import React from 'react'
import heroImg from '@/assets/Booking-Header-image.webp'

const BookingHeader = () => {
    return (
        <section className='mb-20'>
            <div className="relative w-full md:h-screen max-w-screen-xl m-auto px-4">
                {/* right main image  */}
                <Image src={heroImg} alt='hero-image' width={400} height={600} quality={100} className='w-full h-full object-cover object-center pt-2 rounded-[60px]' />

                {/* image bottom left section  */}
                <div className="absolute bottom-0 left-0 bg-white w-80 md:w-1/2 h-28 md:h-40 md:px-10 flex justify-center items-center rounded-tr-[40px]">
                <h3 className='text-3xl md:text-6xl font-medium text-customBlack'>Book a Personalized Free Consultation</h3>
                </div>
            </div>
        </section>)
}

export default BookingHeader