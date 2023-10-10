import { Filters } from './Filters.jsx'

export function Header () {
  return (
    <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <h1>React shop </h1>
      <Filters />
    </header>
  )
}
