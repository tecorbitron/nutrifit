import React from 'react'
import { Check } from 'lucide-react'

const Pricing = () => {
    return (
        <section>
            <div className="max-w-screen-xl m-auto px-4 py-20 text-customBlack">
                <div className="text-center">
                    <h3 className='text-4xl md:text-6xl tracking-wide mb-5'>Pricing & Packages</h3>
                    <p className='max-w-2xl m-auto text-lg'>We are a group of nutrition doctors who collaborate to create a forum where people can consult about their nutritional needs.
                    </p>
                </div>

                <div className="w-full flex flex-col md:flex-row justify-between gap-6 py-16">
                    <div className="w-full md:w-[48%] bg-gray-200 rounded-[40px] p-8">
                        <h3 className='text-2xl font-medium mb-2'>Essential</h3>
                        <p className='text-xl'>Ideal for individuals seeking basic nutritional guidance and support.</p>
                        <p className='text-5xl font-medium my-5'>$29.99<span className='text-base font-normal'>/Month</span> </p>
                        <button className="w-full h-fit m-auto md:my-5 py-4 px-8 bg-customBlack text-white rounded-full">
                            Get Started
                        </button>
                        <p className='flex items-center gap-3 text-xl my-3'><Check className='text-white bg-customBlack rounded-full p-1' /> Personalized meal plans</p>
                        <p className='flex items-center gap-3 text-xl my-3'><Check className='text-white bg-customBlack rounded-full p-1' /> Access to nutrition articles</p>
                        <p className='flex items-center gap-3 text-xl my-3'><Check className='text-white bg-customBlack rounded-full p-1' /> Email support</p>
                        <p className='flex items-center gap-3 text-xl my-3'><Check className='text-white bg-customBlack rounded-full p-1' /> Monthly progress tracking</p>
                    </div>
                    <div className="w-full md:w-[48%] bg-gray-300 rounded-[40px] p-6">
                        <h3 className='text-2xl font-medium mb-2'>Premium</h3>
                        <p className='text-xl'>Comprehensive plan for those committed to achieving their health.</p>
                        <p className='text-5xl font-medium my-5'>$59.99<span className='text-base font-normal'>/Month</span> </p>
                        <button className="w-full h-fit m-auto md:my-5 py-4 px-8 bg-customBlack text-white rounded-full">
                            Get Started
                        </button>
                        <p className='flex items-center gap-3 text-xl my-3'><Check className='text-white bg-customBlack rounded-full p-1' /> Everything in the Essential Plan</p>
                        <p className='flex items-center gap-3 text-xl my-3'><Check className='text-white bg-customBlack rounded-full p-1' /> Weekly check-ins with a coach</p>
                        <p className='flex items-center gap-3 text-xl my-3'><Check className='text-white bg-customBlack rounded-full p-1' /> Customized workout plans</p>
                        <p className='flex items-center gap-3 text-xl my-3'><Check className='text-white bg-customBlack rounded-full p-1' /> Priority email and chat support</p>
                    </div>
                    <div className="w-full md:w-[48%] bg-gray-200 rounded-[40px] p-6">
                        <h3 className='text-2xl font-medium mb-2'>Elite</h3>
                        <p className='text-xl'>Tailored plan for individuals seeking personalized attention and results.</p>
                        <p className='text-5xl font-medium my-5'>$99.99<span className='text-base font-normal'>/Month</span> </p>
                        <button className="w-full h-fit m-auto md:my-5 py-4 px-8 bg-customBlack text-white rounded-full">
                            Get Started
                        </button>
                        <p className='flex items-center gap-3 text-xl my-3'><Check className='text-white bg-customBlack rounded-full p-1' /> Everything in the Premium Plan</p>
                        <p className='flex items-center gap-3 text-xl my-3'><Check className='text-white bg-customBlack rounded-full p-1' /> Unlimited access to a coach</p>
                        <p className='flex items-center gap-3 text-xl my-3'><Check className='text-white bg-customBlack rounded-full p-1' /> Quarterly progress assessments</p>
                        <p className='flex items-center gap-3 text-xl my-3'><Check className='text-white bg-customBlack rounded-full p-1' /> Exclusive access to live webinars</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing