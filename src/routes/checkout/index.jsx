import { useSelector } from 'react-redux'
import { totalPriceSelector, cartItemsSelector } from '../../store/cart'
import './styles.scss'
import CheckoutItem from '../../components/checkout-item'

const Checkout = () => {
  const cartItems = useSelector(cartItemsSelector)
  const totalPrice = useSelector(totalPriceSelector)

  console.log(cartItems)

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
        Object.entries(cartItems).length > 0 ? (
          Object.entries(cartItems).map( ([index, item]) => (
            <CheckoutItem key={item.name} product={item} />
          ))
        ) : (
          <h2>Your Cart is Empty</h2>
        )
      }
      </div>
      <span className='total'>total: ${totalPrice}</span>
    </div>
  )
}

export default Checkout