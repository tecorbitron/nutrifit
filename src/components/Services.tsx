import { ArrowRight } from 'lucide-react'
import React from 'react'
import serviceImg1 from '@/assets/Nutrifit-Services-Image-1.webp'
import serviceImg2 from '@/assets/Nutrifit-Services-Image-2.webp'
import serviceImg3 from '@/assets/Nutrifit-Services-Image-3.webp'
import Image from 'next/image'

const Services = () => {
    return (
        <section>
            {/* services cards  */}
            <div className="flex flex-wrap justify-center gap-10 text-customBlack py-20 px-4 max-w-screen-xl m-auto">

                {/* for mobile only  */}
                <div className="md:hidden flex flex-col justify-around gap-6">
                    <h3 className='text-4xl tracking-wide'>High Nutritional Organic Food</h3>
                    <button className='py-4 px-8 bg-customBlack w-fit text-white rounded-full'>Book Now</button>
                </div>
                {/* 1st card  */}
                <div className="relative flex flex-col items-end justify-between md:w-[48%] h-80 bg-gradient-to-b from-transparent p-6 to-black/10 bg-gray-600/5 rounded-[40px]">
                    <ArrowRight className='w-14 h-14 p-4 border-primary text-customBlack border-2 rounded-full' />
                    <div className="bg-white w-1/2 md:w-80 p-4 rounded-3xl">
                        <h3 className='text-xl md:text-4xl font-medium'>Consult The Best Nutrition For Your Child</h3>
                    </div>
                    <Image src={serviceImg1} alt='service-image' width={200} height={200} quality={100} className='absolute bottom-0 left-0 md:left-10 w-36 md:w-48' />
                </div>

                {/* 2nd card  */}
                <div className="relative flex flex-col items-end justify-between md:w-[48%] h-80 bg-gradient-to-b from-transparent p-6 to-black/10 bg-gray-600/5 rounded-[40px]">
                    <ArrowRight className='w-14 h-14 p-4 border-primary text-customBlack border-2 rounded-full' />
                    <div className="bg-white w-1/2 md:w-80 p-4 rounded-3xl">
                        <h3 className='text-xl md:text-4xl font-medium'>Consult Diet Foods That Are Suitable For Your Body</h3>
                    </div>
                    <Image src={serviceImg2} alt='service-image' width={200} height={200} quality={100} className='absolute bottom-0 left-0 md:left-10 md:w-auto' />
                </div>


                {/* 3rd card  */}
                <div className="flex flex-col justify-around w-full md:w-[48%] h-80 bg-gradient-to-b from-transparent p-6 to-black/10 bg-gray-600/5 rounded-[40px]">
                    <Image src={serviceImg3} alt='service-image' width={100} height={100} quality={100} className='' />
                    <div className="flex justify-between items-end">
                        <h3 className='text-2xl md:text-3xl w-48'>Discover our supplement products</h3>
                        <ArrowRight className='w-14 h-14 p-4 border-primary text-customBlack border-2 rounded-full' />
                    </div>
                </div>

                {/* 4th card  */}
                <div className="hidden md:flex flex-col justify-around md:w-[48%] h-80">
                    <h3 className='text-6xl tracking-wide'>High Nutritional Organic Food</h3>
                    <button className='py-4 px-8 bg-customBlack w-fit text-white rounded-full'>Book Now</button>
                </div>
            </div>
        </section>
    )
}

export default Services