import Newsletter from '../components/Newsletter';
import Counter from '../components/Counter';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectSpecificProduct } from '../Redux/Slices/productsSlice';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { add } from "../Redux/Slices/cartSlice"
const ProductPage = () => {
  const {id} = useParams()
  const product = useSelector((state) => selectSpecificProduct(state, id))
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
    // Style img
    const imgStyle = "rounded-lg shadow-lg hover:scale-[1.1] esase-in duration-300";

    return (
      <div>
        <div className="flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3 mb-5">
          <div className="flex-1 flex items-center justify-center">
            <img
              src={product.image}
              className={imgStyle}
              alt="product_image"
            />
          </div>
          <div className="flex-[1.3] flex flex-col items-start  justify-items-center mt-10 mobile:items-center">
            <h1 className="title text-[30px] font-bold mobile:text-[20px]">
                {product.name}
            </h1>
            <p className=" pr-[4rem] text-justify mt-7 mobile:pr-0">
              {product.description}
            </p>
            <div className="flex flex-col place-self-start mt-4">
              <p className="mt-7 mb-4 text-3xl">
                Precio: <b>{product.price}</b>
              </p>
  
             
              <div className="mt-7">
                <Counter quantity={quantity} setQuantity={setQuantity}/>
              </div>
            </div>
  
            <button className="btn mt-7" onClick={() => dispatch(add({...product, quantity : quantity}))}>
              Añadir al carrito
            </button>
          </div>
        </div>
        <Newsletter />
      </div>
    );
  };




export default ProductPage