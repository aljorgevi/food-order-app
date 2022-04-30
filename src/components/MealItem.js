import styles from '../styles/MealItem.module.css'

export default function MealItem(props) {
  const { name, description, price } = props
  const formatedPrice = `$${price.toFixed(2)}`

  return (
    <li className={styles.MealItem}>
      <div>
        <h3>{name}</h3>
        <div style={{ fontStyle: 'italic' }}>{description}</div>
        <div className={styles.MealItemPrice}>{formatedPrice}</div>
      </div>
      <div></div>
    </li>
  )
}
