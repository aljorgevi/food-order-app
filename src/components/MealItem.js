import { useContext } from 'react'
import CartContext from '../store/cart_context'
import styles from '../styles/MealItem.module.css'
import MealItemForm from './MealItemForm'

export default function MealItem(props) {
  const { id, name, description, price } = props
  const { addItem } = useContext(CartContext)
  const formatedPrice = `$${price.toFixed(2)}`

  const addToCartHandler = amount => {
    addItem({ id, name, price, amount })
  }

  return (
    <li className={styles.MealItem}>
      <div>
        <h3>{name}</h3>
        <div style={{ fontStyle: 'italic' }}>{description}</div>
        <div className={styles.MealItemPrice}>{formatedPrice}</div>
      </div>
      <div>
        <MealItemForm onAddtoCart={addToCartHandler} id={id} />
      </div>
    </li>
  )
}
