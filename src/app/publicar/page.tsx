'use client'

import Image from 'next/image'
import { useState } from 'react';
import NavBar from '../components/navbar';

export default function Publicar() {

let input_style = "font-mono resize-none transition duration-300 ease-in-out ring-[0.5px] ring-slate-500 w-full rounded-md p-1.5 outline-0 text-black text-sm placeholder:text-sm focus:ring-2 focus:ring-blue-300";
let boton_style = "transition duration-300 ease-in-out hover:scale-105 mt-5 flex lg:w-1/4 md:w-1/4 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";


return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-15">

    <NavBar></NavBar>
    
    <div className='text-black mt-[150px] p-10 md:w-1/2 sm:w-1/2'>
        <form method='POST'>
            <div className='mb-5'>
                <label htmlFor="asunto">Asunto de la publicacion</label>
                <input id='asunto' className={`${input_style}`} type="text" />
            </div>
            <div className=''>
                <label htmlFor="comentarios">Comentarios</label><br />
                <textarea name="comentarios" id="comentarios" cols={30} rows={10} className={`${input_style}`}></textarea>
            </div>
            <div className='flex justify-end'>
                <button className={`${boton_style}`}>
                    Publicar
                </button>
            </div>

        </form>


        


    </div>
    
    
    </main>
)
}