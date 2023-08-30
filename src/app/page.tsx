'use client'

import Image from 'next/image'
import { useState } from 'react';

export default function Home() {

    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };


  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-15">
      <nav className={`bg-black py-4 absolute inset-x-0 top-0 md:h-16 h-16`}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white font-bold text-xl ml-5">DeveloBlog</div>
          <ul className={`md:flex hidden space-x-6 md:space-x-6 ${menuOpen ? 'hidden' : 'flex'}`}>
            <li><a href="#" className="text-white hover:underline">Inicio</a></li>
            <li><a href="#" className="text-white hover:underline">Acerca</a></li>
            <li><a href="#" className="text-white hover:underline">Servicios</a></li>
            <li><a href="#" className="text-white hover:underline">Contacto</a></li>
          </ul>
          <button
            className="text-white text-xl md:hidden mr-5"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="bg-black text-white absolute top-16 right-5 -mr-5 rounded-l-lg shadow-[0_50px_60px_-20px_rgba(0,0,0,0.5)] ">
          <ul className="flex flex-col space-y-4 p-4">
            <li><a href="#" className="text-white hover:underline">Inicio</a></li>
            <li><a href="#" className="text-white hover:underline">Acerca</a></li>
            <li><a href="#" className="text-white hover:underline">Servicios</a></li>
            <li><a href="#" className="text-white hover:underline">Contacto</a></li>
          </ul>
        </div>
      )}
    </main>
  )
}

