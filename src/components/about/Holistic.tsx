import React from 'react'
import img1 from '@/assets/About-Holistic-Image.webp'
import Image from 'next/image'

const Holistic = () => {
    return (
        <section className='max-w-screen-xl m-auto py-20 px-4 flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className="w-full md:w[48%] text-customBlack">
                <h3 className='text-4xl md:text-6xl tracking-wide'>Nutrifit Holistic Approach</h3>
                <p className='max-w-2xl m-auto text-lg my-5'>We are available in more than 50 cities in 2 countries, Indonesia and Australia. We believe in personalized, client-centered consultations.</p>
                <div className="w-full flex flex-col md:flex-row justify-between flex-wrap gap-8">
                    <div className="md:w-[44%]">
                        <div className="flex gap-4 items-center mb-3">
                            <svg aria-hidden="true" className="w-6 e-font-icon-svg e-fas-dice-d6" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="gray" d="M422.19 109.95L256.21 9.07c-19.91-12.1-44.52-12.1-64.43 0L25.81 109.95c-5.32 3.23-5.29 11.27.06 14.46L224 242.55l198.14-118.14c5.35-3.19 5.38-11.22.05-14.46zm13.84 44.63L240 271.46v223.82c0 12.88 13.39 20.91 24.05 14.43l152.16-92.48c19.68-11.96 31.79-33.94 31.79-57.7v-197.7c0-6.41-6.64-10.43-11.97-7.25zM0 161.83v197.7c0 23.77 12.11 45.74 31.79 57.7l152.16 92.47c10.67 6.48 24.05-1.54 24.05-14.43V271.46L11.97 154.58C6.64 151.4 0 155.42 0 161.83z"></path></svg>
                            <h3 className='text-2xl font-medium'>Nutrition</h3>
                        </div>
                        <p className='text-lg'>Proper nutrition is essential for maintaining overall health.</p>
                    </div>
                    <div className="md:w-[44%]">
                        <div className="flex gap-4 items-center mb-3">
                            <svg aria-hidden="true" className="w-6 e-font-icon-svg e-fas-dice-d6" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="gray" d="M422.19 109.95L256.21 9.07c-19.91-12.1-44.52-12.1-64.43 0L25.81 109.95c-5.32 3.23-5.29 11.27.06 14.46L224 242.55l198.14-118.14c5.35-3.19 5.38-11.22.05-14.46zm13.84 44.63L240 271.46v223.82c0 12.88 13.39 20.91 24.05 14.43l152.16-92.48c19.68-11.96 31.79-33.94 31.79-57.7v-197.7c0-6.41-6.64-10.43-11.97-7.25zM0 161.83v197.7c0 23.77 12.11 45.74 31.79 57.7l152.16 92.47c10.67 6.48 24.05-1.54 24.05-14.43V271.46L11.97 154.58C6.64 151.4 0 155.42 0 161.83z"></path></svg>
                            <h3 className='text-2xl font-medium'>Nutrition</h3>
                        </div>
                        <p className='text-lg'>Proper nutrition is essential for maintaining overall health.</p>
                    </div>
                    <div className="md:w-[44%]">
                        <div className="flex gap-4 items-center mb-3">
                            <svg aria-hidden="true" className="w-6 e-font-icon-svg e-fas-dice-d6" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="gray" d="M422.19 109.95L256.21 9.07c-19.91-12.1-44.52-12.1-64.43 0L25.81 109.95c-5.32 3.23-5.29 11.27.06 14.46L224 242.55l198.14-118.14c5.35-3.19 5.38-11.22.05-14.46zm13.84 44.63L240 271.46v223.82c0 12.88 13.39 20.91 24.05 14.43l152.16-92.48c19.68-11.96 31.79-33.94 31.79-57.7v-197.7c0-6.41-6.64-10.43-11.97-7.25zM0 161.83v197.7c0 23.77 12.11 45.74 31.79 57.7l152.16 92.47c10.67 6.48 24.05-1.54 24.05-14.43V271.46L11.97 154.58C6.64 151.4 0 155.42 0 161.83z"></path></svg>
                            <h3 className='text-2xl font-medium'>Nutrition</h3>
                        </div>
                        <p className='text-lg'>Proper nutrition is essential for maintaining overall health.</p>
                    </div>
                    <div className="md:w-[44%]">
                        <div className="flex gap-4 items-center mb-3">
                            <svg aria-hidden="true" className="w-6 e-font-icon-svg e-fas-dice-d6" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="gray" d="M422.19 109.95L256.21 9.07c-19.91-12.1-44.52-12.1-64.43 0L25.81 109.95c-5.32 3.23-5.29 11.27.06 14.46L224 242.55l198.14-118.14c5.35-3.19 5.38-11.22.05-14.46zm13.84 44.63L240 271.46v223.82c0 12.88 13.39 20.91 24.05 14.43l152.16-92.48c19.68-11.96 31.79-33.94 31.79-57.7v-197.7c0-6.41-6.64-10.43-11.97-7.25zM0 161.83v197.7c0 23.77 12.11 45.74 31.79 57.7l152.16 92.47c10.67 6.48 24.05-1.54 24.05-14.43V271.46L11.97 154.58C6.64 151.4 0 155.42 0 161.83z"></path></svg>
                            <h3 className='text-2xl font-medium'>Nutrition</h3>
                        </div>
                        <p className='text-lg'>Proper nutrition is essential for maintaining overall health.</p>
                    </div>
                </div>
            </div>
            <div className="w-full md:w[48%]">
                <Image src={img1} alt='client image' height={500} width={600} className='object-cover m-auto rounded-[40px]' />
            </div>
        </section>
    )
}

export default Holistic