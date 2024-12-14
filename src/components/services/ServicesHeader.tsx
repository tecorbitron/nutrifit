import { ArrowUpLeft } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import heroImg from '@/assets/Nutrifit-Hero-Image.webp'

const ServicesHeader = () => {
    return (
        <section className='mb-20'>
            <div className="relative w-full md:h-screen max-w-screen-xl m-auto px-4">
                {/* right main image  */}
                <Image src={heroImg} alt='hero-image' width={400} height={600} quality={100} className='w-full h-full object-cover object-center pt-2 rounded-[60px]' />

                {/* image top right button  */}
                <div className="absolute top-0 right-0 bg-white w-32 md:w-40 h-32 md:h-40 flex justify-center items-center  rounded-bl-[80px] ">
                    <div className="w-20 md:w-32 h-20 md:h-32 rounded-full bg-primaryColour flex justify-center items-center">
                        <ArrowUpLeft className='w-14 h-14 p-3 bg-primaryColour text-white border-white border-2 rounded-full' />

                    </div>
                </div>

                {/* image bottom left section  */}
                <div className="absolute bottom-0 left-0 bg-white w-60 md:w-96 h-28 md:h-40 md:px-10 flex justify-center items-center rounded-tr-[40px]">
                    <h3 className='text-4xl md:text-6xl font-medium text-customBlack'>Our Range of Services</h3>
                </div>
            </div>
        </section>
    )
}

export default ServicesHeader