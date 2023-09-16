'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';

export default function NavbarSignup(){
    
// control de navbar en pantallas pequeñas
const [menuOpen, setMenuOpen] = useState(false);
const toggleMenu = () => {setMenuOpen(!menuOpen);};
    
    
    return(
    <>
        <nav className={`bg-black py-4 absolute inset-x-0 top-0 md:h-16 h-16`}>
            <div className="container mx-auto flex items-center justify-between">
                <div className="hover:animate-shake hover:animate-once text-white font-bold text-xl ml-10">
                    <Link href="/">
                        DeveloBlog  
                    </Link>
                </div>
                <ul className={`md:flex space-x-6 md:space-x-6 mr-10 hidden`}>
                    <li><Link href='/' className={`text-white hover:underline `}>Inicio</Link></li>
                    <li><Link href='/login' className={`text-white hover:underline `}>Iniciar Sesión</Link></li>
                </ul>
                <Link
                    href=''
                    className="text-white text-xl md:hidden mr-5"
                    onClick={() => {toggleMenu();}}
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

                </Link>
            </div>
        </nav>
        {menuOpen && (
        <div className={`animate-fade-left animate-once bg-black pb-3 pt-3 pl-3 pr-5 -mr-5 md:hidden text-white absolute top-16 text-left right-5 rounded-l-lg shadow-[0_50px_60px_-20px_rgba(0,0,0,0.5)]`}>
            <ul className={`flex-col`}>
                <li><Link href='/' className={`text-white hover:underline`}>Inicio</Link></li>
                <li><Link href='/login' className={`text-white hover:underline`}>Iniciar Sesión</Link></li>
            </ul>
        </div>
        )}
        
    </>
)}