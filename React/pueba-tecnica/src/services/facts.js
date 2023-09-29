const CAT_ENDPOINT_RANDOMFACT = 'https://catfact.ninja/fact'

export const randomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOMFACT)
  const data = await res.json()
  const { fact } = data
  return fact
}
