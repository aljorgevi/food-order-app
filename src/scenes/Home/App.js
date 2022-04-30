import Header from '../../components/Header'
import Meals from '../../components/Meals'
import Cart from '../../components/Cart'

function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  )
}

export default App
