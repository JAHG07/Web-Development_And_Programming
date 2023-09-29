import { useState, useEffect } from 'react'
import { randomFact } from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState('')

  const refreshFact = () => {
    randomFact().then(newFact => setFact(newFact))
  }

  useEffect(() => {
    refreshFact()
  }, [])

  return { fact, refreshFact }
}
