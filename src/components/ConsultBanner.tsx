import Image from 'next/image'
import React from 'react'
import image from '@/assets/Banner-Image.webp'

const ConsultBanner = () => {
    return (
        <section className='pt-10 pb-20 px-4'>
            <div className="relative flex flex-col md:items-end justify-evenly gap-4 w-full max-w-screen-xl m-auto min-h-96 bg-gradient-to-b from-transparent p-6 to-black/5 bg-gray-600/10 rounded-[40px]">
                <Image src={image} alt='banner image' width={300} height={200} className='md:absolute left-5 h-full w-auto rounded-[40px] object-cover -mt-[100px] md:mt-[150px]' />
                <div className="bg-white md:w-1/2 lg:w-2/3 p-4 rounded-3xl">
                    <h3 className='text-2xl md:text-5xl font-medium'>Make sure your daily nutrition is sufficient. Consult your problem about nutrition with us.</h3>
                </div>
                <button className="w-fit h-fit m-auto md:m-0 py-4 px-8 bg-customBlack text-white rounded-full">
                    Consult Now
                </button>
            </div>
        </section>
    )
}

export default ConsultBanner