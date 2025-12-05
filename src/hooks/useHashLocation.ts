import { useLocationProperty, navigate } from 'wouter/use-location'

function hashLocation (): string {
  const hash = window.location.hash.replace(/^#/, '')

  if (hash === '') {
    return '/'
  }

  return hash
}

function hashNavigate (to: string): void {
  navigate('#' + to)
}

export function useHashLocation (): [string, (path: string, ...args: any[]) => any] {
  const location = useLocationProperty(hashLocation)
  return [location, hashNavigate]
}
