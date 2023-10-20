import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title: 'Inicio',
    button: 'Ir a acerca de',
    description: 'Este es una pagina de ejemplo'
  },
  en: {
    title: 'Home',
    button: 'Go to about',
    description: 'This is an example page'
  }
}

const useI18n = (lan) => {
  console.log(lan)
  return i18n[lan] || i18n.es
}

export default function HomePAge ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <Link to='/about'>{i18n.button} </Link>
    </>
  )
}
