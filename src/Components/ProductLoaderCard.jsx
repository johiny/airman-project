import React, {useRef,useEffect} from 'react'
import styled from 'styled-components'
import LoadingJ from './LoadingJ'
import { useIntersection } from 'react-use'
import { useSelector } from 'react-redux'
import { selectTotalProductsCurrentQuery, selectTotalProductsInStore, fetchMoreProducts } from '../Redux/Slices/productsSlice'
import { useDispatch } from 'react-redux'

const ProductLoaderCard = ({className, query}) => {
  const productsStore = useSelector(selectTotalProductsInStore)
  const productsApi = useSelector(selectTotalProductsCurrentQuery)
  const cardLoaderRef = useRef(null)
  const dispatch = useDispatch()
  const intersection = useIntersection(cardLoaderRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  })
  useEffect(() => {
    if(intersection?.isIntersecting && productsStore < productsApi){
      dispatch(fetchMoreProducts(`${query || ""}&$skip=${productsStore}`))
    }
  },[intersection?.isIntersecting, productsStore, productsApi])

  return (
    <div className={className} ref={cardLoaderRef}>
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