import './styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/cart'

const CartIcon = () => {
  const {isCartOpen, setCartOpen} = useContext(CartContext)
  
  const toggleDropdown = () => {
    setCartOpen(!isCartOpen)
  }

  return (
    <div className='cart-icon-container' onClick={toggleDropdown}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon