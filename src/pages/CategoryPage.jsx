import Announce from '../components/Announce';
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

import React from 'react'

function CategoryPage() {
    
    const filterStyle='ml-3 border-2 border-silver';

  return (
    <div>
        <Announce/>
        <Navbar/>

        <div className='flex flex-col p-5'>
            <h1 className='text-[30px]'>Ropa de Hombre</h1>
            <div className='flex items-center justify-between mt-3'>
                <div className='flex'>
                    <p>Filtrado por</p>
                    <select className={filterStyle} >
                        <option selected disabled>Talla</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>

                    <select className={filterStyle}>
                        <option selected disabled>Color</option>
                        <option>Yellow</option>
                        <option>Blue</option>
                        <option>Red</option>
                    </select>
                </div>

                <div className='flex'>
                    <p>Ordenar por</p>

                    <select className={filterStyle}>
                        <option>Newset (first) </option>
                        <option>Oldest (first) </option>
                        <option>Price (Asc) </option>
                        <option>Price (Des) </option>
                    </select>
                </div>
            </div>
        </div>

        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default CategoryPage