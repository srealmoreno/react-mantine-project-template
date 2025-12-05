import { ReactNode } from 'react'
import { MatcherFn, Path, RouterObject } from 'wouter'

export interface HashRouterProps {
  children: ReactNode
  base?: Path
  matcher?: MatcherFn
  parent?: RouterObject
}
