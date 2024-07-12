import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const ButtonAddContainer = styled.button `
display: flex;
justify-content: end;
align-items: center;
gap: 20px;
width: 100%;
background-color: #222;
border: none;
padding: 10px 30px;
color: white;
i{
  font-size: 50px;
  }
  & :hover {
    color: yellow;
    filter: drop-shadow(1px 1px 20px yellow);
  }




`

const BotonAdd = (props) => {

  return (
    <>
    <ButtonAddContainer>
    <i type="button" onClick={props.cambiarMostrar} className="bi bi-plus-square-dotted"></i>
    </ButtonAddContainer>
    </>
  )
}

export default BotonAdd