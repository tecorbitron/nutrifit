import Image from 'next/image'
import React from 'react'
import image1 from '@/assets/About-title-Image-1.webp'
import image2 from '@/assets/About-title-Image-2.webp'
import image3 from '@/assets/About-title-Image-3.webp'

const AboutTitleSection = () => {
  return (
    <section className='py-20 px-4 text-center'>
      <p className='relative text-5xl md:text-8xl text-customBlack max-w-4xl m-auto font-medium leading-tight tracking-wider mb-6'>
        we are dedicated to improving the quality of people&apos;s nutrition
        <Image className='absolute top-0 md:top-10 left-32' src={image1} height={60} width={120} alt='about image' />
        <Image className='absolute bottom-10 md:left-20 rotate-90' src={image2} height={60} width={120} alt='about image' />
        <Image className='absolute md:bottom-40 right-2 rounded-2xl rotate-45' src={image3} height={60} width={120} alt='about image' />
      </p>
      <button className="relative w-fit h-fit py-4 px-8 bg-customBlack text-white rounded-full">
        Get Stated
      </button>
    </section>
  )
}

export default AboutTitleSection