import { useReducer } from 'react'
import CartContext from './cart_context'
import reducer, { initialState } from './CartReducer'
import { ADD_ITEM, REMOVE_ITEM } from './actions'

const CartProvider = ({ children }) => {
  const [state, dispatchCartAction] = useReducer(reducer, initialState)

  const addItemToCartHandler = ({ id, name, price, amount }) => {
    dispatchCartAction({
      type: ADD_ITEM,
      payload: { id, name, price, amount }
    })
  }

  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: REMOVE_ITEM, payload: id })
  }

  return (
    <CartContext.Provider
      // concrete context value, this is going to be update it overtime
      value={{
        ...state,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
