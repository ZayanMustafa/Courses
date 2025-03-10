"use client"

import Link from "next/link"
import { NAVBAR_LINKS } from "../constant/navlink"
import { useState } from "react"
// import { Menu } from "lucide-react"
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="lg:px-16 px-4 bg-white flex flex-wrap border-b items-center py-2 shadow-md">
      <div className="flex-1 flex justify-between items-center">
        <Link href="/home" className="text-xl">
          Madani Courses Korangi Town
        </Link>
      </div>

      <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block" onClick={toggleMenu}>
        <IoMdMenu className="text-gray-900 w-5 h-5" />
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" checked={isMenuOpen} readOnly />

      <div className={`${isMenuOpen ? "block" : "hidden"} md:flex md:items-center md:w-auto w-full`} id="menu">
        <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            {NAVBAR_LINKS.map((link, index) => (
              <li key={index}>
                <Link className="md:p-4 py-3 px-0 block hover:text-green-400 flex items-center" href={link.path}>
                  <span className="ml-2">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

