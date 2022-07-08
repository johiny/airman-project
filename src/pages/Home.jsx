import React from 'react';
import Announce from '../components/Announce';
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from '../components/Newsletter';

function Home() {
  return <div>
        <Announce/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
    </div>
  
}

export default Home