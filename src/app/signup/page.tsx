'use client'

import Image from 'next/image'
import { SetStateAction, useState } from 'react';
import Link from 'next/link';
import NavbarSignup from '../components/navbar_signup';

export default function Signup() {

// Username para signup
const [username_sig, setUsername_sig] = useState('');    

// Control de match en contraseñas
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [passwordsMatch, setPasswordsMatch] = useState(true);

const manejarPassword = (e: { target: { value: SetStateAction<string>; }; }) => {
const newPassword = e.target.value;
setPassword(newPassword);
if (newPassword == '') setPasswordsMatch(true);
};

const manejarConfirmPassword = (e: { target: { value: SetStateAction<string>; }; }) => {
const newConfirmPassword = e.target.value;
setConfirmPassword(newConfirmPassword);
setPasswordsMatch(password === newConfirmPassword);
if (newConfirmPassword == '') setPasswordsMatch(true);
};

// Manejo de SignUp:
const manejarRegistro = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const data = {
        username: username_sig, 
        password: password, 

    };
    
    try {
    const response = await fetch('http://127.0.0.1:8000/registrar_usuario', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        console.log('Usuario registrado con éxito');

    } else {
        console.error('Error de registro');
    }
    } catch (error) {
        console.error('Error de red', error);
    }
};


return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-15">
                <NavbarSignup></NavbarSignup>
        
                <div className='md:animate-fade-down md:animate-once'>
                    <div className=' bg-white text-slate-600 p-10 mt-[200px] shadow-[0_35px_60px_-5px_rgba(0,0,0,0.3)] rounded-md w-80'>
                        <h1 className='text-center text-2xl mb-5 font-bold'>Regístrate</h1>
                        <form method="post" onSubmit={manejarRegistro}>
                            <div className='mb-4'>
                                <label htmlFor="nombreUsuario_reg">Nombre de Usuario: </label><br />
                                <input id='nombreUsuario_reg' type="text" placeholder='Ingrese un nombre de usuario' onChange={(e) => setUsername_sig(e.target.value)}
                                    className='transition duration-300 ease-in-out ring-[0.5px] ring-slate-500 w-full mt-2 rounded-md p-1.5 focus:ring focus:ring-blue-500 outline-0 text-black text-sm placeholder:text-sm' 
                                />
                            </div>
                            {!passwordsMatch && (
                            <p className="text-red-500 text-sm">Las contraseñas no coinciden</p>
                            )}
                            <div className='mb-4'>
                                <label htmlFor="contrasena_reg">Contraseña: </label><br />
                                <input id='contrasena_reg' type="password" placeholder='Ingrese una contraseña' onChange={manejarPassword}
                                    className='transition duration-300 ease-in-out ring-[0.5px] ring-slate-500 w-full mt-2 rounded-md p-1.5 focus:ring focus:ring-blue-500 outline-0 text-black text-sm placeholder:text-sm'
                                />
                            </div>

                            <div>
                                <label htmlFor="rep_contrasena">Repetir contraseña: </label><br />
                                <input id='rep_contrasena' type="password" placeholder='Repita la contraseña' onChange={manejarConfirmPassword}
                                    className='transition duration-300 ease-in-out ring-[0.5px] ring-slate-500 w-full mt-2 rounded-md p-1.5 focus:ring focus:ring-blue-500 outline-0 text-black text-sm placeholder:text-sm'
                                />
                            </div>
                            
                            <button 
                                type='submit'

                                className="transition duration-300 ease-in-out hover:scale-105 mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Registrarse
                            </button>

                        </form>

                    </div>
                </div>

    </main>
)
}