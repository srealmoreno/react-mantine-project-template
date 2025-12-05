import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { MantineApp } from './Mantine'

const rootElement = document.querySelector<HTMLElement>('#root')

if (rootElement == null) {
  throw new Error('No root element found')
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <MantineApp />
  </StrictMode>
)
