import meals from '../assets/meals.jpeg'
import styles from '../styles/Header.module.css'
import HeaderCartButton from './HeaderCartButton'

export default function Header(props) {
  const { onShowCart } = props

  return (
    <>
      <header className={styles.Header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={onShowCart} />
      </header>
      <div className={styles.HeaderImage}>
        <img src={meals} alt='main meals' />
      </div>
    </>
  )
}
