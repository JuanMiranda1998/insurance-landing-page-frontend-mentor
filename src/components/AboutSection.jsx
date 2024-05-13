
const AboutSection = () => {
  return (
    <section className='px-5 py-24 xl:py-32 xl:mt-44 lg:px-32'>
      <div className='w-32 h-[2px] bg-[#e7e7e7] mx-auto lg:ml-0 mb-12'></div>
        <h2 className='font-title text-[2.75rem] text-center lg:text-left mb-16'>We’re different</h2>
        <div className="max-w-[400px] lg:max-w-full mx-auto flex flex-col lg:flex-row justify-center items-center lg:gap-10">
          <div className='flex flex-col justify-center items-center lg:items-start mb-14'>
            <div className='w-20 h-20 mb-6'>
              <img src="/icons/icon-snappy-process.svg" alt="" />
            </div>
            <h3 className='text-3xl font-title mb-4'>Snappy Process</h3>
            <p className='text-center lg:text-left font-medium text-[#828185]'>
              Our application process can be completed in minutes, not hours. Don’t get
              stuck filling in tedious forms.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center lg:items-start mb-14'>
            <div className='w-20 h-20 mb-6'>
              <img src="/icons/icon-affordable-prices.svg" alt="" />
            </div>
            <h3 className='text-3xl font-title mb-4'>Affordable Prices</h3>
            <p className='text-center lg:text-left font-medium text-[#828185]'>
              We don’t want you worrying about high monthly costs. Our prices may be low,
              but we still offer the best coverage possible.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center lg:items-start mb-14'>
            <div className='w-20 h-20 mb-6'>
              <img src="/icons/icon-people-first.svg" alt="" />
            </div>
            <h3 className='text-3xl font-title mb-4'>People First</h3>
            <p className='text-center lg:text-left font-medium text-[#828185]'>
              Our plans aren’t full of conditions and clauses to prevent payouts. We make
              sure you’re covered when you need it.
            </p>
          </div>
        </div>
      </section>
  )
}

export default AboutSection