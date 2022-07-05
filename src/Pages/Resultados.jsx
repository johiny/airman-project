import React from 'react'
import styled from 'styled-components'
import Logo from '../Components/Logo'
import ProductCardJ from '../Components/ProductCardJ'
import ProductsContainer from '../Components/ProductsContainer'
import SearchBar from '../Components/SearchBar'
const Resultados = ({className}) => {
  const productos = new Array(15).fill("producto")
  return (
    <div className={className}>
    <Logo/>
    <SearchBar/>
    <ProductsContainer>
    {productos.map((producto, index) => {
      return <ProductCardJ key={index}/>
    } )}
    </ProductsContainer>
    </div>
  )
}

export default styled(Resultados)`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    height: 100vh;
`