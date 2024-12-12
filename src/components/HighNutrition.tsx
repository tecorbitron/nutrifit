import Image from 'next/image'
import React from 'react'
import image1 from '@/assets/High-Nut-Image-1.webp'
import image2 from '@/assets/High-Nut-Image-2.webp'

const HighNutrition = () => {
    return (
        <section className='py-20 px-4'>
            <div className="flex flex-col md:flex-row justify-between gap-10 max-w-screen-xl m-auto">
                <div className='md:w-1/2 flex flex-col justify-between gap-4 md:gap-2 md:p-4 text-customBlack max-w-lg m-auto'>
                    <h2 className='text-customBlack text-5xl lg:text-6xl font-medium tracking-wide leading-tight'>
                        High Nutrition Organic Food
                    </h2>
                    <p>We have dozens of partners from farmers, ranchers and fishermen to meet your organic food needs. You can buy it on our marketplace and we will send it in packaging that can maintain the freshness of the ingredients you buy.</p>
                    <button className="w-fit h-fit py-4 px-8 bg-customBlack text-white rounded-full">
                        Book Now
                    </button>
                </div>
                <div className="md:w-1/2 flex justify-between">
                    <Image src={image1} alt='nutrition image' width={300} height={200} className='h-full w-[48%] rounded-[40px] object-cover' />
                    <Image src={image2} alt='nutrition image' width={300} height={200} className='h-full w-[48%] rounded-[40px] object-cover' />
                </div>
            </div>
        </section>
    )
}

export default HighNutrition