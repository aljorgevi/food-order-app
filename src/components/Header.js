import meals from '../assets/bg.jpg'
import styles from '../styles/Header.module.css'
import HeaderCartButton from './HeaderCartButton'
import logo from '../assets/food-logo.png'

export default function Header(props) {
  const { onShowCart } = props

  return (
    <>
      <header className={styles.Header}>
        <div style={{ width: '100px' }}>
          <img className={styles.HeaderLogo} src={logo} alt='logo' />
        </div>
        <HeaderCartButton onShowCart={onShowCart} />
      </header>
      <div className={styles.HeaderImage}>
        <img src={meals} alt='main meals' />
      </div>
    </>
  )
}
