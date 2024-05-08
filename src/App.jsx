
function App() {

  const NAVLINKS = [
    "How we work",
    "Blog",
    "Account",
  ]

  return (
    <div className='w-full max-w-[100vw] min-h-[100lvh] bg-red-200'>
      <div className='w-full flex flex-col items-center'>
      <div>
        <ul>
          {NAVLINKS.map((link, index) => (
            <li key={index}><a href="#">{link}</a></li>
          ))}
          <li><a href="#">View plans</a></li>
        </ul>
      </div>

      <div>
        <h1>Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our expertise
          and technology to help you find the plan that’s right for you. Ensure you
          and your loved ones are protected.
        </p>
        <a href="#">View plans</a>
      </div>

      <section>
        <h2>We’re different</h2>
        <div>
          <h3>Snappy Process</h3>
          <p>
            Our application process can be completed in minutes, not hours. Don’t get
            stuck filling in tedious forms.
          </p>
        </div>
        <div>
          <h3>Affordable Prices</h3>
          <p>
            We don’t want you worrying about high monthly costs. Our prices may be low,
            but we still offer the best coverage possible.
          </p>
        </div>
        <div>
          <h3>People First</h3>
          <p>
            Our plans aren’t full of conditions and clauses to prevent payouts. We make
            sure you’re covered when you need it.
          </p>
        </div>
      </section>

      <h2>Find out more about how we work</h2>

      <a href="#">How we work</a>


      <footer>
        
        <div>
          <h4>Our company</h4>
          <ul>
            <li><a href="#">How we work</a></li>
            <li><a href="#">Why Insure?</a></li>
            <li><a href="#">View plans</a></li>
            <li><a href="#">Reviews</a></li>
          </ul>
        </div>
  
        <div>
          <h4>Help me</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms of use</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>
  
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="#">Sales</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Live chat</a></li>
          </ul>
        </div>
  
        <div>
          <h4>Others</h4>
          <ul>
            Careers
            Press
            Licenses
          </ul>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default App
