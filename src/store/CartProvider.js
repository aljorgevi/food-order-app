import { useReducer } from 'react'
import CartContext from './cart_context'

const defautCartState = {
  items: [],
  totalAmount: 0
}

//outside the component
const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    // action.payload is the item object
    const { id, name, price, amount } = action.payload

    const updatedItems = state.items.concat(action.payload)
    const updatedTotalAmount = state.totalAmount + price * amount

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defautCartState
}

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defautCartState
  )

  const addItemToCartHandler = ({ id, name, price, amount }) => {
    dispatchCartAction({
      type: 'ADD_ITEM',
      payload: { id, name, price, amount }
    })
  }

  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id })
  }

  // concrete context value, this is going to be update it overtime
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}

export default CartProvider
