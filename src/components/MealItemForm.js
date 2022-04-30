import styles from '../styles/MealItemForm.module.css'
import Input from './Input'

export default function MealItemForm(props) {
  return (
    <form className={styles.MealItemForm}>
      <Input
        label='Amount'
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button>+ Add</button>
    </form>
  )
}
