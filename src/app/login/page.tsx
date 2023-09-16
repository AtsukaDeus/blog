'use client'

import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';
import NavbarLogin from '../components/navbar_login';

export default function Login() {

// Username y Password para el Loggeo:
const [username_log, setUsername_log] = useState('');
const [password_log, setPassword_log] = useState('');

// Manejo del loggeo

const manejarLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const data = {
    username: username_log,
    password: password_log,
    };

    try {
    const response = await fetch('http://127.0.0.1:8000/iniciar_sesion', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {

        const responseData = await response.json();
        const token = responseData.token;

        localStorage.setItem('authToken', token);
        console.log('Sesion iniciada, token recibido!');

        if(localStorage.getItem('authToken')){
            
        } else{
            console.log('token no guardado en localStorage')
        }

    } 
    else {
        console.error('Error de inicio de sesión');
    
    }
    } catch (error) {
        console.error('Error de red', error);
    }
};



return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-15">
            <NavbarLogin></NavbarLogin>
            <div className='md:animate-fade-down md:animate-once'>
                    <div className=' bg-white text-slate-600 p-10 mt-[200px] shadow-[0_35px_60px_-5px_rgba(0,0,0,0.3)] rounded-md w-80'>
                    <h1 className='text-center text-2xl mb-5 font-bold'>Iniciar Sesión</h1>
                    <form method="post" onSubmit={manejarLogin}>
                        <div className='mb-4'>
                            <label htmlFor="nombreUsuario">Nombre de Usuario: </label><br />
                            <input id='nombreUsuario' type="text" placeholder='Ingrese su nombre de usuario'
                                onChange={(e) => setUsername_log(e.target.value)}
                                className='transition duration-300 ease-in-out ring-[0.5px] ring-slate-500 w-full mt-2 rounded-md p-1.5 focus:ring focus:ring-blue-500 outline-0 text-black text-sm placeholder:text-sm' 
                            />
                        </div>

                        <div>
                            <label htmlFor="contrasena">Contraseña: </label><br />
                            <input id='contrasena' type="password" placeholder='Ingrese su contraseña'
                                onChange={(e) => setPassword_log(e.target.value)}
                                className='transition duration-300 ease-in-out ring-[0.5px] ring-slate-500 w-full mt-2 rounded-md p-1.5 focus:ring focus:ring-blue-500 outline-0 text-black text-sm placeholder:text-sm'
                            />
                        </div>
                        
                        <button 
                            type='submit'  
                            className="transition duration-300 ease-in-out hover:scale-105 mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Ingresar
                        </button>

                    </form>
                    <div className='mt-3'>
                        <span className='text-sky-500 text-sm'>Aún no tienes cuenta? Clickea </span> 
                        <Link href='/signup' className='text-sm text-sky-500 font-bold hover:underline hover:decoration-solid'>
                            Aquí
                        </Link>
                    </div>
                

                    </div>
            </div>

    </main>
)
}