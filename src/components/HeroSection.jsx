
const HeroSection = () => {
  return (
    <div className='mb-12'>
      <div>
        <img className='hidden lg:block' src="/images/image-intro-desktop.jpg" alt="" />
        <img className='block lg:hidden' src="/images/image-intro-mobile.jpg" alt="" />
      </div>
      <div className='text-center py-28 px-4 bg-[#2c2640] bg-[url("/background/bg-pattern-intro-left-mobile.svg")] bg-no-repeat text-white'>
        <h1 className='text-5xl font-title my-6'>Humanizing your insurance.</h1>
        <p className='mb-16 px-4'>
          Get your life insurance coverage easier and faster. We blend our expertise
          and technology to help you find the plan that’s right for you. Ensure you
          and your loved ones are protected.
        </p>
        <a className='px-8 py-3 border border-white uppercase' href="#">View plans</a>
      </div>
    </div>
  )
}

export default HeroSection