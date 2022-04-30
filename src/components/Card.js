import styles from '../styles/Card.module.css'

export default function Card({ children }) {
  return <div className={styles.Card}>{children}</div>
}
