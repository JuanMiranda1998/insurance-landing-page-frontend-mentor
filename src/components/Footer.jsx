
const Footer = () => {
  return (
    <footer>
        <div className="flex flex-col justify-center items-center">
          <div className="w-24 mb-8">
            <img src="/logo.svg" alt="" />
          </div>
          <div className="flex flex-row justify-center items-center gap-4">
            <img className="w-6" src="/icons/icon-facebook.svg" alt="" />
            <img className="w-6" src="/icons/icon-twitter.svg" alt="" />
            <img className="w-6" src="/icons/icon-pinterest.svg" alt="" />
            <img className="w-6" src="/icons/icon-instagram.svg" alt="" />
          </div>
        </div>
        <div className='w-[320px] h-[2px] bg-[#d9d9d9] mx-auto my-10'></div>

        <div className="text-center">
          <div className="mb-6">
            <h4 className="uppercase text-[#7f7d82] font-semibold mb-6">Our company</h4>
            <ul className="flex flex-col gap-2">
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide" href="#">How we work</a></li>
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide" href="#">Why Insure?</a></li>
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide" href="#">View plans</a></li>
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide" href="#">Reviews</a></li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="uppercase text-[#7f7d82] font-semibold mb-6">Help me</h4>
            <ul className="flex flex-col gap-2">
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide" href="#">FAQ</a></li>
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide" href="#">Terms of use</a></li>
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide" href="#">Privacy policy</a></li>
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide" href="#">Cookies</a></li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="uppercase text-[#7f7d82] font-semibold mb-6">Contact</h4>
            <ul className="flex flex-col gap-2">
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide" href="#">Sales</a></li>
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide" href="#">Support</a></li>
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide" href="#">Live chat</a></li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="uppercase text-[#7f7d82] font-semibold mb-6">Others</h4>
            <ul className="flex flex-col gap-2">
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide" href="#">Careers</a></li>
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide" href="#">Press</a></li>
              <li><a className="uppercase text-[#1e1c2a] font-semibold tracking-wide" href="#">Licenses</a></li>
            </ul>
          </div>
        </div>
      </footer>
  )
}

export default Footer