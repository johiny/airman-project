import Newsletter from '../components/Newsletter';
import React from 'react'
import { useNavigate } from "react-router-dom"
import {useSelector} from "react-redux"
import {selectProductsCart, selectQuantityOfProductsInCart} from "../Redux/Slices/cartSlice"
import CartProductRow from '../components/CartProductRow';
import CartResumenWindow from '../components/CartResumenWindow';
function Cart() {
    const productos = useSelector(selectProductsCart)
    const totalQuantity = useSelector(selectQuantityOfProductsInCart)

    // Product Div Style
    const divProduct ="flex w-[100%] h-auto items-center mobile:flex-col";

    //  Price and Quantity
    const priceStyle = "flex flex-col justify-center items-center flex-auto mobile:mt-7 mobile:mb-7";

    // Description Product
    const descriptionProduct =" flex items-start flex-col ml-6 h-auto justify-between";

    // Style img
    const imgStyle = "w-[7rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] esase-in duration-300";

    const navigate = useNavigate();
    const navigate2 = useNavigate();
    const navigate3 = useNavigate();

  return (
    <div>
        <div className='mb-20'></div>
        
       
        
        <div className="bg-indigo-600">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                <div className="w-0 flex-1 flex items-center justify-center">
                    <span className="flex p-2 rounded-lg bg-indigo-800">
                    
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                    </span>
                    <p className="ml-3 font-medium text-white truncate">
                    <span className="md:hidden mobile:text-sm">Aun no tienes nada en tu carrito<br/> porque no te animas y agregas algo! </span>
                    <span className="hidden md:inline text-2xl"> Aun no tienes nada en tu carrito porque no te animas y agregas algo! </span>
                    </p>
                </div>
                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                    <a href="#" className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50" onClick={() => navigate3("/search")}> Comprar </a>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                    <button type="button" className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                    <span className="sr-only">Dismiss</span>
                    </button>
                </div>
                </div>
            </div>
        </div>


        <div className='p-3'>
            <div className='flex justify-center text-5xl'>
                Carrito
            </div>
            <div className='flex item-center justify-between mt-4 mobile:flex-col'>
                <button className='btn bg-white text-[#2A2550] border-2 border-[#2A2550] hover:bg-white hover:text-[#2A2550] mt-0' onClick={() => navigate2("/search")} >Seguir Comprando</button>
                <div className='flex underline text-lg hover:cursor-pointer mobile:m-5'>
                    <p>
                        Total de objetos seleccionados: {`${totalQuantity || 0}`}
                    </p>
                </div>
                <button className='btn mt-0' onClick={() => navigate("/purchaseForm")}>Pagar</button>
            </div>

            {/* Central Div */}
            <div className='flex flex-row mt-7 mobile:flex-col'>
                <div className='flex flex-col flex-1 '>
                    {/* List of products*/}
                    {productos.map((producto) => <CartProductRow producto={producto} key={producto.id}/>)}
                </div>
                <CartResumenWindow/>
            </div>
        </div>
        <Newsletter/>
    </div>
  )
}

export default Cart