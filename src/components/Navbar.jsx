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
    <nav className={`fixed bg-white top-0 left-0 right-0 z-10 mx-auto`}>
      <div className="flex flex-row justify-between items-center px-6 lg:px-8 py-6">
        <div className="w-28">
          <img className="w-full h-full" src="/logo.svg" alt="insurance logo" />
        </div>
        <div className="flex lg:hidden">
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

        <div className="hidden lg:flex flex-row justify-evenly">
          <ul>
              {NAVLINKS.map((link, index) => (
              <li key={index}><a href="#">{link}</a></li>
              ))}
              <li><a href="#">View plans</a></li>
          </ul>
        </div>
      </div>
      {navbarOpen ? (<MenuOverlay links={NAVLINKS} />) : null}
    </nav>
  )
}

export default Navbar