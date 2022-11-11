import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Navbar() {

  const [show, setShow] = useState(false)
  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <header className="sticky top-0 bg-white shadow z-10">
      <nav className="flex justify-between max-w-7xl mx-auto px-6 md:px-16 py-6">
        <span className="flex items-center justify-center gap-2 font-bold z-20">
          <FaUserCircle className="h-8 w-8" />
          LeonardoTorre
        </span>
        <ul className={`top-0 ${show ? 'left-0' : 'left-full'} transition-all duration-1000 fixed sm:static sm:flex-row sm:h-auto sm:w-auto w-full h-screen flex flex-col justify-center items-center z-10 bg-white gap-6 font-bold text-gray-600`}>
          <li>About</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
        <div className="h-full w-8 cursor-pointer sm:hidden z-20">
          <GiHamburgerMenu className="h-full w-full" onClick={toggleShow} />
        </div>
      </nav>
    </header>
  )
}
