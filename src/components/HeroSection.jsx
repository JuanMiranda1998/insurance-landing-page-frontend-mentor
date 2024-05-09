import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <div>
        <img className='hidden lg:block' src="/images/image-intro-desktop.jpg" alt="" />
        <img className='block lg:hidden' src="/images/image-intro-mobile.jpg" alt="" />
      </div>
        <h1>Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our expertise
          and technology to help you find the plan that’s right for you. Ensure you
          and your loved ones are protected.
        </p>
        <a href="#">View plans</a>
    </div>
  )
}

export default HeroSection