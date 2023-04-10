import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { navLinks } from "@/constants/constants"

const Navbar = () => {
  const [active, setActive] = useState<string>("")
  const [toggle, setToggle] = useState<boolean>(false)

  const handleLink = () => {
    setActive("")
    window.scrollTo(0, 0)
  }
  return (
    <nav className={`p-x w-full items-center py-5 flex top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2" onClick={handleLink}>
          <Image src="/assets/logo.svg" alt="logo" width={50} height={50} />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Oancea Ilie &nbsp;
            <span className="sm:block hidden">| JS Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } 
              hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.href}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="RESPONSIVE-MENU sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={`/assets/${toggle ? "close.svg" : "menu.svg"}`}
            width={24}
            height={24}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  }
                  font-poppins font-medium cursor-pointer text-[16px]
                  `}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <Link href={"/"}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
