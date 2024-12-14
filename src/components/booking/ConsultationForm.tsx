import { Mail, Phone } from 'lucide-react'
import React from 'react'

const ConsultationForm = () => {
  return (
    <section className='max-w-screen-xl m-auto py-20 px-4 flex flex-col md:flex-row justify-between items-center gap-8'>
      <div className="w-full md:w[48%] text-customBlack">
        <h3 className='text-4xl md:text-6xl tracking-wide'>Book a Consultation</h3>
        <p className='max-w-2xl m-auto text-lg my-5'>We are a group of nutrition doctors who collaborate to create a forum where people can consult about their nutritional needs. We are a group of nutrition doctors who collaborate to create a forum where people can consult about it.</p>
        <h3 className='text-3xl font-medium my-8'>Contact Information</h3>

        <div className="w-full flex flex-col md:flex-row justify-between flex-wrap gap-2">
          <div className="w-full">
            <div className="flex gap-4 items-center">
              <Mail />
              <h3 className='text-2xl font-medium'>hello@nutrifithealth.com</h3>
            </div>
          </div>
          <div className="w-full">
            <div className="flex gap-4 items-center">
              <Phone />
              <h3 className='text-2xl font-medium'>+89 093756289</h3>
            </div>
          </div>

        </div>
      </div>
      <div className="w-full md:w[48%] text-customBlack bg-gray-100 rounded-[40px]">
        <div className="p-8">
          <h2 className="text-2xl font-medium mb-8">
            Fill out the form below with your details and any specific questions or comments you may have.
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 p-4 rounded-xl focus:outline-none "
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 p-4 rounded-xl focus:outline-none "
              />
            </div>
            <input
              type="text"
              placeholder="Contact Information"
              className="w-full p-4 rounded-xl focus:outline-none "
            />
            <input
              type="text"
              placeholder="Preferred Date and Time"
              className="w-full p-4 rounded-xl focus:outline-none "
            />
            <textarea
              placeholder="Brief Descriptions"
              className="w-full p-4 rounded-xl focus:outline-none "
            ></textarea>
            <button className="w-fit h-fit py-4 px-8 bg-customBlack text-white rounded-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>)
}

export default ConsultationForm