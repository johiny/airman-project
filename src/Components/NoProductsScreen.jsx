import React from 'react'
import styled from 'styled-components'
const NoProductsScreen = ({className}) => {
  return (
    <div className={`${className} min-w-fit col-span-6 row-span-2 flex items-start justify-center`}>
        <h1 className='text-8xl text-stone-300 text-center'>No hay resultados<br/>para esta búsqueda<br/>{":("}</h1>
    </div>
  )
}

export default styled(NoProductsScreen)`
    h1{
        margin-top: 12vh;
        font-family: 'Roboto Mono';
    }
`