import Image from 'next/image'
import React from 'react'
import serviceImg1 from '@/assets/About-Services2.webp'
import serviceImg2 from '@/assets/About-Services.webp'

const AboutServices = () => {
    return (
        <section className='py-20'>
            <div className="flex flex-col md:flex-row justify-between gap-4 max-w-screen-xl m-auto px-4">
                <div className="w-full md:w-[48%] md:h-screen">
                    <div className="relative h-full w-full p-10 rounded-[40px] bg-cover bg-center bg-no-repeat "
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1)), url(${serviceImg1.src})`,
                        }}>
                        {/* Content */}
                        <div className="relative z-20 h-full flex flex-col justify-between gap-8">
                            <button className="w-fit h-fit py-4 px-8 bg-customBlack text-white rounded-full">
                                Our Mission
                            </button>

                            <div className="bg-white w-full p-4 rounded-3xl text-customBlack">
                                <p className="text-2xl md:text-5xl font-medium mb-4">Promoting overall well-being through personalized nutrition plans</p>
                            </div>
                        </div>
                    </div>
                </div><div className="w-full md:w-[48%] md:h-screen">
                    <div className="relative h-full w-full p-10 rounded-[40px] bg-cover bg-center bg-no-repeat "
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1)), url(${serviceImg2.src})`,
                        }}>
                        {/* Content */}
                        <div className="relative z-20 h-full flex flex-col justify-between gap-8">
                            <button className="w-fit h-fit py-4 px-8 bg-customBlack text-white rounded-full">
                                Our Vision
                            </button>

                            <div className="bg-white w-full p-4 rounded-3xl text-customBlack">
                                <p className="text-2xl md:text-5xl font-medium mb-4">Empowering Individuals to make informed and sustainable nutrition choices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutServices