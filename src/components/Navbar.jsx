import{Badge} from "@material-ui/core";
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
function Navbar() {

    const [query, setQuery] = useState("");
    const style = "text-[14px] cursor-pointer ml-[25px] mobile:ml-[5px]";
    const navigate = useNavigate();
    const navigate2 = useNavigate();

    const handleSubmit = () => {
        navigate(`/search/name[$like]=*${query}*`)
    }

  return (
    <div className='navbar h-[60px] shadow-md  relative z-10'>
        <div className='wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0'>
           
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
                <div className='logo font-bold text-lg mobile:text-sm'><button class="border-solid border border-slate-400">AIRMAN-PROJECT</button></div>
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
                    <Badge badgeContent={2} color='primary'>
                        <ShoppingCartOutlined/>
                    </Badge>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar