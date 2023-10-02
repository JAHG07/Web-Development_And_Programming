import { Movies } from './components/Movies'
import './App.css'
import { useMovies } from './hooks/useMovies'

const App = () => {
  const { movies } = useMovies()
  // const inputRef = useRef()

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const value = inputRef.current.value
  //   alert(value)
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new window.FormData(event.target))
    console.log(fields.query)
  }
  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form action='' onSubmit={handleSubmit}>
          <input name='query' type='text' placeholder='Advengers, Matrix, Dead Pool' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
