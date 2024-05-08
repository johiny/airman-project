import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomProducts, selectProductsData } from '../Redux/Slices/productsSlice';
import Product from './Product';



function Products() {

    const dispatch = useDispatch()
    const data = useSelector(selectProductsData) || []
    
    useEffect(() => {
      dispatch(fetchCustomProducts(`name[$like]=*t-shirt*`))
    }, []);

    return <div className='flex flex-wrap p-5 '>
        {
          data.map((product, index)=>(
            <Product item={product} key={index}/>
        ))
        }
      </div>;
  
}

export default Products
