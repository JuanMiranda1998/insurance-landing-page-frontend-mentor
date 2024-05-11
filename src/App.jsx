import AboutSection from "./components/AboutSection"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

function App() {

  

  return (
    <div className=' w-full min-h-[100lvh] flex flex-col relative font-display'>
      <Navbar />    
      <div className='mt-20 lg:mt-0 w-full'>
        <HeroSection />
        <AboutSection />
        <Banner />
      </div>
      <Footer />
    </div>
  )
}

export default App
