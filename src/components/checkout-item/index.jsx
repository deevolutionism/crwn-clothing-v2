import './styles.scss'
import { removeItemFromCart, adjustItemQuantity } from '../../store/cart'
import { useDispatch } from 'react-redux'

const CheckoutItem = ({product}) => {
  const {name, quantity, price, imageUrl, id} = product
  const dispatch = useDispatch()


  const incrementQuantity = () => {
    dispatch(adjustItemQuantity({id, quantity: quantity + 1}))
  }

  const decrementQuantity = () => {
    if(quantity - 1 <= 0) {
      dispatch(removeItemFromCart({id}))
      return
    }
    dispatch(adjustItemQuantity({id, quantity: quantity - 1}))
  }

  const removeItem = () => {
    dispatch(removeItemFromCart({id}))
  }

  return (
    <div className='checkout-item-container'> 
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={decrementQuantity}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={incrementQuantity}>&#10095;</div>
      </span>
      <span>{price * quantity}</span>
      <span className='remove-button' onClick={removeItem}>&#10006;</span>
      <hr></hr>
    </div>
  )
}

export default CheckoutItem