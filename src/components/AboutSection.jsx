import React from 'react'

const AboutSection = () => {
  return (
    <section className='px-5 py-24'>
      <div className='w-32 h-[2px] bg-[#b5a4b6] mx-auto mb-12'></div>
        <h2 className='font-title text-[2.75rem] text-center mb-16'>We’re different</h2>
        <div className='flex flex-col justify-center items-center mb-14'>
          <div className='w-20 h-20 mb-6'>
            <img src="/icons/icon-snappy-process.svg" alt="" />
          </div>
          <h3 className='text-3xl font-title mb-4'>Snappy Process</h3>
          <p className='text-center font-medium text-[#828185]'>
            Our application process can be completed in minutes, not hours. Don’t get
            stuck filling in tedious forms.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center mb-14'>
          <div className='w-20 h-20 mb-6'>
            <img src="/icons/icon-affordable-prices.svg" alt="" />
          </div>
          <h3 className='text-3xl font-title mb-4'>Affordable Prices</h3>
          <p className='text-center font-medium text-[#828185]'>
            We don’t want you worrying about high monthly costs. Our prices may be low,
            but we still offer the best coverage possible.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center mb-14'>
          <div className='w-20 h-20 mb-6'>
            <img src="/icons/icon-people-first.svg" alt="" />
          </div>
          <h3 className='text-3xl font-title mb-4'>People First</h3>
          <p className='text-center font-medium text-[#828185]'>
            Our plans aren’t full of conditions and clauses to prevent payouts. We make
            sure you’re covered when you need it.
          </p>
        </div>
      </section>
  )
}

export default AboutSection