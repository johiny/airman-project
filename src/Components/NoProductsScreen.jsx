import React from 'react'
import styled from 'styled-components'
const NoProductsScreen = ({className}) => {
  return (
    <div className={`${className} min-w-fit col-span-6 flex justify-center my-36 pb-2`}>
        <h1 className='text-8xl text-stone-300 text-center'>No hay resultados<br/>para esta búsqueda<br/>{":("}</h1>
    </div>
  )
}

export default styled(NoProductsScreen)`
    h1{
        font-family: 'Roboto Mono';
    }
`