import AboutSection from "./components/AboutSection"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

function App() {

  

  return (
    <div className='w-full max-w-[100vw] min-h-[100lvh]'>
      <div className='w-full flex flex-col items-center'>
        <Navbar />    
        <HeroSection />
        <AboutSection />
        <Banner />
        <Footer />
      </div>
    </div>
  )
}

export default App
