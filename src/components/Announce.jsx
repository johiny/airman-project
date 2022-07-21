import React from 'react';
import { useSelector } from 'react-redux';
import { selectStoreDiscount } from '../Redux/Slices/cartSlice';
function Announce() {
  const storeDiscount = useSelector(selectStoreDiscount)
  return (
    <div className='bg-[#2A2550] font-bold text-white flex items-center justify-center'>
        <h2>Date prisa, ahora tiene un {storeDiscount * 100} % de descuento</h2>
    </div>
  )
}

export default Announce