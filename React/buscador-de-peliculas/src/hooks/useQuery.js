import { useState, useEffect, useRef } from 'react'

export const useQuery = () => {
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const isFirst = useRef(true)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = query !== ''
      return
    }
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
