import { Home } from '@pages/Home'
import { NotFound } from '@pages/NotFound'
import { Route, Switch } from 'wouter'

export function App (): JSX.Element {
  return (
    <Switch>
      <Route path='/' component={Home} />
      <Route path='/home' component={Home} />
      <Route component={NotFound} />
    </Switch>
  )
}
