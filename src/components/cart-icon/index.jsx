import { ShoppingIcon, CartIconContainer, ItemCount } from './styles.jsx'
import { useContext } from 'react'
import { CartContext } from '../../context/cart'

const CartIcon = () => {
  const {isCartOpen, setCartOpen, itemCount} = useContext(CartContext)
  
  const toggleDropdown = () => {
    setCartOpen(!isCartOpen)
  }

  return (
    <CartIconContainer onClick={toggleDropdown}>
      <ShoppingIcon />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon