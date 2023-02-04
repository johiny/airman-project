import React from 'react';
import Slider from "../Components/Slider"
import Categories from "../Components/Categories";
import Products from "../Components/Products";
import Newsletter from '../Components/Newsletter';

function Home() {
  return <>
        <div className='mt-40'></div>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
    </>
  
}

export default Home
