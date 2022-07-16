import Newsletter from '../components/Newsletter';
import Counter from '../components/Counter';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectSpecificProduct } from '../Redux/Slices/productsSlice';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { add } from "../Redux/Slices/cartSlice"
const ProductPage = () => {
  const {id} = useParams()
  const product = useSelector((state) => selectSpecificProduct(state, id))
  const dispatch = useDispatch()
    // Style img
    const imgStyle = "rounded-lg shadow-lg hover:scale-[1.1] esase-in duration-300";

    const colorSelect="w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#2A2550]";

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
            <h1 className="title text-[40px] mobile:text-[30px]">
                {product.name}
            </h1>
            <p className=" pr-[4rem] text-justify mt-4 mobile:pr-0">
              {product.description}
            </p>
            <div className="flex flex-col place-self-start">
              <p className="mt-7 text-3xl">
                Precio: <b>{product.price}</b>
              </p>
  
              <div className=" flex mt-7 text-2xl">
                Colores
                <div className={colorSelect + ` bg-red-600` }></div>
                <div className={colorSelect + ` bg-blue-600`}></div>
                <div className={colorSelect + ` bg-yellow-400`}></div>
              </div>
  
              <div className="mt-7 text-2xl">
                Talla
                <select className="border-[2px] border-silver rounded-md ml-5">
                  <option selected>Seleccione</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>XL</option>
                </select>
              </div>
              <div className="mt-7">
                <Counter />
              </div>
            </div>
  
            <button className="btn" onClick={() => dispatch(add(product))}>
              Añadir al carrito
            </button>
          </div>
        </div>
        <Newsletter />
      </div>
    );
  };




export default ProductPage