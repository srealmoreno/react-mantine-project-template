import { Home } from '@pages/Home'
import { NotFound } from '@pages/NotFound'
import { Route, Switch, Router } from 'wouter'
import { name } from '../package.json'

export function App (): JSX.Element {
  return (
    <Router base={`/${name}`}>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}
