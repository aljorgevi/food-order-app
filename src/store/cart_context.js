import { createContext } from 'react'

const CartContext = createContext({
  // the first two are state from reducer
  items: [],
  totalAmount: 0,
  // the two funcitons comes from the provider
  addItem: item => {},
  removeItem: id => {}
})

export default CartContext
