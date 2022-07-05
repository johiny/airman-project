import React from 'react'
import styled from 'styled-components'
import magnifyingGlass from '../Media/magnifying-glass-solid.svg'
const SearchBar = ({className}) => {
  return (
    <div className={className}>
        <input placeholder='Search'/>
        <img src={magnifyingGlass}/>
    </div>
  )
}

export default styled(SearchBar)`
    background: #FFFFFF;
    box-shadow: -5px 5px 10px rgba(230, 230, 230, 0.2), 5px -5px 10px rgba(230, 230, 230, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(230, 230, 230, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(230, 230, 230, 0.5);
    border-radius: 10px;
    grid-column: span 4;
    grid-row: 1/2;
    align-self: end;
    padding: 2vh 2vh;
    display: flex;
    justify-items: stretch;
    >img{
        width: 4.5vh;
        opacity: 0.2;
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