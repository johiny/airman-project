import React from 'react'
import { useSelector } from 'react-redux';
import { selectTotalPriceOfProductsInCart, selectShippingPrice, selectStoreDiscount } from '../Redux/Slices/cartSlice';
const CartResumenWindow = () => {
    const total = useSelector(selectTotalPriceOfProductsInCart)
    const resumenStyle="flex justify-between mt-3 w-[100%]";
    const discount = useSelector(selectStoreDiscount)
    const shipmentprice = useSelector(selectShippingPrice)
  return (
    <div className=' p-5 flex-[0.4] w-auto h-[40vh] border-2 border-[#2A2550] rounded-md shadow-lg flex flex-col  items-center mobile:mb-6'>
        <h1 className='text-[2rem]'>Resumen</h1>
        <div className={resumenStyle}>
            <p>Subtotal</p>
            <p>$ {Math.round(total * 10) / 10}</p>
        </div>
        <div className={resumenStyle}>
            <p>Envio</p>
            <p>$ {shipmentprice}</p>
        </div>
        {total == 0? null : <div className={resumenStyle}>
            <p>Descuento Promocional</p>
            <p>- {discount * 100}%</p>
        </div>}
        <div className={resumenStyle + ` text-3xl font-bold`}>
            <p>Total</p>
            <p>$ {Math.round(((total + shipmentprice) - ((total + shipmentprice) * discount)) * 10) / 10}</p>
        </div>
        {total == 0? 
        <div className={resumenStyle + ` text-2xl font-bold`}>
            <p>Aun no tienes nada en tu carrito<br/> porque no te animas y agregas algo!</p>
        </div> : null }
    </div>
  )
}

export default CartResumenWindow