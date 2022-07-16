import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProductCardJ from '../Components/ProductCardJ'
import ProductsContainer from '../Components/ProductsContainer'
import SearchBar from '../components/SearchBar'
import ProductLoaderCard from '../Components/ProductLoaderCard'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomProducts, selectProductsData, selectFetchStatus } from '../features/products/productsSlice'
import { useGetAllProducts } from '../hooks/useGetAllProducts'

const Resultados = ({className}) => {
     const {query} = useParams()
    //  const productsData = useGetAllProducts()
    //  const productos = productsData?.data
     const dispatch = useDispatch()
     const productos = useSelector((state) => selectProductsData(state))
     const status = useSelector((state) => selectFetchStatus(state))
     useEffect(()=> {
          if(query != undefined && status === "idle")
          {
            console.log(query)
            dispatch(fetchCustomProducts(query))
          }
     },[query, dispatch, status])

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