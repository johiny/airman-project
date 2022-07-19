import Newsletter from '../components/Newsletter';
import React from 'react'
import { useNavigate } from "react-router-dom"
import {useSelector} from "react-redux"
import {selectProductsCart} from "../Redux/Slices/cartSlice"
import CartProductList from '../components/CartProductList';
import CartRowTest from "../components/cartRowTest"
function Cart() {
    const productos = useSelector((state) => selectProductsCart(state))
    console.log(productos)
    // Margin Resumen
    const resumenStyle="flex justify-between mt-3 w-[100%]";

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

  return (
    <div>
        <div className='p-3'>

            <div className='flex justify-center text-5xl'>
                Carrito
            </div>

            <div className='flex item-center justify-between mt-4 mobile:flex-col'>
                <button className='btn bg-white text-[#2A2550] border-2 border-[#2A2550] hover:bg-white mt-0' onClick={() => navigate2("/search")} >seguir comprando</button>
                
                <div className='flex underline text-lg hover:cursor-pointer mobile:m-5'>
                    <p>
                        Objetos seleccionados: {`${productos.length || 0}`}
                    </p>
                    <p className='ml-5'>
                        Elemento de la lista blanca: 0
                    </p>
                </div>

                <button className='btn mt-0' onClick={() => navigate("/purchaseForm")}>Pagar</button>
            </div>

            {/* Central Div */}
            <div className='flex flex-row mt-7 mobile:flex-col'>

                <div className='flex flex-col flex-1 '>

                    {/* List of products div */}

                    <CartProductList/>
                    {productos.map((producto) => <CartRowTest producto={producto}/>)}
                </div>   
                <div className=' p-5 flex-[0.4] w-auto h-[40vh] border-2 border-[#2A2550] rounded-md shadow-lg flex flex-col  items-center mobile:mb-6'>
                    <h1 className='text-[2rem]'>Resumen</h1>

                    <div className={resumenStyle}>
                        <p>Subtotal</p>
                        <p>$150</p>
                    </div>

                    <div className={resumenStyle}>
                        <p>Envio</p>
                        <p>$40</p>
                    </div>

                    <div className={resumenStyle}>
                        <p>Descuento de Envio</p>
                        <p>-$10</p>
                    </div>

                    <div className={resumenStyle + ` text-3xl font-bold`}>
                        <p>Total</p>
                        <p>$150</p>
                    </div>

                </div>

            </div>
        </div>

        <Newsletter/>
    </div>
  )
}

export default Cart