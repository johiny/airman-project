import React from 'react'
import styled from 'styled-components'
const ProductsContainer = ({className, children}) => {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default styled(ProductsContainer)`
    display: grid;
    grid-row: 2/-1;
    grid-column: 1/-1;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 39vh;
    gap: 1vh;
`