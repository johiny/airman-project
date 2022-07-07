import React from 'react'
import styled from 'styled-components'
import LoadingJ from './LoadingJ'
const ProductLoaderCard = ({className}) => {
  return (
    <div className={className}>
		<LoadingJ/>
    </div>
  )
}

export default styled(ProductLoaderCard)`
    background-color: #FFFFFF;
    box-shadow: -5px 5px 10px rgba(230, 230, 230, 0.2), 5px -5px 10px rgba(230, 230, 230, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(230, 230, 230, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(230, 230, 230, 0.5);
    border-radius: 10px;
    grid-column: span 1;
	display: flex;
	align-items: center;
	justify-content: center;
    @media only screen and (max-width: 1526px){
        grid-column: span 2;
    }
    @media only screen and (max-width: 906px){
        grid-column: span 3;
    }
    @media only screen and (max-width: 556px){
        grid-column: span 6;
    }
`