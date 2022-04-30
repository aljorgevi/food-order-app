import CartIcon from './CartIcon'
import styles from '../styles/HeaderCartButton.module.css'

export default function HeaderCartButton(props) {
  return (
    <button className={styles.HeaderCartButton}>
      <span className={styles.Icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.Badge}>3</span>
    </button>
  )
}
