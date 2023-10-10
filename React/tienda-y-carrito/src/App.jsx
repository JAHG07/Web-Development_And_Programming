import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import './App.css'
import { useState } from 'react'

function App () {
  const [products] = useState(initialProducts)
  const [filters, setfilters] = useState({
    category: 'all',
    price: 0

  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return product.price >= filters.price &&
      (
        filters.category === 'all' ||
        product.category === filters.category
      )
    })
  }

  return (
    <Products products={filterProducts}/>
  )
}

export default App
