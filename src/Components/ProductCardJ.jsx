import React, { useState } from 'react'
import styled from 'styled-components'
import cat404 from "../Media/404cat.png"
import { css } from 'styled-components'
import { useNavigate } from 'react-router-dom'
const ProductCardJ = ({className, price, image, name, id}) => {
    const navigate = useNavigate()
    const [imgError, setImgError] = useState(false)
  return (
    <div className={className} onClick={() => navigate(`/product/${id}`)}>
        <img src={imgError ? cat404 : image} onError={() => setImgError(true)}/>
        <div>
            <ProductName>{name.substring(0, 33)}</ProductName>
            <button>Add To Cart</button>
            <NormalPrice>${price}</NormalPrice>
            <DiscountPrice>$0000</DiscountPrice>
        </div>
    </div>
  )
}

const PriceStyle = css`
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    grid-column: 2/3;
    justify-self: end;
    margin-right: 1vh;
`
const NormalPrice = styled.span`
    ${PriceStyle}
    color: rgba(0, 0, 0, 0.2);
    align-self: end;
    margin-right: 2vh;
`
const DiscountPrice = styled.span`
    ${PriceStyle}
    color: #2A2550;   
`
const ProductName = styled.span`
    ${PriceStyle}
    font-size: 1.4vh;
    margin-right: 0;
    margin-left: 1vh;
    color: #2A2550;
    grid-column: 1/2;
    grid-row: 1/1;
`

export default styled(ProductCardJ)`
    background-color: #FFFFFF;
    box-shadow: -5px 5px 10px rgba(230, 230, 230, 0.2), 5px -5px 10px rgba(230, 230, 230, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(230, 230, 230, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(230, 230, 230, 0.5);
    border-radius: 10px;
    grid-column: span 1;
    :hover{
        cursor: pointer;
        background-color: #f9f6f6;
    }
    @media only screen and (max-width: 1526px){
        grid-column: span 2;
    }
    @media only screen and (max-width: 906px){
        grid-column: span 3;
    }
    @media only screen and (max-width: 556px){
        grid-column: span 6;
    }
    margin: 0vh 0vh;
    display: grid;
    grid-template-rows: 70% 30%;
    >div{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
    >img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
    button{
        grid-column: 1/1;
        grid-row: 2/3;
        align-self: end;
        background-color: #2A2550;
        box-shadow: -1px -1px 2px rgba(49, 43, 93, 0.3), 1px 1px 2px rgba(35, 31, 67, 0.5), inset 1px -1px 2px rgba(35, 31, 67, 0.2), inset -1px 1px 2px rgba(35, 31, 67, 0.2), inset 1px 1px 2px rgba(49, 43, 93, 0.9), inset -1px -1px 3px rgba(35, 31, 67, 0.9);
        border-radius: 2px;
        color: #FF7700;
        border: none;
        padding: 1vh 0vh;
        width: 70%;
        margin-left: 2vh;
        margin-bottom: 1.5vh;
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 17px;
        :hover{
            background-color: #FF7700;
            color: #2A2550;
            cursor: pointer;
            box-shadow: none
        }  
    }
`