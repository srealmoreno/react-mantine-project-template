
import { TitlePage } from '@components/TitlePage'
import { useCounter } from '@hooks/useCounter'
export function Home (): JSX.Element {
  const { count, increment, decrement, reset } = useCounter()

  return (
    <>
      <TitlePage title='Home' subtitle='This is the home page' />
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}
