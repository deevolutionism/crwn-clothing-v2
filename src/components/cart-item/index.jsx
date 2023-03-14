import { CartItemContainer, CartItemImg, CartItemDetail, CartItemName} from './styles.jsx'

const CartItem = ({product}) => {
  const {name, quantity, price, imageUrl} = product
  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt={name}/>
      <CartItemDetail>
        <CartItemName>{name}</CartItemName>
        <span className='price'>{quantity} x ${price}</span>
      </CartItemDetail>
    </CartItemContainer>
  )
}

export default CartItem