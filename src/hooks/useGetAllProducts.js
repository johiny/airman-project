import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    fetchAllProducts,
    selectFetchStatus,
    selectProductsData
} from '../features/products/productsSlice'

export function useGetAllProducts() {
    const dispatch = useDispatch()

    const status = useSelector((state) => selectFetchStatus(state))

    const data = useSelector((state) => selectProductsData(state))

    useEffect(() => {
        if(status === 'idle') {
            dispatch(fetchAllProducts())
        }
    }, [status, dispatch]);

    const isUninitialized = status === 'idle'
    const isLoading = status === 'pending' || status === 'idle'
    const isError = status === 'rejected'
    const isSuccess = status === 'fulfilled'

    return { data, isUninitialized, isLoading, isError, isSuccess }
}