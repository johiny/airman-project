import React from 'react'
import { useDispatch } from 'react-redux';
import {add, remove} from "../Redux/Slices/cartSlice"
function Counter({quantity, setQuantity}) {

    const btnStyle="bg-[#2A2550] text-white w-8 flex items-center justify-center cursor-pointer";

  return (
    <div>
        <div className='flex items-center justify-center text-2xl mb-5'>
            Cantidad
            <div className='ml-5 shadow-md flex'>
                <div className={btnStyle + ` rounded-l-md`} onClick={() => setQuantity(--quantity)}>
                    -
                </div>  

                <div className='w-8 flex items-center justify-center border-[1px] border-[#2A2550]'>
                    {quantity}
                </div>

                <div className={btnStyle + ` rounded-r-lg`}  onClick={() => setQuantity(++quantity)}>
                    +
                </div>

            </div>
        </div>
    </div>
  )
}

export default Counter