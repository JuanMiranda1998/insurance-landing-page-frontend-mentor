
const HeroSection = () => {
  return (
    <div className="bg-[#2c2640] bg-heroLeftMobile md:bg-heroLeftDesktop bg-[0rem_20rem] bg-no-repeat mb-12">
      <div className='md:flex flex-row-reverse md:px-32 md:bg-heroRightDesktop bg-right bg-no-repeat'>
        <div>
          <img className='hidden md:block' src="/images/image-intro-desktop.jpg" alt="" />
          <img className='block md:hidden' src="/images/image-intro-mobile.jpg" alt="" />
        </div>
        <div className='text-center py-28 px-4 text-white'>
          <h1 className='text-5xl font-title my-6'>Humanizing your insurance.</h1>
          <p className='mb-16 px-4'>
            Get your life insurance coverage easier and faster. We blend our expertise
            and technology to help you find the plan that’s right for you. Ensure you
            and your loved ones are protected.
          </p>
          <a className='px-8 py-3 border border-white uppercase' href="#">View plans</a>
        </div>
      </div>
    </div>
  )
}

export default HeroSection