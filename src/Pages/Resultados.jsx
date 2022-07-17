import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProductCardJ from '../Components/ProductCardJ'
import ProductsContainer from '../Components/ProductsContainer'
import SearchBar from '../components/SearchBar'
import ProductLoaderCard from '../Components/ProductLoaderCard'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomProducts, selectProductsData} from '../Redux/Slices/productsSlice'
import { fetchAllProducts } from '../Redux/Slices/productsSlice'

const Resultados = ({className}) => {
     const {query} = useParams()
     const dispatch = useDispatch()
     const productos = useSelector((state) => selectProductsData(state))
     useEffect(()=> {
          if(query != undefined)
          {
            dispatch(fetchCustomProducts(query))
          }
          else{
            dispatch(fetchAllProducts())
          }
     },[query, dispatch])

  return (
    <div className={className}>
    <SearchBar/>
    <ProductsContainer>
    {productos.map((producto) => {
      return <ProductCardJ key={producto.id} name={producto.name} price={producto.price} image={producto.image} id={producto.id}/>
    } )}
    {productos.length > 0 ? <ProductLoaderCard/> : null}
    </ProductsContainer>
    </div>
  )
}

export default styled(Resultados)`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: minmax(min-content, max-content) 1fr ;
`