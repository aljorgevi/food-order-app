import MealItem from './MealItem'
import Card from './Card'
import styles from '../styles/AvailableMeals.module.css'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Pizza Napolitana',
    description:
      'A basic dough, raw tomatoes, fresh mozzarella cheese, fresh basil, and olive oil.',
    price: 22.99
  },
  {
    id: 'm2',
    name: 'Gnocchi',
    description: 'A dumpling made out of potatoes',
    price: 16.5
  },
  {
    id: 'm3',
    name: 'Lasagna',
    description:
      'Lasagna is our most popular recipe. With basil, sausage, ground beef and three types of cheese...',
    price: 12.99
  },
  {
    id: 'm4',
    name: 'Pizza Pepperoni',
    description:
      'Pepperoni is a meat mixture of beef and pork that has been cured and seasoned with paprika and chili powder',
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
                id={id}
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
