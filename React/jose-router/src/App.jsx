import './App.css'
import { Suspense, lazy } from 'react'
import { Page404 } from './pages/404'
import { SearchPage } from './pages/SearchPage'

import { Router } from './pages/Router'
import { Route } from './pages/Route'
import HomePAge from './pages/Home.jsx'

const HomePage = lazy(() => import('./pages/Home.jsx'))
const AboutPage = lazy(() => import('./pages/About.jsx'))

const routes = [
  {
    path: '/:lang/',
    Component: HomePAge
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={routes} defaltComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
