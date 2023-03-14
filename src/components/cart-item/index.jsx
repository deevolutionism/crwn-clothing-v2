import './styles.scss'

const CartItem = ({product}) => {
  console.log(product)
  const {name, quantity, price, imageUrl} = product
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={name}/>
      <div className='item-detail'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
      </div>
    </div>
  )
}

export default CartItem