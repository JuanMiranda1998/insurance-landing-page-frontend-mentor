import AboutSection from "./components/AboutSection"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className='w-full min-h-[100lvh] flex flex-col relative font-display'>
      <Navbar />    
      <div className='mt-20 lg:mt-0 xl:bg-heroLeftDesktop xl:bg-[0rem_30rem] bg-no-repeat' role="main">
        <HeroSection />
        <AboutSection />
        <Banner />
      </div>
      <Footer />
      <div className="my-4 text-[#616476] text-center text-sm">
        Challenge by{" "}
        <a className="text-[#3e52a3]" href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a className="text-[#3e52a3]" href="https://github.com/JuanMiranda1998">Juan Miranda</a>.
      </div>
    </div>
  )
}

export default App
