import MealItem from './MealItem'
import Card from './Card'
import styles from '../styles/AvailableMeals.module.css'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99
  }
]

export default function AvailableMeals() {
  return (
    <section className={styles.AvailableMeals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map(meal => {
            const { id, name, description, price } = meal
            return (
              <MealItem
                key={id}
                name={name}
                description={description}
                price={price}
              />
            )
          })}
        </ul>
      </Card>
    </section>
  )
}
