import React from 'react'
import styled from "styled-components"
import { css } from 'styled-components'
const Confirmation = ({className}) => {
  return (
    <div className={className}>
        <ConfirmationBox>
            <ConfirmationTitle>La compra ha sido exitosa</ConfirmationTitle>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet consectetur aliquam impedit fugiat illum praesentium inventore esse assumenda odio aspernatur maxime cum, quis delectus. Minus commodi doloribus tempora quas?</p>
            <RedirectionMessage>
                Seras redirigido a la pagina principal en 3...
            </RedirectionMessage>
        </ConfirmationBox>    
    </div>
  )
}

const textStyle = css`
    font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 700;
`
const ConfirmationBox = styled.div`
    height: 70vh;
    width: 80vw;
    background-color: #FFFFFF;
    box-shadow: -5px 5px 10px rgba(230, 230, 230, 0.2), 5px -5px 10px rgba(230, 230, 230, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(230, 230, 230, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(230, 230, 230, 0.5);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    >*{
        ${textStyle}
    }
    >p{
        margin-top: 5%;
        margin-bottom: auto;
        font-size: large;
        margin-left: 10%;
        margin-right: 10%;
    }
    `
const ConfirmationTitle = styled.span`
        margin-top: 2%;
        padding: 1vh 7vh;
        background-color: rgba(255, 119, 0, 0.7);
        clip-path: polygon(0% 0%, 20% 100%,100% 100%, 80% 0%);
        font-size: larger;
`
const RedirectionMessage = styled.span`
        margin-top: auto;
        margin-bottom: 2vh;
    `
export default styled(Confirmation)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`