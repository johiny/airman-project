import React from 'react'
import {Routes} from "react-router-dom"
import useGoTop from '../hooks/useGoTop'
const WebRoutes = ({children}) => {
    useGoTop()
  return (
        <Routes>
            {children}
        </Routes>
  )
}

export default WebRoutes