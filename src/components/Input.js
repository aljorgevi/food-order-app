import styles from '../styles/Input.module.css'

export default function Input(props) {
  const { input, label } = props
  const { id } = input
  return (
    <div className={styles.Input}>
      <label htmlFor={id}>{label}</label>
      <input {...input} />
    </div>
  )
}
