import Image from 'next/image'
import React from 'react'
import image1 from '@/assets/Services-Consultation-Image-1.webp'
import image2 from '@/assets/Services-Consultation-Image-2.webp'
import image3 from '@/assets/Services-Consultation-Image-3.webp'

const ServicesConsultation = () => {
    return (
        <section className='max-w-screen-xl m-auto py-20 px-4 text-customBlack'>
            <div className="text-customBlack text-center">
                <h3 className='text-4xl md:text-6xl tracking-wide mb-5'>Nutrition Consultation</h3>
                <p className='max-w-2xl m-auto text-lg'>We are a group of nutrition doctors who collaborate to create a forum where people can consult about their nutritional needs.</p>
            </div>

            <div className="w-full flex flex-col md:flex-row my-10 bg-gray-200 rounded-[40px] md:h-[25rem] ">
                <div className="md:w-1/2 p-8 ">
                    <h3 className='text-3xl md:text-4xl'>Personal Assessment</h3>
                    <p className='max-w-2xl m-auto text-lg my-5'>We are a group of nutrition doctors who collaborate to create a forum where people can consult about their nutritional needs. We are available in more than 50 cities in 2 countries, Indonesia and Australia.</p>
                    <button className="w-fit h-fit py-4 px-8 bg-customBlack text-white rounded-full">
                        Consult Now
                    </button>
                </div>
                <div className="relative md:w-1/2">
                    <Image src={image1} alt='service-image' width={460} height={200} quality={100} className='md:absolute bottom-0 m-auto' />
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row-reverse my-10 bg-gray-200 rounded-[40px] md:h-[25rem] ">
                <div className="md:w-1/2 p-8 ">
                    <h3 className='text-3xl md:text-4xl'>Meal Planning</h3>
                    <p className='max-w-2xl m-auto text-lg my-5'>We are a group of nutrition doctors who collaborate to create a forum where people can consult about their nutritional needs. We are available in more than 50 cities in 2 countries, Indonesia and Australia.</p>
                    <button className="w-fit h-fit py-4 px-8 bg-customBlack text-white rounded-full">
                        Consult Now
                    </button>
                </div>
                <div className="relative md:w-1/2">
                    <Image src={image2} alt='service-image' width={350} height={200} quality={100} className='md:absolute bottom-0 m-auto' />
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row my-10 bg-gray-200 rounded-[40px] md:h-[25rem] ">
                <div className="md:w-1/2 p-8 ">
                    <h3 className='text-3xl md:text-4xl'>Weight Management</h3>
                    <p className='max-w-2xl m-auto text-lg my-5'>We are a group of nutrition doctors who collaborate to create a forum where people can consult about their nutritional needs. We are available in more than 50 cities in 2 countries, Indonesia and Australia.</p>
                    <button className="w-fit h-fit py-4 px-8 bg-customBlack text-white rounded-full">
                        Consult Now
                    </button>
                </div>
                <div className="relative md:w-1/2">
                    <Image src={image3} alt='service-image' width={400} height={200} quality={100} className='md:absolute bottom-0 m-auto border' />
                </div>
            </div>

        </section>
    )
}

export default ServicesConsultation