import './styles.scss'
import Button from '../button'
import { BUTTON_TYPE_CLASSES } from '../button'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../store/cart'

const ProductCard = ({product}) => {
  const { name, price, imageUrl} = product;
  const dispatch = useDispatch(addItemToCart)

  const addProductToCart = () => {
    dispatch(addItemToCart(product))
  }

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to Cart</Button>
    </div>
  )
}

export default ProductCard