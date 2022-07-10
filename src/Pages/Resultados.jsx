import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Logo from '../Components/Logo'
import ProductCardJ from '../Components/ProductCardJ'
import ProductsContainer from '../Components/ProductsContainer'
import SearchBar from '../Components/SearchBar'
import ProductLoaderCard from '../Components/ProductLoaderCard'
const Resultados = ({className}) => {
  const [productos,setProductos] = useState([])
  useEffect(() => {
    const get_products = async () => {
      let response = await fetch("https://api-playground-test.herokuapp.com/products?$limit=15")
      response =  await response.json()
      setProductos(response.data)
    }
    get_products()
  },[])

  return (
    <div className={className}>
    <Logo/>
    <SearchBar/>
    <ProductsContainer>
    {productos.map((producto) => {
      return <ProductCardJ key={producto.upc} name={producto.name} price={producto.price} image={producto.image}/>
    } )}
    {productos.length > 0 ? <ProductLoaderCard/> : null}
    </ProductsContainer>
    </div>
  )
}

export default styled(Resultados)`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
`