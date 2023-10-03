import { Movies } from './components/Movies'
import './App.css'
import { useMovies } from './hooks/useMovies'
import { useQuery } from './hooks/useQuery'
import { useRef, useState, useCallback } from 'react'
import debounce from "just-debounce-it"

const App = () => {
  const [sort, setSort] = useState(false)
  const { query, setQuery, error } = useQuery()
  const { movies, getMovies, loading } = useMovies({ query, sort })
  const counter = useRef(0)
  // const inputRef = useRef()

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const value = inputRef.current.value
  //   alert(value)
  // }
  counter.current++
  // console.log(counter)
  // console.log('render')

  const debancedGetMovies = useCallback(debounce((query) => {
    getMovies({ query })
  }, 300)
  , [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    // const { field } = Object.fromEntries(new window.FormData(event.target))
    getMovies({ query })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
    debancedGetMovies(newQuery)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form action='' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' type='text' placeholder='Advengers, Matrix, Dead Pool' />
          <button type='submit'>Buscar</button>
          <input type='checkbox' onChange={handleSort} checked={sort} />
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>Loading ...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
