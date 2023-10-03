import { useMemo, useRef, useState, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export const useMovies = ({ query, sort }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previusSerch = useRef(query)

  const getMovies = useCallback(async ({ query }) => {
    if (query === previusSerch.current) return

    try {
      setLoading(true)
      setError(null)
      previusSerch.current = query
      const newMovies = await searchMovies({ query })
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  , [])

  const sortMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortMovies, getMovies, loading, error }
}
