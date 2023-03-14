import './styles.scss'
import Button from '../button'
import CartItem from '../cart-item'
import {CartContext} from '../../context/cart'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  console.log(cartItems)
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          Object.entries(cartItems).map( ([index, item]) => <CartItem key={item.name} product={item} />)
        }
      </div>
      <Link to="/checkout"><Button>Go To Cart</Button></Link>
    </div>
  )
}

export default CartDropdown