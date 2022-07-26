import React from 'react';
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { fetchCustomProducts } from '../Redux/Slices/productsSlice'
function Category({category}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const buttonHandle = () => {
        dispatch(fetchCustomProducts(category.query))
        navigate(`/search/${category.query}`)
    }

  return <div className='flex-1 m-2 shadow-lg rounded-md overflow-hidden relative'>
            <img src={category.src}  alt='category_image' className='w-[100%]' />
            <div className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col'>
                <h2 className='text-white font-black text-[30px]'>{category.title}</h2>
                <button className='btn' onClick={buttonHandle}>Ver más</button>
            </div>           
        </div>;
  
}

export default Category