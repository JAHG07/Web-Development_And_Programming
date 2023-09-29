import { useState, useEffect } from 'react'
const CAT_ENDPOINT_URL = 'https://cataas.com/'

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageURL] = useState('')

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
  return { imageUrl: `${CAT_ENDPOINT_URL}${imageUrl}` }
}
