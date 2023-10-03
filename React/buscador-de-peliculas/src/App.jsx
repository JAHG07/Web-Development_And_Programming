import { Movies } from './components/Movies'
import './App.css'
import { useMovies } from './hooks/useMovies'
import { useEffect, useState } from 'react'

const useQuery = () => {
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (query === '') {
      setError('No se puede buscar vacio')
      return
    }
    if (query === '') {
      setError('')
      return
    }
    if (query.length <= 1) {
      setError('No se puede buascar solo con una letra')
      return
    }
    setError('')
  }, [query])

  return { query, setQuery, error }
}

const App = () => {
  const { movies } = useMovies()
  const { query, setQuery, error } = useQuery()
  // const inputRef = useRef()

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const value = inputRef.current.value
  //   alert(value)
  // }

  console.log('render')

  const handleSubmit = (event) => {
    event.preventDefault()
    // const { field } = Object.fromEntries(new window.FormData(event.target))
    console.log(query)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form action='' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' type='text' placeholder='Advengers, Matrix, Dead Pool' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
