import { useEffect, useState, Children } from 'react'
import { EVENTS } from '../const'
import { match } from 'path-to-regexp'
import { getCurrentPath } from './utils'

export function Router ({ children, routes = [], defaltComponent: DefaltComponent = () => null }) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath())
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath())
    }
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  const routesFromChilden = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'
    return isRoute ? props : null
  })

  const routsToUse = routes.concat(routesFromChilden).filter(Boolean)

  const Page = routsToUse.find(({ path }) => {
    if (path === currentPath) return true

    const matchedURL = match(path, { decode: decodeURIComponent })
    const matched = matchedURL(currentPath)
    if (!matched) return false

    routeParams = matched.params
    return true
  })?.Component
  return Page
    ? <Page routeParams={routeParams} />
    : <DefaltComponent routeParams={routeParams} />
}
