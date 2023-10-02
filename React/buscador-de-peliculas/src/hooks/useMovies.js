import responseMovies from '../Mocks/ok-res.json'
import withoutResults from '../Mocks/no-res.json'

export const useMovies = () => {
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => (
    {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }
  ))
  return { movies: mappedMovies }
}
