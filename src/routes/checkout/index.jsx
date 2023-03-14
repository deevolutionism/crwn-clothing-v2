import {useContext} from 'react'
import {CartContext} from '../../context/cart'
import CheckoutItem from '../../components/checkout-item'
import './styles.scss'

const Checkout = () => {
  const {cartItems, totalPrice} = useContext(CartContext)

  return (
    <div className="checkout-container">
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      <div>
      {
        Object.entries(cartItems).map( ([index, item]) => (
          <CheckoutItem key={item.name} product={item} />
        ))
      }
      </div>
      <span className='total'>total: ${totalPrice}</span>
    </div>
  )
}

export default Checkout