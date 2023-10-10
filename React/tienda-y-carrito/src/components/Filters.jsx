import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const priceId = useId()
  const categoryId = useId()
  const { filters, setFilters } = useFilters()

  const handleChangeMinPrice = (event) => {
    setFilters(prev => ({
      ...prev,
      price: event.target.value
    }))
  }
  const handleChangeCategory = (event) => {
    setFilters(prev => ({
      ...prev,
      category: event.target.value
    }))
  }

  return (
    <section>
      <div>
        <label htmlFor={priceId}>Minimo de precio</label>
        <input
          type='range'
          id={priceId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={filters.price}
        />
      <span>${filters.price}</span>
      </div>
      <div>
        <label htmlFor={categoryId}>Categoria</label>
        <select id={categoryId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
