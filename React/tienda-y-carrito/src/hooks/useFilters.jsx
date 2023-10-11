import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters () {
  // const [filters, setfilters] = useState({
  //   category: 'all',
  //   price: 0
  // })
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return product.price >= filters.price &&
      (
        filters.category === 'all' ||
        product.category === filters.category
      )
    })
  }
  return { filters, filterProducts, setFilters }
}
