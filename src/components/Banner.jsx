
const Banner = () => {
  return (
    <div className='flex flex-col xl:flex-row justify-center xl:justify-between items-center mb-32 mx-4 md:mx-32 px-6 xl:px-16 py-10 bg-[#2c2640] bg-bannerMobile lg:bg-bannerDesktop bg-no-repeat bg-right text-white text-center xl:text-left' role="banner">
        <h2 className='text-4xl xl:text-5xl font-title mt-6 mb-12 xl:my-10 xl:max-w-[500px]'>Find out more about how we work</h2>
        <a className='px-8 py-3 border border-white uppercase hover:bg-white hover:text-[#2c2640] font-semibold transition-all ease-in duration-150' href="#">How we work</a>
    </div>
  )
}

export default Banner