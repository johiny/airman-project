import React from 'react';
import Counter from '../components/Counter';
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";
import {selectProductsCart} from "../Redux/Slices/cartSlice";


function CartProductList() {

    // Product Div Style
    const divProduct="flex w-[100%] h-auto items-center mobile:flex-col";

    // Price and Quantity
    const priceStyle = "flex flex-col justify-center items-center flex-auto mobile:mt-7 mobile:mb-7";

    // Description Product
    const descriptionProduct="flex items-start flex-col ml-6 h-auto justify-around";

    // Style img
    const imgStyle = "w-[7rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300";


    //Linear Div
    const linearDiv = "mt-7 mb-7 mobile:mt-0";

  return (
    <div>
        <div className={divProduct}>
            <div className='product flex self-start pl-5'>
                <img 
                className={imgStyle}
                src='https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-HARVEST-2_360x.jpg?v=1642616536'
                alt='product_img'
                />
                <div className={descriptionProduct}>
                    <p>
                        <b className='mr-2'>ID:</b> 987654321
                    </p>

                    <p>
                        <b className='mr-2'>Producto:</b> Camisa cileo
                    </p>

                </div>

            </div>

            <div className={priceStyle}>
                <Counter/>
                <p className='flex items-center justify-center text-4xl mt-3'>
                    <b>
                        $ 70
                    </b>
                </p>
            </div>
        </div>
        <hr className={linearDiv} />

    </div>
  )
}

export default CartProductList