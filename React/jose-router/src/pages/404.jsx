import { Link } from '../Link'

export function Page404 () {
  return (
    <>
      <h1>La pagina que intentas buscar no existe</h1>
      <Link to='/'>Volver al inicio</Link>
    </>
  )
}
