import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const rootElement = document.querySelector<HTMLElement>('#root')

if (rootElement == null) {
  throw new Error('No root element found')
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
