import './styles.jsx'
import Button from '../button'
import CartItem from '../cart-item'
import {CartContext} from '../../context/cart'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartDropDownContainer, CartItemsContainer, EmptyMessage } from './styles.jsx'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {
          Object.entries(cartItems).length > 0 ? 
            Object.entries(cartItems).map( ([index, item]) => <CartItem key={item.name} product={item} />) :
            <EmptyMessage>No Items in Cart</EmptyMessage>
        }
      </CartItemsContainer>
      <Button onClick={goToCheckoutHandler}>Go To Cart</Button>
    </CartDropDownContainer>
  )
}

export default CartDropdown