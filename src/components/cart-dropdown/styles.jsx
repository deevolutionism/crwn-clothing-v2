import styled from "styled-components";
import {Link} from 'react-router-dom'
import { BaseButton, GoogleButton, GoogleSignInButton, InvertedButton } from "../button/styles"

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

export const EmptyMessage = styled.p`
  font-size: 18px;
  margin: 50px auto;
`
