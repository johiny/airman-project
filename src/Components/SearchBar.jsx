import React from 'react'
import styled from 'styled-components'
import magnifyingGlass from '../Media/magnifying-glass-solid.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchCustomProducts } from '../Redux/Slices/productsSlice'
const SearchBar = ({className}) => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = () => {
        dispatch(fetchCustomProducts(`name[$like]=*${search}*`))
        navigate(`/search/name[$like]=*${search}*`)
    }
  return (
    <div className={className}>
        <input placeholder='Search' onKeyUp={(e) => e.key === "Enter" ? handleSubmit() : null} onChange={(e) => setSearch(e.target.value)} onSubmit={handleSubmit}/>
        <img src={magnifyingGlass} onClick={handleSubmit}/>
    </div>  
  )
}

export default styled(SearchBar)`
    background: #FFFFFF;
    box-shadow: -5px 5px 10px rgba(230, 230, 230, 0.2), 5px -5px 10px rgba(230, 230, 230, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(230, 230, 230, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(230, 230, 230, 0.5);
    border-radius: 10px;
    grid-column:  2/6;
    align-self: center;
    grid-row: 1/2;
    margin: 2vh 0vh;
    padding: 2vh 2vh;
    display: flex;
    justify-items: stretch;
    >img{
        width: 4.5vh;
        opacity: 0.2;
        :hover{
            opacity: 0.5;
            cursor: pointer;
        }
    }
    >input,::placeholder{
        font-family: 'Roboto Mono', monospace;
            font-style: normal;
            font-weight: 700;
            font-size: 25px;
            line-height: 33px;
            color: rgba(0, 0, 0, 0.2);
    }
    >input{
        width: 100%;
        border: none;
        padding: 1vh;
        :focus{
            outline: none;
        }
        ::placeholder{
            color: rgba(0, 0, 0, 0.2);
        }
    }
`