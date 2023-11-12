import { type TODO_FILTERS, FILTERS_BUTTONS } from '../consts'
import { type FilterValue } from '../types'

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className="filters">
      <li>
        <a
          className={`${filterSelected === 'all' ? 'selected' : ''}`}
          >
            Todos
          </a>
      </li>
    </ul>
  )
}
