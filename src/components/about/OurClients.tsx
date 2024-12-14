import Image from 'next/image'
import React from 'react'
import clientImg1 from '@/assets/Banner-Image.webp'

const OurClients = () => {
    return (
        <section className='py-20'>
            <div className="flex flex-col md:flex-row justify-between gap-6 text-customBlack max-w-screen-xl m-auto px-4">
                <div className="w-full md:w-1/3">
                    <h3 className='text-4xl md:text-6xl tracking-wide'>What Our Clients Say About Us</h3>
                    <p className='max-w-2xl m-auto text-lg my-5'>We have dozens of partners from farmers, ranchers and fishermen to meet your organic food needs. You can buy it on our marketplace and we will send it in packaging that can maintain the freshness of the ingredients you buy.</p>
                    <button className='py-4 px-8 bg-customBlack w-fit text-white rounded-full'>Book Now</button>

                </div>
                <div className="w-full md:w-2/3 flex justify-between flex-wrap gap-5">
                    <div className="md:w-[48%] p-4 md:p-8 rounded-[40px] bg-gray-100">
                        <Image src={clientImg1} alt='client image' height={80} width={80} className='object-cover' />
                        <h3 className='text-2xl font-medium mt-3'>Janne Ruby Jane</h3>
                        <p className='text-lg'>Customers</p>
                        <p className='text-2xl font-medium my-3'>4.8</p>
                        <p className='text-lg'>“We have dozens of partners from farmers, ranchers and fishermen to meet your organic food needs. You can buy it on our marketplace and we will send it in packaging that can maintain the freshness of the ingredients you buy”.
                        </p>
                    </div>
                    <div className="md:w-[48%] p-4 md:p-8 rounded-[40px] bg-gray-100">
                        <Image src={clientImg1} alt='client image' height={80} width={80} className='object-cover' />
                        <h3 className='text-2xl font-medium mt-3'>Janne Ruby Jane</h3>
                        <p className='text-lg'>Customers</p>
                        <p className='text-2xl font-medium my-3'>4.8</p>
                        <p className='text-lg'>“We have dozens of partners from farmers, ranchers and fishermen to meet your organic food needs. You can buy it on our marketplace and we will send it in packaging that can maintain the freshness of the ingredients you buy”.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurClients