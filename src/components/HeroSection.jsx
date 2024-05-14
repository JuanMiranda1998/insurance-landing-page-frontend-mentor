
const HeroSection = () => {
  return (
    <div className="bg-[#2c2640] mb-12 mix-blend-screen">
      <div className='md:flex flex-row-reverse md:px-32 xl:bg-heroRightDesktop bg-right xl:bg-[100%_-2rem] bg-no-repeat'>
        <div className="lg:w-[500px]">
          <img className='hidden xl:block w-full translate-y-[150px]' src="/images/image-intro-desktop.jpg" alt="family image" role="img" />
          <img className='w-full h-full object-cover object-left block xl:hidden' src="/images/image-intro-mobile.jpg" alt="family image" role="img" />
        </div>
        <div className='lg:max-w-[600px] lg:mr-10 bg-heroLeftMobile bg-left-top bg-no-repeat md:bg-none'>
          <div className="text-center md:text-left text-white bg-heroRightMobile bg-[right_bottom_-12rem] md:bg-none bg-no-repeat py-32 px-4 lg:px-0">
            <div className="hidden lg:block w-32 h-[2px] bg-[#e7e7e7] lg:mb-12" role="separator" />
            <h1 className='text-5xl lg:text-7xl font-title my-6'>Humanizing your insurance.</h1>
            <p className='mb-16 px-4 md:px-0 text-base md:text-lg'>
              Get your life insurance coverage easier and faster. We blend our expertise
              and technology to help you find the plan that’s right for you. Ensure you
              and your loved ones are protected.
            </p>
            <a className='px-8 py-3 border border-white uppercase tracking-wide hover:bg-white hover:text-[#2c2640] hover:font-semibold transition-all ease-in duration-150' href="#" role="button">View plans</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection