import Image from 'next/image'
import React from 'react'
import heroImg from '@/assets/Nutrifit-Hero-Image.webp'
import heroImg1 from '@/assets/Nutrifit-Hero-Image-1.webp'
import heroImg2 from '@/assets/Nutrifit-Hero-Image-2.webp'
import drImg from '@/assets/Nutrifit-Dr-Image.webp'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
    return (

        // Header section 
        <div className='flex flex-col md:flex-row justify-between min-h-screen text-customBlack max-w-screen-xl mx-auto px-4 gap-10 md:gap-0'>
            {/* Left content  */}
            <div className="flex flex-col justify-center w-full">
                <h1 className='text-5xl mt-20 md:text-8xl font-medium tracking-widest'>We Take Care About Your <span className='text-primaryColour'>Health</span></h1>
                <p className='my-8 font-medium max-w-xl'>Make sure your daily nutrition is sufficient. Consult your problem about nutrition with us.</p>

                <div className="flex justify-between md:justify-start md:gap-8">
                    <button className='py-4 px-8 bg-customBlack w-fit text-white rounded-full'>Get Started</button>
                    <div className="flex">
                        <Image src={heroImg1} alt='hero-image' width={50} height={50}
                            className='w-14 h-14 object-cover object-center rounded-full' />
                        <Image src={heroImg2} alt='hero-image' width={50} height={50}
                            className='-ml-6 w-14 h-14 object-cover object-center rounded-full' />
                    </div>
                    <ArrowRight className='w-14 h-14 p-3 border-customBlack border-2 rounded-full' />
                </div>

                <div className="flex flex-wrap gap-4 mt-16">
                    <div className='py-4 px-8 border-customBlack border w-fit text-customBlack rounded-full hover:border-primaryColour hover:text-primaryColour transition-all ease-in-out'>Nutrition</div>
                    <div className='py-4 px-8 border-customBlack border w-fit text-customBlack rounded-full hover:border-primaryColour hover:text-primaryColour transition-all ease-in-out'>Supplements</div>
                    <div className='py-4 px-8 border-customBlack border w-fit text-customBlack rounded-full hover:border-primaryColour hover:text-primaryColour transition-all ease-in-out'>Vitamins</div>
                    <div className='py-4 px-8 border-customBlack border w-fit text-customBlack rounded-full hover:border-primaryColour hover:text-primaryColour transition-all ease-in-out'>Healthy Food</div>
                    <div className='py-4 px-8 border-customBlack border w-fit text-customBlack rounded-full hover:border-primaryColour hover:text-primaryColour transition-all ease-in-out'>Consultation</div>
                </div>
            </div>

            {/* Right image section  */}
            <div className="relative w-full">
                {/* right main image  */}
                <Image src={heroImg} alt='hero-image' width={400} height={600} quality={100} className='w-full h-full object-cover object-center p-2 rounded-[60px]' />

                {/* image top right button  */}
                <div className="absolute top-0 right-0 bg-white w-40 h-40 flex justify-center items-center  rounded-bl-[80px] ">
                    <div className="w-32 h-32 rounded-full bg-primaryColour flex justify-center items-center">
                        <ArrowRight className='w-14 h-14 p-3 bg-primaryColour text-white border-white border-2 rounded-full' />
                    </div>
                </div>

                {/* image bottom left DR section  */}
                <div className="absolute bottom-0 left-0 bg-white w-fit h-28 md:h-40 pr-5 md:px-10 flex justify-center items-center rounded-tr-[40px] md:rounded-tr-[80px] ">
                    <div className="w-fit h-fit p-4 flex justify-center items-center rounded-full shadow-xl gap-2 md:gap-6">
                        <Image src={drImg} alt='hero-image' width={50} height={50} quality={100}
                            className='md:w-24 md:h-24 object-cover object-center rounded-full' />
                        <div className='pr-10'>
                            <h3 className='md:text-2xl font-medium'>Nutritionists</h3>
                            <p className='md:text-lg'>Dr. Richard Lee</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection