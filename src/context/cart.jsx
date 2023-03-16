import { createContext, useReducer } from 'react'
import { createAction } from '../utils/reducer'

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => null,
  cartItems: {},
  addItemToCart: () => null,
  itemCount: 0,
  totalPrice: 0,
  removeItemById: () => null
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

export const CART_TYPES = {
  TOGGLE_CART: 'TOGGLE_CART',
  SET_TOTAL_PRICE: 'SET_TOTAL_PRICE',
  SET_ITEM_COUNT: 'SET_ITEM_COUNT',
  SET_CART_ITEMS: 'SET_CART_ITEMS'
}

const CartReducer = (state, action) => {
  const { type, payload } = action
  console.log('state', state)
  switch(type) {
    case CART_TYPES.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: payload
      }
    case CART_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      }
    default:
      throw new Error(`unhandled type ${type} in CartReducer`)
  }
}

const INIT_STATE = {
  isCartOpen: false,
  cartItems: {},
  itemCount: 0,
  totalPrice: 0,
}

export const CartProvider = ({children}) => {

  // [ state, dispatch ] = useReducer(init_state)
  const [ {isCartOpen, cartItems, itemCount, totalPrice}, dispatch ] = useReducer(CartReducer, INIT_STATE)

  const toggleCartDropdown = (isCartOpen) => {
    dispatch(createAction(
      CART_TYPES.TOGGLE_CART,
      {isCartOpen}
    ))
  }
  
  const addItemToCart = (productToAdd) => {
    const { id } = productToAdd;
    const cartItem = cartItems[id]

    const newCartItems = id in cartItems ?
      {
        ...cartItems,
        [id]: {
          ...cartItem, 
          quantity: cartItem.quantity + 1
        }
      } : {
        ...cartItems,
        [id]: {...productToAdd, quantity: 1}
      }

    updateCartItemsReducer(newCartItems)
  }

  const updateCartItemsReducer = (newCartItems) => {
    
    const newTotalPrice =  total(newCartItems)
    const newCartCount = countCartItems(newCartItems)
    
    dispatch(
      createAction(CART_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        totalPrice: newTotalPrice,
        itemCount: newCartCount
      })
    )
  }

  const adjustItemQuantity = ({id, quantity}) => {
    if(quantity < 1) return;
    const newCartItems = {
      ...cartItems,
      [id]: {
        ...cartItems[id],
        quantity: quantity
      }
    }
    updateCartItemsReducer(newCartItems)
  }

  const removeItemById = (id) => {
    let newCartItems = cartItems
    delete newCartItems[id]
    updateCartItemsReducer(newCartItems)
  }

  const total = (cartItems) => {
    const total = Object.entries(cartItems).reduce( (acc, [index, item]) => acc + (item.price * item.quantity), 0)
    return total
  }

  const countCartItems = (cartItems) => {
    const itemCount = Object.entries(cartItems).reduce( (acc, [index, item]) => acc + item.quantity, 0)
    return itemCount
  }
  
  const value = {
    isCartOpen, 
    cartItems, 
    addItemToCart, 
    itemCount, 
    adjustItemQuantity, 
    removeItemById,
    totalPrice,
    toggleCartDropdown
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}