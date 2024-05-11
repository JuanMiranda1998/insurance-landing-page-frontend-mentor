import { useState } from "react"
import MenuOverlay from "./MenuOverlay"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

    const NAVLINKS = [
        "How we work",
        "Blog",
        "Account",
      ]

      const handleMenuOpen = () => {
        setNavbarOpen(!navbarOpen)
      }

  return (
    <nav className="fixed md:relative w-full bg-white top-0 left-0 right-0 z-10 mx-auto">
      <div className="flex flex-row justify-between items-center px-6 lg:px-32 py-6 lg:py-8">
        <div className="w-28">
          <img className="w-full h-full" src="/logo.svg" alt="insurance logo" />
        </div>
        <div className="flex md:hidden">
          {!navbarOpen? (
          <button onClick={handleMenuOpen}>
            <img src="/icons/icon-hamburger.svg" alt="" />
          </button>
          ) : (
          <button onClick={handleMenuOpen}>
            <img src="/icons/icon-close.svg" alt="" />
          </button>
          )}
        </div>
        <div className="hidden md:block">
          <ul className="flex flex-row justify-evenly gap-6">
              {NAVLINKS.map((link, index) => (
              <li key={index}><a className="uppercase text-[#7f7d82] font-semibold mb-6" href="#">{link}</a></li>
              ))}
              <li><a className="px-9 py-3 border-2 border-[#2d2640] uppercase font-semibold" href="#">View plans</a></li>
          </ul>
        </div>
      </div>
      {navbarOpen ? (<MenuOverlay links={NAVLINKS} />) : null}
    </nav>
  )
}

export default Navbar