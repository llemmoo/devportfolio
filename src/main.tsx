import { StrictMode } from 'react'
import { Provider } from './components/ui/provider'
import { Theme } from "@chakra-ui/react"
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <Provider>
        <App />
      </Provider>
    </Theme>
  </StrictMode>,
)
