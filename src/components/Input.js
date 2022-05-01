import { forwardRef } from 'react'
import styles from '../styles/Input.module.css'

const Input = forwardRef((props, ref) => {
  const { input, label } = props
  const { id } = input
  return (
    <div className={styles.Input}>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  )
})

export default Input
