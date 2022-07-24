import React from 'react'
import logo from '../Media/logoairman.png'
import styled from 'styled-components'
const Logo = ({className}) => {
  return (
    <img src={logo} className={className}/>
  )
}

export default styled(Logo)`
  
`