import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import './App.css'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

function App () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)
  return (
    <CartProvider>
      <Cart />
      <Header />
      <Products products={filteredProducts}/>
    </CartProvider>
  )
}

export default App
