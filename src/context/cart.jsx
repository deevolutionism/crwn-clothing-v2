import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => null,
  cartItems: {},
  addItemToCart: () => null,
  itemCount: 0,
  totalPrice: 0
})

/*
 cartItem:
 {
  id,
  name,
  price,
  imageUrl,
  quantity
 }
*/

export const CartProvider = ({children}) => {
  const [isCartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState({})
  const [itemCount, setItemCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  
  const addItemToCart = (productToAdd) => {
    const { id } = productToAdd;
    const cartItem = cartItems[id]
    // setItemCount(itemCount + 1)
    if(cartItem) {
      setCartItems({
        ...cartItems,
        [cartItem.id]: {
          ...cartItem, 
          quantity: cartItem.quantity + 1
        }
      })
    } else {
      setCartItems({
        ...cartItems,
        [productToAdd.id]: {...productToAdd, quantity: 1}
      })
    }
    
  }

  const adjustQuantity = ({id, quantity}) => {
    if(quantity < 1) return;
    setCartItems({
      ...cartItems,
      [id]: {
        ...cartItems[id],
        quantity: quantity
      }
    })
  }

  const removeById = (id) => {
    let items = cartItems
    delete items[id]
    setCartItems({...items})
  }

  const total = (cartItems) => {
    const total = Object.entries(cartItems).reduce( (acc, [index, item]) => acc + (item.price * item.quantity), 0)
    setTotalPrice(total)
  }

  const countItems = (cartItems) => {
    const total = Object.entries(cartItems).reduce( (acc, [index, item]) => acc + item.quantity, 0)
    setItemCount(total)
  }

  useEffect(() => {
    countItems(cartItems)
    total(cartItems)
  }, [cartItems])
  
  const value = {
    isCartOpen, 
    setCartOpen, 
    cartItems, 
    addItemToCart, 
    itemCount, 
    adjustQuantity, 
    removeById,
    totalPrice
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}