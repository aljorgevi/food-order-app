import { useContext } from 'react'
import CartContext from '../store/cart_context'
import Modal from './Modal'
import CartItem from './CartItem'
import styles from '../styles/Cart.module.css'

/*
const CART_ITEMS = [
  { id: 'c1', name: 'Sushi', price: 22.99, amount: 2 },
  { id: 'c2', name: 'Schnitzel', price: 16.5, amount: 1 },
  { id: 'c3', name: 'Barbecue Burger', price: 12.99, amount: 5 },
  { id: 'c4', name: 'Green Bowl', price: 18.99, amount: 2 }
]
*/
export default function Cart(props) {
  const { onClose } = props
  const { items, totalAmount } = useContext(CartContext)

  const reformattedTotalAmount = `$${totalAmount.toFixed(2)}`
  const hasItems = items.length > 0

  const cartItemRemoveHandler = id => {}

  const cartItemAddHandler = item => {}

  return (
    <Modal onClose={onClose}>
      <ul className={styles.Cart}>
        {items.map(item => {
          const { id, name, price, amount } = item

          return (
            <CartItem
              key={id}
              name={name}
              amount={amount}
              price={price}
              // This is important: we use bind to pass the item to the handler. This is because the handler is a function that takes one argument.
              // And within the CartItem component we're not passing the arguments...
              // we pre-condig these function to recibe those parameter.
              onRemove={cartItemRemoveHandler.bind(null, id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          )
        })}
      </ul>
      <div className={styles.CartTotal}>
        <span>Total Amount</span>
        <span>{reformattedTotalAmount}</span>
      </div>
      <div className={styles.CartActions}>
        <button onClick={onClose} style={{ color: '#8a2b06' }}>
          Close
        </button>
        {hasItems && (
          <button style={{ color: 'white', backgroundColor: '#8a2b06' }}>
            Order
          </button>
        )}
      </div>
    </Modal>
  )
}
