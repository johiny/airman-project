import React from 'react';
import Counter from './Counter';
import error404 from "../Media/404cat.png"
import { useState } from 'react';
import CartCounter from './CartCounter';
function CartProductRow({producto}) {
    const [image, setImage] = useState(producto.image)
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
                src={image}
                alt='product_img'
                onError={() => setImage(error404)}
                />
                <div className={descriptionProduct}>
                    <p>
                        <b className='mr-2'>ID:</b> {producto.id}
                    </p>

                    <p className='max-w-xs'>
                        <b className='mr-2'>Producto:</b> {producto.name}
                    </p>
                </div>
            </div>
            <div className={priceStyle}>
                <CartCounter producto={producto}/>
                <p className='flex items-center justify-center text-4xl mt-3'>
                    <b>
                        {producto.price * producto.quantity}
                    </b>
                </p>
            </div>
        </div>
        <hr className={linearDiv} />
    </div>
  )
}

export default CartProductRow