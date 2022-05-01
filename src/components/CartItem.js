import styles from '../styles/CartItem.module.css'

const CartItem = props => {
  const { name, amount, onAdd, onRemove } = props

  const price = `$${props.price.toFixed(2)}`

  return (
    <li className={styles.CartItem}>
      <div>
        <h2>{name}</h2>
        <div className={styles.Summary}>
          <span className={styles.Price}>{price}</span>
          <span className={styles.Amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.Actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  )
}

export default CartItem
