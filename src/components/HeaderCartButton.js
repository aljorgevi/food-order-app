import { useContext } from 'react'
import CartContext from '../store/cart_context'
import CartIcon from './CartIcon'
import styles from '../styles/HeaderCartButton.module.css'

export default function HeaderCartButton(props) {
  const { onShowCart } = props
  const { cart } = useContext(CartContext)

  const numberOfCartItems = cart.reduce((acc, item) => {
    return acc + item.amount
  }, 0)

  return (
    <button className={styles.HeaderCartButton} onClick={onShowCart}>
      <span className={styles.Icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.Badge}>{numberOfCartItems}</span>
    </button>
  )
}
