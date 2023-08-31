'use client'

import Image from 'next/image'
import { useState } from 'react';
import NavBar from '../components/navbar';

export default function Login() {


return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between py-40 px-10">
    <NavBar></NavBar>
    
    <div className='bg-white text-slate-600 p-10 shadow-[0_35px_60px_-5px_rgba(0,0,0,0.3)] rounded-md w-80'>
        <h1 className='text-center text-2xl mb-5 font-bold'>Iniciar Sesión</h1>
        <form action="" method="post">
            <div className='mb-4'>
                <label htmlFor="nombreUsuario">Nombre de Usuario: </label><br />
                <input id='nombreUsuario' type="text" placeholder='Ingrese su nombre de usuario'
                    className='transition duration-300 ease-in-out ring-[0.5px] ring-slate-500 w-full mt-2 rounded-md p-1.5 focus:ring focus:ring-blue-500 outline-0 text-black text-sm placeholder:text-sm' 
                />
            </div>

            <div>
                <label htmlFor="contrasena">Contraseña: </label><br />
                <input id='contrasena' type="password" placeholder='Ingrese su contraseña'
                    className='transition duration-300 ease-in-out ring-[0.5px] ring-slate-500 w-full mt-2 rounded-md p-1.5 focus:ring focus:ring-blue-500 outline-0 text-black text-sm placeholder:text-sm'
                />
            </div>
            
            <button  
                className="transition duration-300 ease-in-out hover:scale-105 mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Ingresar
            </button>

        </form>

    </div>
    
    
    </main>
)
}
