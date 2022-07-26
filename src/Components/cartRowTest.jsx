import React from 'react'
import { useDispatch } from 'react-redux'
import {remove, add} from "../Redux/Slices/cartSlice"
const CartRowTest = ({producto}) => {
    const dispatch = useDispatch()
  return (
    <div>
         <h5>{producto.name}</h5>
         <h4>{producto.quantity}</h4>
        <button onClick={() => dispatch(remove(producto.id))}>-</button> cart testing <button onClick={() => dispatch(add(producto))}>+</button>
    </div> 
  )
}

export default CartRowTest