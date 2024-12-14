import Image from 'next/image'
import React from 'react'
import teamImg1 from '@/assets/About-Team-Image-1.webp'
import teamImg2 from '@/assets/About-Team-Image-2.webp'
import teamImg3 from '@/assets/About-Team-Image-3.webp'


const OurTeam = () => {
  return (
    <section>
      <div className="max-w-screen-xl m-auto px-4 py-20">
        <div className="text-customBlack text-center">
          <h3 className='text-4xl md:text-6xl tracking-wide mb-5'>Our Expert Team</h3>
          <p className='max-w-2xl m-auto text-lg'>We are a group of nutrition doctors who collaborate to create a forum where people can consult about their nutritional needs.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between gap-6 py-16">
          <div className="w-full md:w-[48%] bg-gray-100 rounded-[40px] p-6">
            <Image src={teamImg1} alt='team image' width={250} height={300} className='object-cover rounded-[40px] mb-5 w-full m-auto' />
            <h3 className='text-3xl'>Leslie Alexander</h3>
            <p className='text-xl'>Nutritionist</p>
          </div>
          <div className="w-full md:w-[48%] bg-gray-100 rounded-[40px] p-6">
            <Image src={teamImg2} alt='team image' width={250} height={300} className='object-cover rounded-[40px] mb-5 w-full m-auto' />
            <h3 className='text-3xl'>Savannah Nguyen</h3>
            <p className='text-xl'>Nutritionist</p>
          </div>
          <div className="w-full md:w-[48%] bg-gray-100 rounded-[40px] p-6">
            <Image src={teamImg3} alt='team image' width={250} height={300} className='object-cover rounded-[40px] mb-5 w-full m-auto' />
            <h3 className='text-3xl'>Esther Howard</h3>
            <p className='text-xl'>Nutritionist</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam