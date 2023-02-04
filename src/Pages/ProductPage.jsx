import Newsletter from '../components/Newsletter';
import Counter from '../components/Counter';
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { selectSpecificProduct } from '../Redux/Slices/productsSlice';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { add } from "../Redux/Slices/cartSlice"
import { fetchSingleProduct} from '../Redux/Slices/productsSlice';
const ProductPage = () => {
  const {id} = useParams()
  const product = useSelector((state) => selectSpecificProduct(state, id))
  const dispatch = useDispatch()
  useEffect(() => {
    if(product == undefined){
      dispatch(fetchSingleProduct(id))
    } 
  },[])
  const [quantity, setQuantity] = useState(1)

  // manejo de numero negativos
  useEffect(() => {
    if(quantity <= 0)
    {
      setQuantity(1)
    }
  },[quantity])
    // Style img
    const imgStyle = "rounded-lg shadow-lg w-[47%] h-[80%] ";

    return (
        <>
        <div className='mb-40 mobile:mb-40'></div>
        {product == undefined ? null :
        <div>
          <div className="flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3 py-7">
            <div className="flex-1 flex items-center justify-center">
              <img
                src={product.image}
                className={imgStyle}
                alt={`Producto  ${product.name}`}
              />
            </div>
            <div className="flex-[1.3] flex flex-col items-start  justify-items-center mt-10 mobile:items-center">
              <h1 className="title text-[30px] font-bold mobile:text-[20px]">
                  {product.name}
              </h1>
              <p className=" pr-[4rem] text-justify mt-7 mobile:pr-0">
                {product.description }
              </p>
              <div className="flex flex-col place-self-start mt-4">
                <p className="mt-7 mb-4 text-3xl">
                  Precio: <b>{product.price }</b>
                </p>
    
              
                <div className="mt-7">
                  <Counter quantity={quantity} setQuantity={setQuantity}/>
                </div>
              </div>
    
              <button className="btn mt-7" onClick={() => dispatch(add({...product, addQuantity : quantity}))}>
                Añadir al carrito
              </button>
            </div>
          </div>
          <Newsletter />
        </div>
}
      </>
    );
  };




export default ProductPage
