'use client'

import Image from 'next/image'
import { SetStateAction, useState } from 'react';
import Link from 'next/link';

export default function Home() {

// control de navbar en pantallas pequeñas
const [menuOpen, setMenuOpen] = useState(false);
const toggleMenu = () => {setMenuOpen(!menuOpen);};
//-----------------------------------------

// Control de visibilidad del login
const [isLogin, mutarLogin] = useState(false);
const loginTrue = () => {mutarLogin(true);};
const loginFalse = () => {mutarLogin(false);};

// Control de visibilidad inicio:
const [isInicio, mutarInicio] = useState(true);
const inicioTrue = () => {mutarInicio(true)};
const inicioFalse = () => {mutarInicio(false)};

// Control de visibilidad Signup:
const [isSignup, mutarSignup] = useState(false);
const signupTrue = () => {mutarSignup(true)};
const signupFalse = () => {mutarSignup(false)};

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



// Manejo de Loggeo:
const manejarLogin = async (e: { preventDefault: () => void; }) => {
e.preventDefault();

// Construir el objeto de datos para la solicitud JSON
const data = {
    username: "",
    password: "",
};

try {
    const response = await fetch('/tu-api-de-inicio-de-sesion', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        // Autenticación exitosa; redirigir a la página "publicar"
        window.location.href = '/publicar'; // Cambia esto a tu URL deseada
    } else {
        // Autenticación fallida; maneja los errores según sea necesario
        console.error('Error de inicio de sesión');
    }
} catch (error) {
    console.error('Error de red', error);
}
};

//-----------------------------------------

// función para ocultar todos los elemenos
// menos los del inicio
const irLogin = () => {
    inicioFalse();
    signupFalse();
    setTimeout(() => {
        loginTrue();
    }, 200); 

}

const irInicio = () => {
    loginFalse();
    signupFalse();
    setTimeout(() => {
        inicioTrue();
    }, 200); 
}

const irSignup = () => {
    inicioFalse();
    loginFalse();
    setTimeout(() => {
        signupTrue();
    }, 200); 
}


return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-15">
        <nav className={`bg-black py-4 absolute inset-x-0 top-0 md:h-16 h-16`}>
            <div className="container mx-auto flex items-center justify-between">
                <div className="hover:animate-shake hover:animate-once text-white font-bold text-xl ml-10">
                <Link href="/" onClick={() => window.location.reload()}>
                    DeveloBlog  
                </Link>
                </div>
                <ul className={`md:flex space-x-6 md:space-x-6 mr-10 hidden`}>
                    <li><Link href='' onClick={irInicio} className={`text-white hover:underline ${isInicio ? 'underline' : ''}`}>Inicio</Link></li>
                    <li><Link href='' onClick={irLogin} className={`text-white hover:underline ${isLogin ? 'underline' : ''}`}>Iniciar Sesión</Link></li>
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
        <div className={`${menuOpen ? 'animate-fade-left animate-once ' : ''} bg-black pb-3 pt-3 pl-3 pr-5 -mr-5 md:hidden text-white absolute top-16 text-left right-5 rounded-l-lg shadow-[0_50px_60px_-20px_rgba(0,0,0,0.5)]`}>
            <ul className={`flex-col`}>
                <li><Link href='' onClick={() => {irInicio();}} className={`text-white hover:underline ${isInicio ? 'underline' : ''}`}>Inicio</Link></li>
                <li><Link href='' onClick={() =>  {irLogin();}} className={`text-white hover:underline ${isLogin ? 'underline' : ''}`}>Iniciar Sesión</Link></li>
            </ul>
        </div>
        )}

        {isLogin && (
            <div className='md:animate-fade-down md:animate-once'>
                    <div className=' bg-white text-slate-600 p-10 mt-[200px] shadow-[0_35px_60px_-5px_rgba(0,0,0,0.3)] rounded-md w-80'>
                    <h1 className='text-center text-2xl mb-5 font-bold'>Iniciar Sesión</h1>
                    <form method="post" onSubmit={manejarLogin}>
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
                            type='submit'  
                            className="transition duration-300 ease-in-out hover:scale-105 mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Ingresar
                        </button>

                    </form>
                    <div className='mt-3'>
                        <span className='text-sky-500 text-sm'>Aún no tienes cuenta? Pincha </span> 
                        <Link href='' onClick={() => {irSignup();}} className='text-sm text-sky-500 font-bold hover:underline hover:decoration-solid'>
                            Aquí
                        </Link>
                    </div>
                

                    </div>
            </div>
        )}

        {isSignup && (
                <div className='md:animate-fade-down md:animate-once'>
                    <div className=' bg-white text-slate-600 p-10 mt-[200px] shadow-[0_35px_60px_-5px_rgba(0,0,0,0.3)] rounded-md w-80'>
                        <h1 className='text-center text-2xl mb-5 font-bold'>Registrate</h1>
                        <form method="post" onSubmit={manejarLogin}>
                            <div className='mb-4'>
                                <label htmlFor="nombreUsuario_reg">Nombre de Usuario: </label><br />
                                <input id='nombreUsuario_reg' type="text" placeholder='Ingrese un nombre de usuario'
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

        )}



    
    
    
    </main>
)
}

