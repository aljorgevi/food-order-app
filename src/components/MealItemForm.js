import { useRef, useState } from 'react'
import styles from '../styles/MealItemForm.module.css'
import Input from './Input'

export default function MealItemForm(props) {
  const { id, onAddtoCart } = props
  const [amountIsValid, setAmountIsValid] = useState(true)
  const inputRef = useRef(null)

  const submitHandler = event => {
    event.preventDefault()

    //this value is always a string, event if the input has type Number
    const enteredAmount = inputRef.current.value
    const enteredAmountNumber = +enteredAmount

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return
    }

    onAddtoCart(enteredAmountNumber)
  }

  return (
    <form className={styles.MealItemForm} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label='Amount'
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  )
}
