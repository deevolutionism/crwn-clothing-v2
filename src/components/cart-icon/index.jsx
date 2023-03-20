import { ShoppingIcon, CartIconContainer, ItemCount } from './styles.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { isCartOpenSelector, itemCountSelector, toggleCartDropdown } from '../../store/cart/index.js'

const CartIcon = () => {
  const dispatch = useDispatch()
  const itemCount = useSelector(itemCountSelector)
  const isCartOpen = useSelector(isCartOpenSelector)
  
  const toggleDropdown = () => {
    dispatch(toggleCartDropdown(!isCartOpen))
  }

  return (
    <CartIconContainer onClick={toggleDropdown}>
      <ShoppingIcon />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon