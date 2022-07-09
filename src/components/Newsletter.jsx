import React from 'react';
import {Send} from '@material-ui/icons';
function Newsletter() {
  return (
    <div className='flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#E04D01] '>
        <h1 className='text-[50px] font-bold text-white'>
            Boletin Informativo
        </h1>

        <h2 className='text-[20px] mt-2 text-white'>
            Siempre en contacto con nosotros, para sus productos favoritos.
        </h2>

        <div className='flex mt-[3rem] items-center justify-between min-w-[30rem] min-h-[2rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden'>
            <input
            type="email"
            placeholder='Correo'
            className='border-none pl-[20px] flex-[7] outline-none'
            />

            <button className='bg-[#2A2550] flex-1 h-[100%]'>
                <Send className="text-white" />
            </button>

        </div>


    </div>
  )
}

export default Newsletter