const ListOfMovies = ({ movies }) => {
  return (
    <ul>
      {
        movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt='Movies image' />
          </li>
        ))
      }
    </ul>
  )
}

const NoMoviesResults = () => {
  return (
    <p>No se encontro nada</p>
  )
}

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />
  )
}