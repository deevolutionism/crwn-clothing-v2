import { ShoppingIcon, CartIconContainer, ItemCount } from './styles.jsx'
import { useContext } from 'react'
import { CartContext } from '../../context/cart'

const CartIcon = () => {
  const {isCartOpen, itemCount, toggleCartDropdown} = useContext(CartContext)
  
  const toggleDropdown = () => {
    // setCartOpen(!isCartOpen)
    console.log('iscartopen', toggleCartDropdown)
    toggleCartDropdown(!isCartOpen)
  }

  return (
    <CartIconContainer onClick={toggleDropdown}>
      <ShoppingIcon />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon