import Newsletter from '../components/Newsletter';
import React from 'react'
import { useNavigate } from "react-router-dom"
import {useSelector} from "react-redux"
import {selectProductsCart, selectQuantityOfProductsInCart} from "../Redux/Slices/cartSlice"
import CartProductRow from '../components/CartProductRow';
import CartResumenWindow from '../components/CartResumenWindow';
import CardAlert from '../Components/CardAlert';

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
  return (
    <div className='mt-20'><br/>
        
        { totalQuantity > 0 ? null : <CardAlert/> }
        <div className='p-3'>
            <div className='flex justify-center text-5xl'>
                Carrito
            </div>
            <div className='flex item-center justify-between mt-4 mobile:flex-col'>
                {
                    totalQuantity > 0 ?
                    <button className='btn bg-white text-[#2A2550] border-2 border-[#2A2550] hover:bg-white hover:text-[#2A2550] mt-0' onClick={() => navigate2("/search")} >Seguir Comprando</button>
                    :
                    <button className='btn bg-white text-[#2A2550] border-2 border-[#2A2550] hover:bg-white hover:text-[#2A2550] mt-0' onClick={() => navigate2("/")} >Inicio</button>
                }
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