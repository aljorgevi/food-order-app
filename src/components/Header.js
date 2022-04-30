import meals from '../assets/meals.jpeg'
import styles from '../styles/Header.module.css'

export default function Header(props) {
  return (
    <>
      <header className={styles.Header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles.HeaderImage}>
        <img src={meals} alt='main meals' />
      </div>
    </>
  )
}
