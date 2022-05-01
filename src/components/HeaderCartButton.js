import { useContext, useEffect, useState } from 'react'
import CartContext from '../store/cart_context'
import CartIcon from './CartIcon'
import styles from '../styles/HeaderCartButton.module.css'

export default function HeaderCartButton(props) {
  const { onShowCart } = props
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const { cart } = useContext(CartContext)

  const numberOfCartItems = cart.reduce((acc, item) => {
    return acc + item.amount
  }, 0)

  const btnStyles = `${styles.HeaderCartButton} ${
    btnIsHighlighted ? styles.bump : ''
  }`

  useEffect(() => {
    if (cart.length === 0) return

    setBtnIsHighlighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [cart])

  return (
    <button className={btnStyles} onClick={onShowCart}>
      <span className={styles.Icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.Badge}>{numberOfCartItems}</span>
    </button>
  )
}
