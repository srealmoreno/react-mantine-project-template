import { useHashLocation } from '@hooks/useHashLocation'
import { HashRouterProps } from '@interfaces/HashRouter'
import { Router } from 'wouter'

export function HashRouter ({ base, children, matcher, parent }: HashRouterProps): JSX.Element {
  return (
    <Router base={base} hook={useHashLocation} matcher={matcher} parent={parent}>
      {children}
    </Router>
  )
}
