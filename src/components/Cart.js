import styles from '../styles/Cart.module.css'

export default function Cart(props) {
  const CART_ITEMS = [
    { id: 'c1', name: 'Sushi', price: 22.99, amount: 2 },
    { id: 'c2', name: 'Schnitzel', price: 16.5, amount: 1 },
    { id: 'c3', name: 'Barbecue Burger', price: 12.99, amount: 5 },
    { id: 'c4', name: 'Green Bowl', price: 18.99, amount: 2 }
  ]
  return (
    <div>
      <ul className={styles.Cart}>
        {CART_ITEMS.map(item => {
          const { id, name, price, amount } = item

          return <li>{name}</li>
        })}
      </ul>
      <div className={styles.CartTotal}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.CartActions}>
        <button>Close</button>
        <button style={{ color: 'white' }}>Order</button>
      </div>
    </div>
  )
}
