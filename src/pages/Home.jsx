import React from 'react';
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from '../components/Newsletter';

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