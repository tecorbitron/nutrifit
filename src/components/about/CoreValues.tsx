import { ArrowRight } from 'lucide-react'
import React from 'react'
import valuesImg1 from '@/assets/Nutrifit-Services-Image-1.webp'
import valuesImg2 from '@/assets/About-Values-2.webp'
import valuesImg3 from '@/assets/About-Values-Image-3.webp'
import valuesImg4 from '@/assets/About-Values-Image-4.webp'
import Image from 'next/image'


const CoreValues = () => {
    return (
        <section className='py-20'>
            {/* services cards  */}
            <div className="text-customBlack text-center">
                <h3 className='text-4xl md:text-6xl tracking-wide mb-5'>Our Core Values</h3>
                <p className='max-w-2xl m-auto text-lg'>We are a group of nutrition doctors who collaborate to create a forum where people can consult about their nutritional needs.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-10 text-customBlack py-20 px-4 max-w-screen-xl m-auto">

                {/* 1st card  */}
                <div className="relative flex flex-col items-end justify-between w-full lg:w-[48%] h-80 bg-gradient-to-b from-transparent p-6 to-black/10 bg-gray-600/5 rounded-[40px]">
                    <ArrowRight className='w-14 h-14 p-4 border-primaryColour text-customBlack border-2 rounded-full' />
                    <div className="bg-white w-1/2 md:w-80 p-4 rounded-3xl">
                        <h3 className='text-xl md:text-4xl font-medium'>Nutritional Excellence</h3>
                    </div>
                    <Image src={valuesImg1} alt='service-image' width={200} height={200} quality={100} className='absolute bottom-0 left-0 md:left-10 w-36 md:w-48' />
                </div>

                {/* 2nd card  */}
                <div className="relative flex flex-col items-end justify-between w-full lg:w-[48%] h-80 bg-gradient-to-b from-transparent p-6 to-black/10 bg-gray-600/5 rounded-[40px]">
                    <ArrowRight className='w-14 h-14 p-4 border-primaryColour text-customBlack border-2 rounded-full' />
                    <div className="bg-white w-1/2 md:w-80 p-4 rounded-3xl">
                        <h3 className='text-xl md:text-4xl font-medium'>Empowerment Through Education</h3>
                    </div>
                    <Image src={valuesImg2} alt='service-image' width={200} height={200} quality={100} className='absolute bottom-0 left-0 md:left-10 w-36 md:w-48' />
                </div>
                {/* 3rd card  */}
                <div className="relative flex flex-col items-end justify-between w-full lg:w-[48%] h-80 bg-gradient-to-b from-transparent p-6 to-black/10 bg-gray-600/5 rounded-[40px]">
                    <ArrowRight className='w-14 h-14 p-4 border-primaryColour text-customBlack border-2 rounded-full' />
                    <div className="bg-white w-1/2 md:w-80 p-4 rounded-3xl">
                        <h3 className='text-xl md:text-4xl font-medium'>Customer-Centric Approach</h3>
                    </div>
                    <Image src={valuesImg3} alt='service-image' width={200} height={200} quality={100} className='absolute bottom-0 left-0 md:left-10 w-36 md:w-48' />
                </div>
                {/* 4th card  */}
                <div className="relative flex flex-col items-end justify-between w-full lg:w-[48%] h-80 bg-gradient-to-b from-transparent p-6 to-black/10 bg-gray-600/5 rounded-[40px]">
                    <ArrowRight className='w-14 h-14 p-4 border-primaryColour text-customBlack border-2 rounded-full' />
                    <div className="bg-white w-1/2 md:w-80 p-4 rounded-3xl">
                        <h3 className='text-xl md:text-4xl font-medium'>
                            Sustainability and Responsibility</h3>
                    </div>
                    <Image src={valuesImg4} alt='service-image' width={200} height={200} quality={100} className='absolute bottom-0 left-0 md:left-10 md:w-auto' />
                </div>

            </div>
        </section>
    )
}

export default CoreValues