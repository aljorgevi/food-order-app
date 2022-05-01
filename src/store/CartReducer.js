import { ADD_ITEM, REMOVE_ITEM } from './actions'

// this could be a service
function findIndex(array, id) {
  return array.findIndex(item => item.id === id)
}

//outside the component
const cartReducer = (state, action) => {
  if (action.type === ADD_ITEM) {
    // action.payload is the item object
    // eslint-disable-next-line no-unused-vars
    const { id, name, price, amount } = action.payload
    const { cart, totalAmount } = state

    const updatedTotalAmount = totalAmount + price * amount
    // HERE FIND THE OBJECT BY INDEX MAKE SENSE BECAUSE LINE 29 IS REMPLACED IN THE ARRAY. FINDING IT BY INDEX.
    const existingCartItemIndex = findIndex(cart, id)
    const existingCartItem = cart[existingCartItemIndex]
    let updatedItems

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + amount // the second amount comes from the action.payload
      }

      updatedItems = [...cart]
      // get the old item and overrwrite with the existing item with a new amount.
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      updatedItems = [...cart, action.payload]
    }

    return {
      cart: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  if (action.type === REMOVE_ITEM) {
    const id = action.payload
    const { cart, totalAmount } = state

    const exisintCartItemIndex = findIndex(cart, id)
    const existingItem = cart[exisintCartItemIndex]
    const updatedTotalAmount = totalAmount - existingItem.price
    let updatedItems

    if (existingItem.amount === 1) {
      updatedItems = cart.filter(item => item.id !== id)
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1
      }

      updatedItems = [...cart]
      updatedItems[exisintCartItemIndex] = updatedItem
    }

    return {
      cart: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cartReducer
