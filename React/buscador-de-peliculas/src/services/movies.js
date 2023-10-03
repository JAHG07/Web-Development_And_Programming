const APPI_KEY = '43c3b8'

export const searchMovies = async ({ query }) => {
  if (query === '') return null
  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${APPI_KEY}&s=${query}`)
    const json = await response.json()
    const movies = json.Search

    return movies?.map(movie => (
      {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      }
    ))
  } catch (e) {
    throw new Error('Error searchin movies')
  }
}
