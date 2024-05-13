
const Footer = () => {
  return (
    <footer className="lg:px-32 py-24 bg-footerMobile lg:bg-footerDesktop bg-no-repeat">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
          <div className="w-24 lg:w-32 mb-8 lg:mb-0">
            <img className="w-full h-full" src="/logo.svg" alt="" />
          </div>
          <div className="flex flex-row justify-center items-center gap-4 lg:gap-6">
            <img className="w-6 cursor-pointer" src="/icons/icon-facebook.svg" alt="" />
            <img className="w-6 cursor-pointer" src="/icons/icon-twitter.svg" alt="" />
            <img className="w-6 cursor-pointer" src="/icons/icon-pinterest.svg" alt="" />
            <img className="w-6 cursor-pointer" src="/icons/icon-instagram.svg" alt="" />
          </div>
        </div>
        <div className='w-[320px] lg:w-full h-[2px] bg-[#d9d9d9] mx-auto my-10'></div>
        <div className="flex flex-col lg:flex-row lg:justify-items-start lg:gap-32 xl:gap-48 text-center">
          <div className="mb-6 lg:text-left">
            <h4 className="uppercase text-[#7f7d82] font-semibold mb-6">Our company</h4>
            <ul className="flex flex-col gap-2">
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide hover:underline" href="#">How we work</a></li>
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide hover:underline" href="#">Why Insure?</a></li>
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide hover:underline" href="#">View plans</a></li>
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide hover:underline" href="#">Reviews</a></li>
            </ul>
          </div>
          <div className="mb-6 lg:text-left">
            <h4 className="uppercase text-[#7f7d82] font-semibold mb-6">Help me</h4>
            <ul className="flex flex-col gap-2">
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide hover:underline" href="#">FAQ</a></li>
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide hover:underline" href="#">Terms of use</a></li>
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide hover:underline" href="#">Privacy policy</a></li>
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide hover:underline" href="#">Cookies</a></li>
            </ul>
          </div>
          <div className="mb-6 lg:text-left">
            <h4 className="uppercase text-[#7f7d82] font-semibold mb-6">Contact</h4>
            <ul className="flex flex-col gap-2">
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide hover:underline" href="#">Sales</a></li>
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide hover:underline" href="#">Support</a></li>
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide hover:underline" href="#">Live chat</a></li>
            </ul>
          </div>
          <div className="mb-6 lg:text-left">
            <h4 className="uppercase text-[#7f7d82] font-semibold mb-6">Others</h4>
            <ul className="flex flex-col gap-2">
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide hover:underline" href="#">Careers</a></li>
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide hover:underline" href="#">Press</a></li>
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide hover:underline" href="#">Licenses</a></li>
            </ul>
          </div>
        </div>
      </footer>
  )
}

export default Footer