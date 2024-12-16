import React from 'react'

const ConsultationProcess = () => {
  return (
    <section className='max-w-screen-xl m-auto py-20 px-4 flex flex-col md:flex-row justify-between items-center gap-8'>
      <div className="w-full md:w[48%] text-customBlack">
        <h3 className='text-4xl md:text-6xl tracking-wide'>Consultation Process</h3>
        <p className='max-w-2xl m-auto text-lg my-5'>We are a group of nutrition doctors who collaborate to create a forum where people can consult about their nutritional needs.</p>
        <h3 className='text-3xl font-medium my-8'>What Will You Get</h3>
        <div className="w-full flex flex-col md:flex-row justify-between flex-wrap gap-8">
          <div className="w-full">
            <div className="flex gap-4 items-center mb-3">
              <svg aria-hidden="true" className="w-6 e-font-icon-svg e-fas-dice-d6" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="gray" d="M422.19 109.95L256.21 9.07c-19.91-12.1-44.52-12.1-64.43 0L25.81 109.95c-5.32 3.23-5.29 11.27.06 14.46L224 242.55l198.14-118.14c5.35-3.19 5.38-11.22.05-14.46zm13.84 44.63L240 271.46v223.82c0 12.88 13.39 20.91 24.05 14.43l152.16-92.48c19.68-11.96 31.79-33.94 31.79-57.7v-197.7c0-6.41-6.64-10.43-11.97-7.25zM0 161.83v197.7c0 23.77 12.11 45.74 31.79 57.7l152.16 92.47c10.67 6.48 24.05-1.54 24.05-14.43V271.46L11.97 154.58C6.64 151.4 0 155.42 0 161.83z"></path></svg>
              <h3 className='text-2xl font-medium'>Information that Client Needs</h3>
            </div>
            <p className='text-lg'>We are available in more than 50 cities in 2 countries.</p>
          </div>
          <div className="w-full">
            <div className="flex gap-4 items-center mb-3">
              <svg aria-hidden="true" className="w-6 e-font-icon-svg e-fas-dice-d6" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="gray" d="M422.19 109.95L256.21 9.07c-19.91-12.1-44.52-12.1-64.43 0L25.81 109.95c-5.32 3.23-5.29 11.27.06 14.46L224 242.55l198.14-118.14c5.35-3.19 5.38-11.22.05-14.46zm13.84 44.63L240 271.46v223.82c0 12.88 13.39 20.91 24.05 14.43l152.16-92.48c19.68-11.96 31.79-33.94 31.79-57.7v-197.7c0-6.41-6.64-10.43-11.97-7.25zM0 161.83v197.7c0 23.77 12.11 45.74 31.79 57.7l152.16 92.47c10.67 6.48 24.05-1.54 24.05-14.43V271.46L11.97 154.58C6.64 151.4 0 155.42 0 161.83z"></path></svg>
              <h3 className='text-2xl font-medium'>Follow Up Session</h3>
            </div>
            <p className='text-lg'>Essential part of maintaining progress and ensuring success.</p>
          </div>

        </div>
      </div>
      <div className="w-full md:w[48%] text-customBlack">
        <div className="w-full bg-gray-100 p-8 rounded-[40px] mb-4">
          <div className="flex gap-4 items-center mb-3">
            <span className='text-2xl w-10 h-10 bg-gray-300 flex items-center justify-center rounded-xl'>1</span>
            <h3 className='text-xl md:text-3xl font-medium'>Initial Assessment</h3>
          </div>
          <p className='text-lg'>In this step, the nutritionist conducts an initial assessment to understand the client&apos;s health goals,</p>
        </div>
        <div className="w-full bg-gray-100 p-8 rounded-[40px] mb-4">
          <div className="flex gap-4 items-center mb-3">
            <span className='text-2xl w-10 h-10 bg-gray-300 flex items-center justify-center rounded-xl'>2</span>
            <h3 className='text-xl md:text-3xl font-medium'>Customized Recommendations</h3>
          </div>
          <p className='text-lg'>Personalized recommendations can significantly enhance your health and well-being.</p>
        </div>
        <div className="w-full bg-gray-100 p-8 rounded-[40px] mb-4">
          <div className="flex gap-4 items-center mb-3">
            <span className='text-2xl w-10 h-10 bg-gray-300 flex items-center justify-center rounded-xl'>3</span>
            <h3 className='text-xl md:text-3xl font-medium'>Follow-Up and Support</h3>
          </div>
          <p className='text-lg'>Effective follow-up and support are crucial for sustaining health improvements.</p>
        </div>
      </div>
    </section>)
}

export default ConsultationProcess