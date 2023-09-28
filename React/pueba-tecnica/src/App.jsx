import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOMFACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_URL = 'https://cataas.com/'

export const App = () => {
  const [fact, setFact] = useState('')
  const [imageUrl, setImageURL] = useState('')

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOMFACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    console.log(firstWord)
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImageURL(url)
      })
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_ENDPOINT_URL}${imageUrl}`} alt='Image from the first world of a fetch' />}
    </main>
  )
}
