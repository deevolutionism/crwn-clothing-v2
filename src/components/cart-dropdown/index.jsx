import './styles.jsx'
import Button from '../button'
import CartItem from '../cart-item'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CartDropDownContainer, CartItemsContainer, EmptyMessage } from './styles.jsx'
import { cartItemsSelector } from '../../store/cart/index.js'

const CartDropdown = () => {
  const cartItems = useSelector(cartItemsSelector)
  
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