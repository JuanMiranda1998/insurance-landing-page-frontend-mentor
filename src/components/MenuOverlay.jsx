/* eslint-disable react/prop-types */

const MenuOverlay = ({ links }) => {
  return (
        <div className="h-[100lvh] absolute top-0 left-0 bottom-0 right-0 translate-y-20 bg-[#2b282f] text-white">
            <ul className="flex flex-col items-center gap-6 mt-10">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href="#">{link}</a>
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default MenuOverlay