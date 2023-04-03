import { useCallback, useState } from 'react'
import { UseCounterReturn } from '@interfaces/UseCounter'

export function useCounter ({ initialCount = 0 } = {}): UseCounterReturn {
  const [count, setCount] = useState(initialCount)

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const decrement = useCallback(() => {
    setCount(count - 1)
  }, [count])

  const reset = useCallback(() => {
    setCount(0)
  }, [])

  return {
    count,
    increment,
    decrement,
    reset
  }
}
