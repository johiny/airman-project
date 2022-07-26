import React, { useEffect } from 'react'
import styled from 'styled-components'
import ProductCardJ from '../components/ProductCardJ'
import ProductsContainer from '../components/ProductsContainer'
import SearchBar from '../components/SearchBar'
import ProductLoaderCard from '../components/ProductLoaderCard'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomProducts, selectProductsData, fetchAllProducts, selectIsFirstFetch} from '../Redux/Slices/productsSlice'
const Resultados = ({className}) => {
     const {query} = useParams()
     const dispatch = useDispatch()
     const productos = useSelector((state) => selectProductsData(state))
     const isFirstFetch = useSelector(selectIsFirstFetch)
     useEffect(()=> {
          if(query != undefined && isFirstFetch)
          {
            dispatch(fetchCustomProducts(query))
          }
          else if (isFirstFetch){
            dispatch(fetchAllProducts())
          }
     },[query, dispatch])

  return (
    <div>
      <div className='mt-40'></div>
      <div className={className}>
        <SearchBar/>
        <ProductsContainer>
        {productos.map((producto) => {
          return <ProductCardJ producto={producto} key={producto.id}/>
        } )}
        {productos.length > 0 ? <ProductLoaderCard query={query}/> : null}
        </ProductsContainer>
      </div>
    </div>
    
  )
}

export default styled(Resultados)`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: minmax(min-content, max-content) 1fr ;
`