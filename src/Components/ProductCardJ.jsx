import React from 'react'
import styled from 'styled-components'
const ProductCardJ = ({className}) => {
  return (
    <div className={className}>

    </div>
  )
}

export default styled(ProductCardJ)`
    background-color: #FFFFFF;
    box-shadow: -5px 5px 10px rgba(230, 230, 230, 0.2), 5px -5px 10px rgba(230, 230, 230, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(230, 230, 230, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(230, 230, 230, 0.5);
    border-radius: 10px;
    grid-column: span 1;
    grid-row: span 3;
    margin: 2vh 4vh;
`