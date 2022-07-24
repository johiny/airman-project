import{Badge} from "@material-ui/core";
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import {selectQuantityOfProductsInCart} from "../Redux/Slices/cartSlice"
import { useDispatch } from 'react-redux'
import { fetchCustomProducts } from '../Redux/Slices/productsSlice';
import Announce from '../Components/Announce';

function Navbar() {

    const [query, setQuery] = useState("");
    const style = "text-[14px] cursor-pointer ml-[25px] mobile:ml-[5px]";
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const productsInCart = useSelector(selectQuantityOfProductsInCart)

    const handleSubmit = () => {
        dispatch(fetchCustomProducts(`name[$like]=*${query}*`))
        navigate(`/search/name[$like]=*${query}*`)
    }

  return (
    <div className="relative">
        <div className="fixed top-0 left-0 right-0 z-10 mobile:pl-0 mobile:pr-0">
            <Announce/>
            <div className='navbar h-[60px] shadow-md bg-white'>
                <div className='wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center'>
                
                    <div className='left flex flex-1 items-center'>
                        {/* <div className='language cursor-pointer text-[16px] mobile:hidden'>En</div> */}
                        
                        {/* Search Input */}
                        <div className='searchInput flex border-[2px]
                            border-solid border-lighgrey rounded-md items-center ml-[10px] p-[5px]
                            focus-within:border-[#2A2550] transition-all'>
                            <input className='input outline-none mobile:w-[50px]'
                            type='text' placeholder="Buscar" onKeyUp={e => e.key === "Enter" ? handleSubmit() : null} onChange={e => setQuery(e.target.value)} onSubmit={handleSubmit} />
                            <Search className='text-[#2A2550]' style={{fontSize:'16px'}} onClick={handleSubmit} />
                        </div>

                    </div>

                    {/* Logo */}
                    <div className='center flex-1 text-center mobile:ml-6' onClick={() => navigate("/")}>
                        <div className='logo font-bold text-lg mobile:text-sm'><button>AIRMAN-PROJECT</button></div>
                    </div>
                    
                    {/* Right Div */}
                    <div className='right flex flex-1 items-center justify-end mobile:flex-[2] mobile:justify-center'>
                        {/* <div className={style}>
                            Register
                        </div>
                        <div className={style}>
                            Sign In
                        </div> */}

                        <div className={style} onClick={() => navigate("/cart")}>
                            <Badge overlap="rectangular" badgeContent={productsInCart} color='primary'>
                                <ShoppingCartOutlined/>
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar