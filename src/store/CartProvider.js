import CartContext from './cart_context'

const CartProvider = ({ children }) => {
  const addItemToCartHandler = item => {}

  const removeItemFromCartHandler = id => {}
  // concrete context value, this is going to be update it overtime
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}

export default CartProvider
