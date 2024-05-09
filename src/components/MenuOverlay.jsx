/* eslint-disable react/prop-types */

const MenuOverlay = ({ links }) => {
  return (
        <div className="h-[100lvh] absolute top-0 left-0 bottom-0 right-0 translate-y-20 bg-[#2b282f] bg-[url('/background/bg-pattern-mobile-nav.svg')] bg-no-repeat bg-bottom text-white">
            <ul className="flex flex-col items-center gap-6 mt-10 px-10 text-center">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href="#" className=" text-lg uppercase">{link}</a>
                    </li>
                ))}
                <li className="w-full py-2 border border-white"><a href="#" className="text-lg uppercase">View plans</a></li>
            </ul>
        </div>
  )
}

export default MenuOverlay