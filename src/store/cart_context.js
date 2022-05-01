import { createContext } from 'react'

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  // the first two are state from reducer
  // the two funcitons comes from the provider
  addItem: item => {},
  removeItem: id => {}
})

export default CartContext
