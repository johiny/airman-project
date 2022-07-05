import React from 'react'
import logo from '../Media/Logo.svg'
import styled from 'styled-components'
const Logo = ({className}) => {
  return (
    <img src={logo} className={className}/>
  )
}

export default styled(Logo)`
    grid-column-start: 1;
    grid-row-start: 1;
    margin: 2%;
`