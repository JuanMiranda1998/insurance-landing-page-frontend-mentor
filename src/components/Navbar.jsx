
const Navbar = () => {
    const NAVLINKS = [
        "How we work",
        "Blog",
        "Account",
      ]
  return (
    <div className="w-full py-6">
      <div className="w-24">
        <img src="/logo.svg" alt="insurance logo" />
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
  )
}

export default Navbar